package it.revo.revoservice.service.bot;

import it.revo.revoservice.entity.enums.TgUserStatus;
import it.revo.revoservice.entity.tgBot.UserBot;
import it.revo.revoservice.payload.ApiResponse;
import it.revo.revoservice.payload.bot.BotUserDto;
import it.revo.revoservice.repository.bot.BotUserRepository;
import org.springframework.stereotype.Service;

@Service
public class UserBotService {
    private final BotUserRepository botUserRepository;

    public UserBotService(BotUserRepository botUserRepository) {
        this.botUserRepository = botUserRepository;
    }

    public void startUsersSave(UserBot bot) {
        try {
            boolean b = botUserRepository.existsUserBotByChatId(bot.getChatId());
            if (!b) {
                UserBot userBot = new UserBot();
                if (bot.getTgSurname() == null) {
                    userBot.setTgSurname("null");
                } else {
                    userBot.setTgUsername(bot.getTgUsername());
                }
                if (bot.getTgUsername() == null) {
                    userBot.setTgUsername("null");
                } else {
                    userBot.setTgUsername(bot.getTgUsername());
                }
                userBot.setTgUserStatus(bot.getTgUserStatus());
                userBot.setChatId(bot.getChatId());
                botUserRepository.save(userBot);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
