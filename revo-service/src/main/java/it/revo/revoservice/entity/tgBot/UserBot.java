package it.revo.revoservice.entity.tgBot;

import it.revo.revoservice.entity.crm.Course;
import it.revo.revoservice.entity.enums.TgUserStatus;
import it.revo.revoservice.entity.template.AbsEntity;
import jdk.jfr.Enabled;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.sql.Timestamp;
import java.util.UUID;

@EqualsAndHashCode(callSuper = true)
@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity(name = "usersBot")
public class UserBot extends AbsEntity {
    private Long chatId;

    private String name;

    private String surname;

    private String phoneNumber;

    @ManyToOne
    private Course course;

    @Enumerated(EnumType.STRING)
    private TgUserStatus tgUserStatus;

    private String tgName;
    private String tgSurname;
    private String tgUsername;

    public UserBot(Long chatId, String name, String surname, String phoneNumber) {
        this.chatId = chatId;
        this.name = name;
        this.surname = surname;
        this.phoneNumber = phoneNumber;
    }

    public UserBot(TgUserStatus tgUserStatus, Long chatId, String tgName, String tgSurname, String tgUsername) {
        this.tgUserStatus = tgUserStatus;
        this.chatId = chatId;
        this.tgName = tgName;
        this.tgSurname = tgSurname;
        this.tgUsername = tgUsername;
    }
}
