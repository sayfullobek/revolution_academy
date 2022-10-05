package it.revo.revoservice.payload.crm;

import it.revo.revoservice.entity.enums.CourseType;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CourseDto {
    private String uzName;

    private String enName;

    private String ruName;

    private boolean isActiveClient;

    private double coursePrice;

    private String courseDescription;

    private CourseType courseType;
}
