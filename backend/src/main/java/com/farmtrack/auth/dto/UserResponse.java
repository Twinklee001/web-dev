package com.farmtrack.auth.dto;

import com.farmtrack.user.entity.UserStatus;

import java.time.LocalDateTime;

public record UserResponse(
        Long id,
        String fullName,
        String email,
        UserStatus status,
        LocalDateTime createdAt
) {
}