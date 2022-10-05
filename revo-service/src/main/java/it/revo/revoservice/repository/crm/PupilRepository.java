package it.revo.revoservice.repository.crm;

import it.revo.revoservice.entity.crm.Pupils;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.List;
import java.util.UUID;

@CrossOrigin(origins = "http://127.0.0.1:5173/")
public interface PupilRepository extends JpaRepository<Pupils, UUID> {
    boolean existsPupilsByPhoneNumber(String phoneNumber);

    List<Pupils> findAllPupilsByCoursesId(UUID courses_id);
}
