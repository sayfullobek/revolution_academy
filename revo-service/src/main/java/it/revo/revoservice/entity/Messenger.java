package it.revo.revoservice.entity;

import it.revo.revoservice.entity.template.AbsEntity;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;

@EqualsAndHashCode(callSuper = true)
@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Messenger extends AbsEntity {
    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(name = "messenger_users",
            joinColumns = {@JoinColumn(name = "messenger_id")},
            inverseJoinColumns = {@JoinColumn(name = "user_id")})
    private List<User> user;

    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(name = "messenger_from_users",
            joinColumns = {@JoinColumn(name = "messenger_id")},
            inverseJoinColumns = {@JoinColumn(name = "from_user_id")})
    private List<User> fromUser;

    @Column(nullable = false, length = 10000000)
    private String message;

    private String kimdanKimga;
}
