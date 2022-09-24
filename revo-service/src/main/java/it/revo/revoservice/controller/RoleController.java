package it.revo.revoservice.controller;

import it.revo.revoservice.entity.Role;
import it.revo.revoservice.repository.RoleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/role")
public class RoleController {
    @Autowired
    RoleRepository roleRepository;

    @GetMapping
    public HttpEntity<?> getRoles(){
        List<Role> all = roleRepository.findAll();
        return ResponseEntity.ok(all);
    }
}
