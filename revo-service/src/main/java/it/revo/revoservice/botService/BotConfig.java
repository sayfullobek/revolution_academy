package it.revo.revoservice.botService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;

@Component
public interface BotConfig {
    String BOT_USERNAME = "revolution_academy_bot";
    String BOT_TOKEN = "5403040118:AAEHUqy7bytjf-glkvMa_RncG4vP0oYZNOY";
    List<String> BUTTONS_UZ = Arrays.asList("Kurslar", "Biz haqimizda", "Statestika", "Biz bilan aloqa", "Mening ma'lumotlarim");
    List<String> BUTTONS_EN = Arrays.asList("Course", "we about", "statistic", "we contact with", "my info");
    List<String> BUTTONS_RU = Arrays.asList("Kurslar", "Biz haqimizda", "Statestika", "Biz bilan aloqa", "men");
    List<String> LANG = Arrays.asList("uz", "en", "ru");
    List<String> FIRSTBUTTON_UZ = Collections.singletonList("Ruyxatdan utish");
    List<String> FIRSTBUTTON_EN = Collections.singletonList("sign up");
    List<String> FIRSTBUTTON_RU = Collections.singletonList("Ruyxatdan utish");
    List<String> COURSE_UZ = Collections.singletonList("Kurslar");
    List<String> COURSE_EN = Collections.singletonList("Course");
    List<String> COURSE_RU = Collections.singletonList("Kurslar");
    String TELEGRAM_LINK = "https://t.me/yangishahrisabz_group";
    String PHONE_NUMBER = "+998990763246";
}
