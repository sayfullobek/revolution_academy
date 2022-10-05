package it.revo.revoservice.service.crm;

import it.revo.revoservice.entity.crm.Group;
import it.revo.revoservice.entity.crm.Pupils;
import it.revo.revoservice.entity.enums.LidStatus;
import it.revo.revoservice.payload.ApiResponse;
import it.revo.revoservice.payload.crm.GroupDto;
import it.revo.revoservice.payload.crm.PupilId;
import it.revo.revoservice.repository.crm.CourseRepository;
import it.revo.revoservice.repository.crm.GroupRepository;
import it.revo.revoservice.repository.crm.PupilRepository;
import org.springframework.data.rest.webmvc.ResourceNotFoundException;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class GroupService {
    private final GroupRepository groupRepository;
    private final PupilRepository pupilRepository;
    private final CourseRepository courseRepository;

    public GroupService(GroupRepository groupRepository, PupilRepository pupilRepository, CourseRepository courseRepository) {
        this.groupRepository = groupRepository;
        this.pupilRepository = pupilRepository;
        this.courseRepository = courseRepository;
    }

    public ApiResponse addGroup(GroupDto groupDto) {
        try {
            boolean b = groupRepository.existsGroupByGroupNameEqualsIgnoreCase(groupDto.getGroupName());
            if (!b) {
                Group group = new Group();
                group.setGroupName(groupDto.getGroupName());
                group.setCourse(courseRepository.findById(groupDto.getCourseId()).orElseThrow(() -> new ResourceNotFoundException("getCourse")));
                List<Pupils> allPupilsByCoursesId = pupilRepository.findAllPupilsByCoursesId(groupDto.getCourseId());
                List<Pupils> savePupils = new ArrayList<>();//bu list yangiz o'quvchilarni guruhga saqlab berish uchun xizmat qiladi
                for (Pupils pupils : allPupilsByCoursesId) {
                    if (pupils.getLidStatus().equals(LidStatus.REGISTER) || pupils.getLidStatus().equals(LidStatus.DOES_NOT_COME)) {
                        pupils.setLidStatus(LidStatus.READING);
                        savePupils.add(pupils);
                    }
                }
                if (savePupils.size() > 0) {
                    group.setPupils(savePupils);
                    groupRepository.save(group);
                    return new ApiResponse("successfully saved group", true);
                } else {
                    return new ApiResponse("oka pupil qoshmaysizmi guruhga", false);
                }
            }
            return new ApiResponse("bunday guruh mavjud", false);
        } catch (Exception e) {
            e.printStackTrace();
            return new ApiResponse("xatolik", false);
        }
    }

    public Group getOneGroup(UUID id) {
        try {
            Optional<Group> byId = groupRepository.findById(id);
            return byId.orElse(null);
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }

    public ApiResponse deleteGroup(UUID id) {
        try {
            Optional<Group> byId = groupRepository.findById(id);
            if (byId.isPresent()) {
                Group group = byId.get();
                if (group.equals(null)) {
                    groupRepository.delete(group);
                    return new ApiResponse("successfully deleted group", true);
                } else {
                    return new ApiResponse("siz bu guruhni o'chira olmaysiz sababi bu guruhga ko'p malumor jamlangan", true);
                }
            }
            return new ApiResponse("bunday guruh mavjud emas", false);
        } catch (Exception e) {
            e.printStackTrace();
            return new ApiResponse("xatolik", false);
        }
    }

    public ApiResponse activePupilChange(UUID id, PupilId pupilId) {
        Optional<Group> byId = groupRepository.findById(id);
        if (byId.isPresent()) {
            Group group = byId.get();
            Pupils pupils = new Pupils();
            for (Pupils pupil : group.getPupils()) {
                if (pupil.getId().equals(pupilId.getPupilId())) {
                    pupils = pupil;
                }
            }
            pupils.changeActive(!pupils.isActive());
            pupilRepository.save(pupils);
            return new ApiResponse("successfully is actuve change", true);
        }
        return new ApiResponse("this is group not found", false);
    }
}
