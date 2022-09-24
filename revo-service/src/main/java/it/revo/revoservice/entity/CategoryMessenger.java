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
public class CategoryMessenger extends AbsEntity {
    @Column(nullable = false)
    private String name;

    @ManyToOne(optional = false)
    private Icons icons;

    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(name = "category_messenger_userId",
            joinColumns = {@JoinColumn(name = "category_messenger_id")},
            inverseJoinColumns = {@JoinColumn(name = "user_id")})
    private List<User> user;
}