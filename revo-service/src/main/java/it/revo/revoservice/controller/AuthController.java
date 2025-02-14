package it.revo.revoservice.controller;

import it.revo.revoservice.entity.User;
import it.revo.revoservice.payload.*;
import it.revo.revoservice.repository.UserRepository;
import it.revo.revoservice.security.JwtTokenProvider;
import it.revo.revoservice.service.AuthService;
import it.revo.revoservice.service.DeleteComponent;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.rest.webmvc.ResourceNotFoundException;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/auth")
public class AuthController {
    private final
    AuthService authService;
    private final
    AuthenticationManager authenticationManager;
    private final
    UserRepository authRepository;
    private final
    JwtTokenProvider jwtTokenProvider;
    private final
    DeleteComponent delete;

    public AuthController(AuthService authService, AuthenticationManager authenticationManager, UserRepository authRepository, JwtTokenProvider jwtTokenProvider, DeleteComponent delete) {
        this.authService = authService;
        this.authenticationManager = authenticationManager;
        this.authRepository = authRepository;
        this.jwtTokenProvider = jwtTokenProvider;
        this.delete = delete;
    }

    @PostMapping("/register")
    public HttpEntity<?> register(@RequestBody ReqRegister reqRegister) {
        ApiResponse response = authService.register(reqRegister);
        return ResponseEntity.status(response.isSuccess() ? HttpStatus.CREATED : HttpStatus.CONFLICT)
                .body(response.isSuccess() ? new ApiResponse(response.getMessage(), true, generateToken(reqRegister.getPhoneNumber(), "register")) : response);
    }

    @PostMapping("/login")
    public HttpEntity<?> login(@RequestBody ReqLogin request) {
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(request.getPhoneNumber(), request.getPassword())
        );
        User user = authRepository.findUserByPhoneNumber(request.getPhoneNumber()).orElseThrow(() -> new ResourceNotFoundException("getUser"));
        ResToken resToken = new ResToken(generateToken(request.getPhoneNumber(), "login"));
        System.out.println(ResponseEntity.ok(getMal(user, resToken)));
        return ResponseEntity.ok(getMal(user, resToken));
    }

    private String generateToken(String phoneNumber, String status) {
        User user = authRepository.findUserByPhoneNumber(status.equals("register") ? "+".concat(phoneNumber) : phoneNumber).orElseThrow(() -> new UsernameNotFoundException("getUser"));
        return jwtTokenProvider.generateToken(user.getId());
    }

    public GetLogin getMal(User user, ResToken resToken) {
        return new GetLogin(user, resToken);
    }

    @GetMapping
    public HttpEntity<?> getEmployeList() {
        List<User> all = authRepository.findAll();
        return ResponseEntity.ok(all);
    }

    @GetMapping("/{id}")
    public HttpEntity<?> getOneEmploye(@PathVariable UUID id) {
        return ResponseEntity.ok(authService.getOneUser(id));
    }

    @DeleteMapping("/{id}")
    public HttpEntity<?> deleteUser(@PathVariable UUID id) {
        return ResponseEntity.ok(delete.delete(id, "userRepository"));
    }

    @PutMapping("/fullName/{id}")
    public HttpEntity<?> resetFullName(@PathVariable UUID id, @RequestBody ReqRegister reqRegister) {
        ApiResponse apiResponse = authService.editFullName(id, reqRegister);
        return ResponseEntity.status(apiResponse.isSuccess() ? HttpStatus.CREATED : HttpStatus.CONFLICT)
                .body(apiResponse.isSuccess() ? new ApiResponse(apiResponse.getMessage(), true, reqRegister) : apiResponse);
    }
}
