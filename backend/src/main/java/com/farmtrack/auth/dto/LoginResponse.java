package com.farmtrack.auth.dto;

public record LoginResponse(
        String accessToken,
        String tokenType,
        UserResponse user
) {
}