package it.revo.revoservice.controller;

import it.revo.revoservice.entity.allAdmins.CategoryMessenger;
import it.revo.revoservice.payload.ApiResponse;
import it.revo.revoservice.payload.CategoryMessengerDto;
import it.revo.revoservice.repository.CategoryMessengerRepository;
import it.revo.revoservice.service.CategoryMessengerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/category/messenger")
public class CategoryMessengerController {
    @Autowired
    CategoryMessengerService categoryMessengerService;

    @Autowired
    CategoryMessengerRepository categoryMessengerRepository;

    @PostMapping
    public HttpEntity<?> categoryAdd(@RequestBody CategoryMessengerDto categoryMessengerDto) {
        ApiResponse apiResponse = categoryMessengerService.saveCategoryMsg(categoryMessengerDto);
        return ResponseEntity.ok(apiResponse);
    }

    @GetMapping
    public HttpEntity<?> getAllCategoryMessenger() {
        List<CategoryMessenger> all = categoryMessengerRepository.findAll();
        return ResponseEntity.ok(all);
    }
}
