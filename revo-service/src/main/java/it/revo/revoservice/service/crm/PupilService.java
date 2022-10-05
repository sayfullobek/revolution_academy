package it.revo.revoservice.service.crm;

import it.revo.revoservice.entity.crm.Course;
import it.revo.revoservice.entity.crm.Pupils;
import it.revo.revoservice.entity.enums.LidStatus;
import it.revo.revoservice.payload.ApiResponse;
import it.revo.revoservice.payload.crm.PupilDto;
import it.revo.revoservice.repository.crm.CourseRepository;
import it.revo.revoservice.repository.crm.PupilRepository;
import org.springframework.data.rest.webmvc.ResourceNotFoundException;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class PupilService {
    private final PupilRepository pupilRepository;
    private final CourseRepository courseRepository;

    public PupilService(PupilRepository pupilRepository, CourseRepository courseRepository) {
        this.pupilRepository = pupilRepository;
        this.courseRepository = courseRepository;
    }

    public ApiResponse addPupilCrm(PupilDto pupilDto) {
        try {
            boolean b = pupilRepository.existsPupilsByPhoneNumber(pupilDto.getPhoneNumber());
            if (!b) {
                Pupils pupils = new Pupils();
                pupils.setName(pupilDto.getName());
                pupils.setSurname(pupilDto.getSurname());
                pupils.setPhoneNumber(pupilDto.getPhoneNumber());
                pupils.setFromWhereStatus(pupilDto.getFromWhereStatus());
                pupils.setBirthDate(pupilDto.getBirthDate());
                List<Course> allById = courseRepository.findAllById(pupilDto.getCoursesId());
                List<Course> courses = new ArrayList<>();
                for (Course course : allById) {
                    Course course1 = courseRepository.findById(course.getId()).orElseThrow(() -> new ResourceNotFoundException("getCourse"));
                    courses.add(course1);
                }
                pupils.setCourses(courses);
                pupils.setWhenStart(new Date());
                pupils.setBalance(0);
                pupils.setLidStatus(LidStatus.REGISTER);
                pupilRepository.save(pupils);
                return new ApiResponse("successfully saevd pupild", true);
            }
            return new ApiResponse("this is already exist!", false);
        } catch (Exception e) {
            e.printStackTrace();
            return new ApiResponse("xatolik", false);
        }
    }

    public Pupils getOnePupil(UUID id) {
        Optional<Pupils> byId = pupilRepository.findById(id);
        if (byId.isPresent()) {
            return byId.get();
        }
        return null;
    }
}
