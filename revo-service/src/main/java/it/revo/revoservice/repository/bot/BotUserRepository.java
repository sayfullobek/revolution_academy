package it.revo.revoservice.repository.bot;

import it.revo.revoservice.entity.tgBot.UserBot;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface BotUserRepository extends JpaRepository<UserBot, UUID> {
    boolean existsUserBotByChatId(Long chatId);
}
