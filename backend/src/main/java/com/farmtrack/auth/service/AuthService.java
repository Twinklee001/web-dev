package com.farmtrack.auth.service;

import com.farmtrack.auth.dto.LoginRequest;
import com.farmtrack.auth.dto.LoginResponse;
import com.farmtrack.auth.dto.RegisterRequest;
import com.farmtrack.auth.dto.UserResponse;
import com.farmtrack.common.exception.BadRequestException;
import com.farmtrack.common.exception.UnauthorizedException;
import com.farmtrack.user.entity.User;
import com.farmtrack.user.entity.UserStatus;
import com.farmtrack.user.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    public UserResponse register(RegisterRequest request) {
        if (userRepository.existsByEmail(request.email())) {
            throw new BadRequestException("Email already exists");
        }

        User user = User.builder()
                .fullName(request.fullName())
                .email(request.email())
                .passwordHash(passwordEncoder.encode(request.password()))
                .status(UserStatus.ACTIVE)
                .build();

        User savedUser = userRepository.save(user);
        return mapToUserResponse(savedUser);
    }

    public LoginResponse login(LoginRequest request) {
        User user = userRepository.findByEmail(request.email())
                .orElseThrow(() -> new UnauthorizedException("Invalid email or password"));

        if (!passwordEncoder.matches(request.password(), user.getPasswordHash())) {
            throw new UnauthorizedException("Invalid email or password");
        }

        return new LoginResponse(
                "temporary-token",
                "Bearer",
                mapToUserResponse(user)
        );
    }

    public UserResponse mapToUserResponse(User user) {
        return new UserResponse(
                user.getId(),
                user.getFullName(),
                user.getEmail(),
                user.getStatus(),
                user.getCreatedAt()
        );
    }
}