package it.revo.revoservice.controller;

import it.revo.revoservice.entity.allAdmins.Messenger;
import it.revo.revoservice.payload.ApiResponse;
import it.revo.revoservice.payload.SendMessage;
import it.revo.revoservice.repository.MessageRepository;
import it.revo.revoservice.service.MessageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/message")
public class MessageController {
    @Autowired
    MessageService messageService;

    @Autowired
    MessageRepository messageRepository;

    @PostMapping
    public HttpEntity<?> sendMsg(@RequestBody SendMessage sendMessage) {
        ApiResponse apiResponse = messageService.sendMessage(sendMessage);
        return ResponseEntity.ok(apiResponse);
    }

    @GetMapping("/getByUser/{id}")
    public HttpEntity<?> getMessageByUserId(@PathVariable UUID id) {
        List<SendMessage> messagebyUserId = messageService.getMessagebyUserId(id);
        return ResponseEntity.ok(messagebyUserId);
    }

    @GetMapping
    public HttpEntity<?> getAll() {
        List<Messenger> all = messageRepository.findAll();
        return ResponseEntity.ok(all);
    }

    @DeleteMapping("/{id}")
    public HttpEntity<?> deleteMsg(@PathVariable UUID id) {
        ApiResponse apiResponse = messageService.deleteMessage(id);
        return ResponseEntity.ok(apiResponse);
    }
}
