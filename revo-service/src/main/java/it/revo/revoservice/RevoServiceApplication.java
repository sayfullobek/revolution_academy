package it.revo.revoservice;

import it.revo.revoservice.botService.PrimaryBot;
import it.revo.revoservice.repository.bot.BotUserRepository;
import it.revo.revoservice.repository.crm.CourseRepository;
import it.revo.revoservice.service.bot.UserBotService;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ConfigurableApplicationContext;
import org.telegram.telegrambots.meta.TelegramBotsApi;
import org.telegram.telegrambots.meta.exceptions.TelegramApiException;
import org.telegram.telegrambots.updatesreceivers.DefaultBotSession;

@SpringBootApplication
public class RevoServiceApplication {

    public static void main(String[] args) throws TelegramApiException {
        ConfigurableApplicationContext run = SpringApplication.run(RevoServiceApplication.class, args);
        BotUserRepository botUserRepository = run.getBean(BotUserRepository.class);
        CourseRepository courseRepository = run.getBean(CourseRepository.class);
        UserBotService botService = run.getBean(UserBotService.class);
        TelegramBotsApi botsApi = new TelegramBotsApi(DefaultBotSession.class);
        botsApi.registerBot(new PrimaryBot(botService, botUserRepository, courseRepository));
    }

}
