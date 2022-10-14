package it.revo.revoservice.payload.bot;

import it.revo.revoservice.entity.crm.Course;
import it.revo.revoservice.entity.enums.TgUserStatus;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.ManyToOne;
import java.util.UUID;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class BotUserDto {
    private UUID id;

    private Long chatId;

    private String name;

    private String surname;

    private String phoneNumber;

    private Course course;

    private TgUserStatus tgUserStatus;

    private String tgName;
    private String tgSurname;
    private String tgUsername;
    private String tgPhoneNumber;

    public BotUserDto(Long chatId, String name, String surname, String phoneNumber) {
        this.chatId = chatId;
        this.name = name;
        this.surname = surname;
        this.phoneNumber = phoneNumber;
    }

    public BotUserDto(Long chatId, String tgName, String tgSurname, String tgUsername, String tgPhoneNumber) {
        this.chatId = chatId;
        this.tgName = tgName;
        this.tgSurname = tgSurname;
        this.tgUsername = tgUsername;
        this.tgPhoneNumber = tgPhoneNumber;
    }
}
