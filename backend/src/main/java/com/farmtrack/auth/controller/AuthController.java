package com.farmtrack.auth.controller;

import com.farmtrack.auth.dto.LoginRequest;
import com.farmtrack.auth.dto.LoginResponse;
import com.farmtrack.auth.dto.RegisterRequest;
import com.farmtrack.auth.dto.UserResponse;
import com.farmtrack.auth.service.AuthService;
import com.farmtrack.common.response.ApiResponse;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
public class AuthController {

    private final AuthService authService;

    @PostMapping("/register")
    public ApiResponse<UserResponse> register(@Valid @RequestBody RegisterRequest request) {
        return ApiResponse.success("Register successful", authService.register(request));
    }

    @PostMapping("/login")
    public ApiResponse<LoginResponse> login(@Valid @RequestBody LoginRequest request) {
        return ApiResponse.success("Login successful", authService.login(request));
    }
}