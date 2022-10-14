package it.revo.revoservice.payload.crm;

import it.revo.revoservice.entity.enums.FromWhereStatus;
import it.revo.revoservice.entity.enums.LidStatus;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;
import java.util.List;
import java.util.UUID;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class PupilDto {
    private UUID id;

    private String name;

    private String surname;

    private String phoneNumber;

    private FromWhereStatus fromWhereStatus;

    private Date birthDate;

    private List<UUID> coursesId;

    private boolean isActive = true;//o'quvchi activmi

    private boolean isClientSee = false;//o'quvchi client panelga ko'rsatilsinmi

    private String pupilDescription;

    private LidStatus lidStatus;

    private double balance;

    private Boolean isVisitation;

    public PupilDto(String name, String surname, String phoneNumber, FromWhereStatus fromWhereStatus, Date birthDate, List<UUID> coursesId, LidStatus lidStatus) {
        this.name = name;
        this.surname = surname;
        this.phoneNumber = phoneNumber;
        this.fromWhereStatus = fromWhereStatus;
        this.birthDate = birthDate;
        this.coursesId = coursesId;
        this.lidStatus = lidStatus;
    }
}
