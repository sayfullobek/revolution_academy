package it.revo.revoservice.payload.crm;

import it.revo.revoservice.entity.crm.Course;
import it.revo.revoservice.entity.crm.Pupils;
import it.revo.revoservice.entity.enums.DarsVaqti;
import it.revo.revoservice.entity.enums.WeekType;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.util.List;
import java.util.UUID;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class GroupDto {
    private UUID id;

    @NotNull
    private String groupName; //guruhning nomi

    @NotBlank
    private UUID courseId; //ushbu guruh qaysi yo'nalishga tegishli

    private List<UUID> pupilsId; //ushbu guruhning oq'uvchilari

    private WeekType weekType;
    private DarsVaqti darsVaqti;

    public GroupDto(String groupName, UUID courseId, WeekType weekType, DarsVaqti darsVaqti) {
        this.groupName = groupName;
        this.courseId = courseId;
        this.weekType = weekType;
        this.darsVaqti = darsVaqti;
    }
}
