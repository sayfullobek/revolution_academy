package it.revo.revoservice.controller;

import it.revo.revoservice.service.FileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.UUID;

@RestController
@RequestMapping("/api/upload")
public class fileController {

    @Autowired
    FileService fileService;

    @PostMapping("/{id}")
    public void uploadFile(@PathVariable UUID id, @RequestParam("file") MultipartFile file) {
        fileService.uploadFile(id, file);
    }
}
