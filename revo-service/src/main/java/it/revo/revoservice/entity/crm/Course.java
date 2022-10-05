package it.revo.revoservice.entity.crm;

import it.revo.revoservice.entity.enums.CourseType;
import it.revo.revoservice.entity.template.AbsNameEntity;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.validation.constraints.NotBlank;

@EqualsAndHashCode(callSuper = true)
@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Course extends AbsNameEntity {
    @NotBlank
    private boolean isActiveClient = false;

    @Column(nullable = false)
    private double coursePrice;

    @Column(length = 100000)
    private String courseDescription;

    @Enumerated(EnumType.STRING)
    private CourseType courseType;

    public Course(double coursePrice, CourseType courseType) {
        this.coursePrice = coursePrice;
        this.courseType = courseType;
    }
}
