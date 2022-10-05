package it.revo.revoservice.entity.allAdmins;

import it.revo.revoservice.entity.template.AbsNameEntity;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Entity;

@EqualsAndHashCode(callSuper = true)
@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Icons extends AbsNameEntity {
    @Column(nullable = false)
    private String iconName;
}
