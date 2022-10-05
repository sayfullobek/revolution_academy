package it.revo.revoservice.entity.crm;

import it.revo.revoservice.entity.template.AbsEntity;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.OneToOne;
import java.util.Date;

@EqualsAndHashCode(callSuper = true)
@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class PupilFee extends AbsEntity {
    @OneToOne(optional = false)
    private Pupils pupils;

    private double howMuchItPays;//o'quvchi qancha to'lov qiladi
    private Date nowMonth; //hozirgi oy
    private boolean isDidHePay = false; //ushbu oq'uvchi oylik to'lovni to'laganmi
}