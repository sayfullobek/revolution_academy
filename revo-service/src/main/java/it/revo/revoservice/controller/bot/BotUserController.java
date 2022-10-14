package it.revo.revoservice.controller.bot;

import it.revo.revoservice.entity.tgBot.UserBot;
import it.revo.revoservice.payload.bot.BotUserDto;
import it.revo.revoservice.repository.bot.BotUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/bot/register")
public class BotUserController {
    @Autowired
    BotUserRepository botUserRepository;

    @GetMapping
    public HttpEntity<?> getAllBotUser() {
        try {
            List<UserBot> all = botUserRepository.findAll();
            return ResponseEntity.ok(all);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.ok(e);
        }
    }
}
