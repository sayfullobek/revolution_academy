package it.revo.revoservice.repository.crm;

import it.revo.revoservice.entity.crm.Course;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.UUID;

@CrossOrigin(origins = "http://127.0.0.1:5173/")
public interface CourseRepository extends JpaRepository<Course, UUID> {
    boolean existsCourseByUzNameEqualsIgnoreCaseAndEnNameEqualsIgnoreCaseAndRuNameEqualsIgnoreCase(String uzName, String enName, String ruName);

    boolean existsCourseByUzNameEqualsIgnoreCaseAndEnNameEqualsIgnoreCaseAndRuNameEqualsIgnoreCaseAndIdNot(String uzName, String enName, String ruName, UUID id);
}
