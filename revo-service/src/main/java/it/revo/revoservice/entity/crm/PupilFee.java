package it.revo.revoservice.entity.crm;

import it.revo.revoservice.entity.enums.DarsVaqti;
import it.revo.revoservice.entity.enums.HaftaKunlari;
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
public class PupilFee extends AbsEntity {
    private double howMuchItPays;//o'quvchi qancha to'lov qiladi bir kunga
    private String haftaKuni;
    private Integer sana;
    private Boolean isVisitation = false; //o'quvchi keldimi yoqmi ushbu kunga

    @Enumerated(EnumType.STRING)
    private DarsVaqti darsVaqti;
}