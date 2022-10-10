package it.revo.revoservice.entity.crm;

import it.revo.revoservice.entity.enums.DarsVaqti;
import it.revo.revoservice.entity.enums.WeekType;
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
@Entity(name = "groups")
public class Group extends AbsEntity {
    @Column(nullable = false, unique = true)
    private String groupName;

    @ManyToOne(optional = false)
    private Course course;

    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(name = "groups_pupils",
            joinColumns = {@JoinColumn(name = "groups_id")},
            inverseJoinColumns = {@JoinColumn(name = "pupils_id")})
    private List<Pupils> pupils;

    @Enumerated(EnumType.STRING)
    private WeekType weekType;

    @Enumerated(EnumType.STRING)
    private DarsVaqti darsVaqti;
}
