package it.revo.revoservice.service.crm;

import it.revo.revoservice.entity.crm.Course;
import it.revo.revoservice.entity.crm.Group;
import it.revo.revoservice.entity.crm.PupilFee;
import it.revo.revoservice.entity.crm.Pupils;
import it.revo.revoservice.entity.enums.LidStatus;
import it.revo.revoservice.entity.enums.WeekType;
import it.revo.revoservice.payload.ApiResponse;
import it.revo.revoservice.payload.crm.GroupDto;
import it.revo.revoservice.payload.crm.PupilDto;
import it.revo.revoservice.payload.crm.PupilId;
import it.revo.revoservice.repository.crm.*;
import org.springframework.data.rest.webmvc.ResourceNotFoundException;
import org.springframework.stereotype.Service;

import javax.xml.crypto.Data;
import java.util.*;

@Service
public class GroupService {
    private final GroupRepository groupRepository;
    private final PupilRepository pupilRepository;
    private final CourseRepository courseRepository;
    private final PupilFeeRepository pupilFeeRepository;
    private final HaftaRepository haftaRepository;

    public GroupService(GroupRepository groupRepository, PupilRepository pupilRepository, CourseRepository courseRepository, PupilFeeRepository pupilFeeRepository, HaftaRepository haftaRepository) {
        this.groupRepository = groupRepository;
        this.pupilRepository = pupilRepository;
        this.courseRepository = courseRepository;
        this.pupilFeeRepository = pupilFeeRepository;
        this.haftaRepository = haftaRepository;
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
                    group.setWeekType(groupDto.getWeekType());
                    group.setDarsVaqti(groupDto.getDarsVaqti());
                    //pupil fee start

                    for (Pupils savePupil : savePupils) {
                        List<Integer> haftaKuni = new ArrayList<>();
                        if (groupDto.getWeekType().equals(WeekType.TOQ)) {
                            haftaKuni = Arrays.asList(1, 3, 5);
                        } else if (groupDto.getWeekType().equals(WeekType.JUFT)) {
                            haftaKuni = Arrays.asList(2, 4, 6);
                        } else if (groupDto.getWeekType().equals(WeekType.BOOTCAMP)) {
                            haftaKuni = Arrays.asList(1, 2, 3, 4, 5, 6);
                        }
                        Date date1 = new Date();
                        int i = date1.getMonth();
//                        Date date = new Date(new Date().getYear() + 1900, i, date1.getDate());
                        savePupil.setNowMonth(date1.getMonth());
                        List<PupilFee> pupilFees = new ArrayList<>();
                        UUID courseId = groupDto.getCourseId();
                        Course course = courseRepository.findById(courseId).get();
                        double coursePrice = course.getCoursePrice();
                        double price = coursePrice / 13;
                        nowMonthByDate(date1, price, pupilFees, haftaKuni, groupDto);
                        savePupil.setPupilFees(pupilFees);
                        savePupil.setBalance(-coursePrice);
                        pupilRepository.save(savePupil);
                    }


                    //pupil fee end
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

    public void nowMonthByDate(Date date, double coursePrice, List<PupilFee> pupilFees, List<Integer> haftaKuni, GroupDto groupDto) {
        Map<Integer, String> kun = new HashMap<>();
        kun.put(1, "Dushanba");
        kun.put(2, "Seshanba");
        kun.put(3, "Chorshanba");
        kun.put(4, "Payshanba");
        kun.put(5, "Juma");
        kun.put(6, "Shanba");
        kun.put(0, "Yakshanba");
        for (int j = date.getDate(); j <= 31; j++) {
            Date date2 = new Date(date.getYear(), date.getMonth(), j);
            for (Integer integer : haftaKuni) {
                if (date2.getMonth() == date.getMonth() && integer == date2.getDay()) {
                    PupilFee pupilFee = new PupilFee();
                    pupilFee.setHowMuchItPays(0);
                    pupilFee.setHaftaKuni(kun.get(integer));
                    pupilFee.setSana(Integer.parseInt(date2.toString().substring(8, 10)));
                    pupilFee.setIsVisitation(null);
                    pupilFee.setDarsVaqti(groupDto.getDarsVaqti());
                    pupilFee.setHowMuchItPays(coursePrice);
                    PupilFee save = pupilFeeRepository.save(pupilFee);
                    pupilFees.add(save);
                }
            }
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
                if (group == null) {
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


    public ApiResponse payment(UUID id, PupilDto pupilDto) {
        try {
            Optional<Group> byId = groupRepository.findById(id);
            if (byId.isPresent()) {
                Group group = byId.get();
                for (Pupils pupil : group.getPupils()) {
                    if (pupil.getId().equals(pupilDto.getId())) {
                        pupil.setBalance(pupil.getBalance() + pupilDto.getBalance());
                        pupilRepository.save(pupil);
                    }
                }
                groupRepository.save(group);
                return new ApiResponse("successfully paymen is pupil", true);
            }
            return new ApiResponse("this is pupil not found", false);
        } catch (Exception e) {
            e.printStackTrace();
            return new ApiResponse(e.toString(), false);
        }
    }

    public ApiResponse reportPupil(UUID id, PupilDto pupilDto) {
        try {
            Optional<Group> byId = groupRepository.findById(id);
            Date date = new Date();
            if (byId.isPresent()) {
                Group group = byId.get();
                for (Pupils pupil : group.getPupils()) {
                    if (pupil.getId().equals(pupilDto.getId())) {
                        for (PupilFee pupilFee : pupil.getPupilFees()) {
                            if (pupilFee.getSana().equals(date.getDate())) {
                                pupilFee.setIsVisitation(pupilDto.getIsVisitation());
                            }
                        }
                        pupilRepository.save(pupil);
                    }
                    groupRepository.save(group);
                    return new ApiResponse("successfully saved report", true);
                }
            }
            return new ApiResponse("this is group not found", false);
        } catch (Exception e) {
            e.printStackTrace();
            return new ApiResponse(e.toString(), false);
        }
    }
}
