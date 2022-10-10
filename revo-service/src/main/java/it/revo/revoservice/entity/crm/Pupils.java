package it.revo.revoservice.entity.crm;

import it.revo.revoservice.entity.enums.FromWhereStatus;
import it.revo.revoservice.entity.enums.LidStatus;
import it.revo.revoservice.entity.template.AbsEntity;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

@EqualsAndHashCode(callSuper = true)
@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Pupils extends AbsEntity {
    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private String surname;

    @Column(nullable = false, unique = true)
    private String phoneNumber;

    @Enumerated(EnumType.STRING)
    private FromWhereStatus fromWhereStatus;

    private Date birthDate;

    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(name = "pupil_course",
            joinColumns = {@JoinColumn(name = "pupil_id")},
            inverseJoinColumns = {@JoinColumn(name = "course_id")})
    private List<Course> courses;

    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(name = "pupil_pupilFee",
            joinColumns = {@JoinColumn(name = "pupil_id")},
            inverseJoinColumns = {@JoinColumn(name = "pupilFee_id")})
    private List<PupilFee> PupilFees;

    private int nowMonth; //hozirgi oy
    private boolean isDidHePay = false; //ushbu oq'uvchi oylik to'lovni to'laganmi

    private boolean isActive = true;//o'quvchi activmi

    private boolean isClientSee = false;//o'quvchi client panelga ko'rsatilsinmi

    @Column(length = 100000)
    private String pupilDescription;

    private Date whenStart;

    private double balance;

    @Enumerated(EnumType.STRING)
    private LidStatus lidStatus;

    public void changeActive(boolean isActive) {
        this.isActive = isActive;
    }
}
