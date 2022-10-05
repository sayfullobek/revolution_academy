package it.revo.revoservice.service.crm;

import it.revo.revoservice.entity.crm.Course;
import it.revo.revoservice.payload.ApiResponse;
import it.revo.revoservice.payload.crm.CourseDto;
import it.revo.revoservice.repository.crm.CourseRepository;
import org.springframework.stereotype.Service;

import java.util.Optional;
import java.util.UUID;

@Service
public class CourseService {
    private final CourseRepository courseRepository;

    public CourseService(CourseRepository courseRepository) {
        this.courseRepository = courseRepository;
    }

    public ApiResponse dto(UUID id, CourseDto courseDto) {
        boolean b;
        if (id == null) {
            b = courseRepository.existsCourseByUzNameEqualsIgnoreCaseAndEnNameEqualsIgnoreCaseAndRuNameEqualsIgnoreCase(courseDto.getUzName(), courseDto.getEnName(), courseDto.getRuName());
        } else {
            b = courseRepository.existsCourseByUzNameEqualsIgnoreCaseAndEnNameEqualsIgnoreCaseAndRuNameEqualsIgnoreCaseAndIdNot(courseDto.getUzName(), courseDto.getEnName(), courseDto.getRuName(), id);
        }
        if (!b) {
            Course course;
            if (id == null) {
                course = new Course();
            } else {
                Optional<Course> byId = courseRepository.findById(id);
                if (byId.isPresent()) {
                    course = byId.get();
                } else {
                    return new ApiResponse("this is course not found", false);
                }
            }
            course.setUzName(courseDto.getUzName());
            course.setEnName(courseDto.getEnName());
            course.setRuName(courseDto.getRuName());
            course.setCoursePrice(courseDto.getCoursePrice());
            course.setCourseType(courseDto.getCourseType());
            courseRepository.save(course);
            return new ApiResponse("successfully ", true);
        }
        return new ApiResponse("this is course already exist", false);
    }

    public ApiResponse addCourse(CourseDto courseDto) {
        try {
            dto(null, courseDto);
            return new ApiResponse("saved", true);
        } catch (Exception e) {
            e.printStackTrace();
            return new ApiResponse("xatolik", false);
        }
    }

    public ApiResponse deleteCourse(UUID id) {
        try {
            Optional<Course> byId = courseRepository.findById(id);
            if (byId.isPresent()) {
                Course course = byId.get();
                courseRepository.delete(course);
                return new ApiResponse("successfully deleted course", true);
            }
            return new ApiResponse("this is course not found", false);
        } catch (Exception e) {
            e.printStackTrace();
            return new ApiResponse("xatolik", false);
        }
    }

    public ApiResponse editCrmPanel(UUID id, CourseDto courseDto) {
        try {
            dto(id, courseDto);
            return new ApiResponse("edited", true);
        } catch (Exception e) {
            e.printStackTrace();
            return new ApiResponse("xatolik", false);
        }
    }

    public ApiResponse clientDto(UUID id, CourseDto courseDto, String status) {
        Optional<Course> byId = courseRepository.findById(id);
        if (byId.isPresent()) {
            Course course = byId.get();
            if (status.equals("active")) {
                course.setActiveClient(courseDto.isActiveClient());
            } else if (status.equals("description")) {
                course.setCourseDescription(courseDto.getCourseDescription());
            }
            courseRepository.save(course);
            return new ApiResponse("successfylly client admin", true);
        }
        return new ApiResponse("this is course not found", false);
    }

    public ApiResponse editClientActive(UUID id, CourseDto courseDto) {
        try {
            clientDto(id, courseDto, "active");
            return new ApiResponse("saved active", true);
        } catch (Exception e) {
            e.printStackTrace();
            return new ApiResponse("xatolik", false);
        }
    }

    public ApiResponse editDescription(UUID id, CourseDto courseDto) {
        try {
            clientDto(id, courseDto, "description");
            return new ApiResponse("saved description", true);
        } catch (Exception e) {
            e.printStackTrace();
            return new ApiResponse("xatolik", false);
        }
    }
}
