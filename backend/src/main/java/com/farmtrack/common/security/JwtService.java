package com.farmtrack.common.security;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import javax.crypto.Mac;
import javax.crypto.spec.SecretKeySpec;
import java.nio.charset.StandardCharsets;
import java.time.Instant;
import java.util.Base64;
import java.util.Map;

@Service
@RequiredArgsConstructor
public class JwtService {

    private final ObjectMapper objectMapper;

    @Value("${app.jwt.secret}")
    private String secret;

    @Value("${app.jwt.expiration-ms}")
    private long expirationMs;

    public String generateToken(String subject) {
        long now = Instant.now().getEpochSecond();

        Map<String, Object> header = Map.of(
                "alg", "HS256",
                "typ", "JWT"
        );

        Map<String, Object> payload = Map.of(
                "sub", subject,
                "iat", now,
                "exp", now + (expirationMs / 1000)
        );

        String headerPart = base64UrlEncode(toJsonBytes(header));
        String payloadPart = base64UrlEncode(toJsonBytes(payload));
        String signaturePart = sign(headerPart + "." + payloadPart);

        return headerPart + "." + payloadPart + "." + signaturePart;
    }

    public String extractSubject(String token) {
        Object subject = parseAndValidate(token).get("sub");
        return subject == null ? null : subject.toString();
    }

    public boolean isTokenValid(String token, String expectedSubject) {
        try {
            Map<String, Object> payload = parseAndValidate(token);

            String subject = payload.get("sub").toString();
            long exp = Long.parseLong(payload.get("exp").toString());

            return expectedSubject.equals(subject)
                    && Instant.now().getEpochSecond() < exp;
        } catch (Exception e) {
            return false;
        }
    }

    private Map<String, Object> parseAndValidate(String token) {
        try {
            String[] parts = token.split("\\.");
            if (parts.length != 3) {
                throw new IllegalArgumentException("Invalid token");
            }

            String content = parts[0] + "." + parts[1];
            String expectedSignature = sign(content);

            if (!constantTimeEquals(expectedSignature, parts[2])) {
                throw new IllegalArgumentException("Invalid token signature");
            }

            byte[] payloadBytes = Base64.getUrlDecoder().decode(parts[1]);
            return objectMapper.readValue(payloadBytes, new TypeReference<>() {});
        } catch (Exception e) {
            throw new IllegalArgumentException("Invalid token", e);
        }
    }

    private String sign(String content) {
        try {
            Mac mac = Mac.getInstance("HmacSHA256");
            SecretKeySpec keySpec = new SecretKeySpec(
                    secret.getBytes(StandardCharsets.UTF_8),
                    "HmacSHA256"
            );
            mac.init(keySpec);

            byte[] signatureBytes = mac.doFinal(content.getBytes(StandardCharsets.UTF_8));
            return Base64.getUrlEncoder().withoutPadding().encodeToString(signatureBytes);
        } catch (Exception e) {
            throw new IllegalStateException("Could not sign token", e);
        }
    }

    private byte[] toJsonBytes(Map<String, Object> data) {
        try {
            return objectMapper.writeValueAsBytes(data);
        } catch (Exception e) {
            throw new IllegalStateException("Could not serialize token data", e);
        }
    }

    private String base64UrlEncode(byte[] bytes) {
        return Base64.getUrlEncoder().withoutPadding().encodeToString(bytes);
    }

    private boolean constantTimeEquals(String a, String b) {
        if (a == null || b == null || a.length() != b.length()) {
            return false;
        }

        int result = 0;
        for (int i = 0; i < a.length(); i++) {
            result |= a.charAt(i) ^ b.charAt(i);
        }
        return result == 0;
    }
}