package it.revo.revoservice.controller.crm;

import it.revo.revoservice.entity.crm.Course;
import it.revo.revoservice.payload.ApiResponse;
import it.revo.revoservice.payload.crm.CourseDto;
import it.revo.revoservice.repository.crm.CourseRepository;
import it.revo.revoservice.service.crm.CourseService;
import org.springframework.http.HttpEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/crm/course")
public class CourseController {
    private final CourseService courseService;
    private final CourseRepository courseRepository;

    public CourseController(CourseService courseService, CourseRepository courseRepository) {
        this.courseService = courseService;
        this.courseRepository = courseRepository;
    }

    @PostMapping
    public HttpEntity<?> addCourse(@RequestBody CourseDto courseDto) {
        ApiResponse apiResponse = courseService.addCourse(courseDto);
        return ResponseEntity.status(apiResponse.isSuccess() ? 200 : 409).body(apiResponse);
    }

    @GetMapping
    public HttpEntity<?> getCourse() {
        try {
            List<Course> all = courseRepository.findAll();
            return ResponseEntity.ok(all);
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }

    @DeleteMapping("/{id}")
    public HttpEntity<?> deleteCourse(@PathVariable UUID id) {
        ApiResponse apiResponse = courseService.deleteCourse(id);
        return ResponseEntity.status(apiResponse.isSuccess() ? 200 : 409).body(apiResponse);
    }

    @PutMapping("/{id}")
    public HttpEntity<?> editCrmAdmin(@PathVariable UUID id, @RequestBody CourseDto courseDto) {
        ApiResponse apiResponse = courseService.editCrmPanel(id, courseDto);
        return ResponseEntity.status(apiResponse.isSuccess() ? 200 : 409).body(apiResponse);
    }

    @PutMapping("/clientActive/{id}")
    public HttpEntity<?> ActiveClient(@PathVariable UUID id, @RequestBody CourseDto courseDto) {
        ApiResponse apiResponse = courseService.editClientActive(id, courseDto);
        return ResponseEntity.status(apiResponse.isSuccess() ? 200 : 409).body(apiResponse);
    }

    @PutMapping("/clientDescription/{id}")
    public HttpEntity<?> descriptionClient(@PathVariable UUID id, @RequestBody CourseDto courseDto) {
        ApiResponse apiResponse = courseService.editDescription(id, courseDto);
        return ResponseEntity.status(apiResponse.isSuccess() ? 200 : 409).body(apiResponse);
    }

}
