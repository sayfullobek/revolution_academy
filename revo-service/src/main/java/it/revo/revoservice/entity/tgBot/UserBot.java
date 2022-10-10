package it.revo.revoservice.entity.tgBot;

import it.revo.revoservice.entity.crm.Course;
import it.revo.revoservice.entity.enums.TgUserStatus;
import it.revo.revoservice.entity.template.AbsEntity;
import jdk.jfr.Enabled;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.ManyToOne;

@EqualsAndHashCode(callSuper = true)
@Data
@AllArgsConstructor
@NoArgsConstructor
@Enabled
public class UserBot extends AbsEntity {
    private Long chatId;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private String surname;

    @Column(nullable = false)
    private String phoneNumber;

    @ManyToOne(optional = false)
    private Course course;

    @Enumerated(EnumType.STRING)
    private TgUserStatus tgUserStatus;

    private String tgName;
    private String tgSurname;
    private String tgUsername;
}
