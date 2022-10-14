package it.revo.revoservice.controller.crm;

import it.revo.revoservice.entity.crm.Group;
import it.revo.revoservice.payload.ApiResponse;
import it.revo.revoservice.payload.crm.GroupDto;
import it.revo.revoservice.payload.crm.PupilDto;
import it.revo.revoservice.payload.crm.PupilId;
import it.revo.revoservice.repository.crm.GroupRepository;
import it.revo.revoservice.service.crm.GroupService;
import org.springframework.http.HttpEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/crm/group")
public class GroupController {
    private final GroupService groupService;
    private final GroupRepository groupRepository;

    public GroupController(GroupService groupService, GroupRepository groupRepository) {
        this.groupService = groupService;
        this.groupRepository = groupRepository;
    }

    @PostMapping
    public HttpEntity<?> saveGroup(@RequestBody GroupDto groupDto) {
        ApiResponse apiResponse = groupService.addGroup(groupDto);
        return ResponseEntity.status(apiResponse.isSuccess() ? 200 : 409).body(apiResponse);
    }

    @GetMapping
    public HttpEntity<?> getGroup() throws Exception {
        List<Group> all = groupRepository.findAll();
        return ResponseEntity.ok(all);
    }

    @GetMapping("/{id}")
    public HttpEntity<?> getOneGroup(@PathVariable UUID id) {
        Group oneGroup = groupService.getOneGroup(id);
        return ResponseEntity.ok(oneGroup);
    }

    @DeleteMapping("/{id}")
    public HttpEntity<?> deleteGroup(@PathVariable UUID id) {
        ApiResponse apiResponse = groupService.deleteGroup(id);
        return ResponseEntity.status(apiResponse.isSuccess() ? 200 : 409).body(apiResponse);
    }

    @PutMapping("/pupil/{id}")
    public HttpEntity<?> activeChange(@PathVariable UUID id, @RequestBody PupilId pupilId) {
        ApiResponse apiResponse = groupService.activePupilChange(id, pupilId);
        return ResponseEntity.status(apiResponse.isSuccess() ? 200 : 409).body(apiResponse);
    }

    @PutMapping("/pupil/payment/{id}")
    public HttpEntity<?> pupilPayment(@PathVariable UUID id, @RequestBody PupilDto pupilDto) {
        ApiResponse payment = groupService.payment(id, pupilDto);
        return ResponseEntity.status(payment.isSuccess() ? 200 : 409).body(payment);
    }

    @PutMapping("/pupil/report/{id}")
    public HttpEntity<?> pupilReportSave(@PathVariable UUID id, @RequestBody PupilDto pupilDto) {
        ApiResponse apiResponse = groupService.reportPupil(id, pupilDto);
        return ResponseEntity.status(apiResponse.isSuccess() ? 200 : 409).body(apiResponse);
    }
}
