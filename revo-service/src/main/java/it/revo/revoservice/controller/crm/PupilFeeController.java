package it.revo.revoservice.controller.crm;

import it.revo.revoservice.entity.crm.PupilFee;
import it.revo.revoservice.repository.crm.PupilFeeRepository;
import it.revo.revoservice.service.crm.PupilFeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/crm/group/pupilFee")
public class PupilFeeController {
    @Autowired
    PupilFeeRepository pupilFeeRepository;

    @Autowired
    PupilFeeService pupilFeeService;

    @GetMapping
    public HttpEntity<?> getAll() {
        try {
            List<PupilFee> all = pupilFeeRepository.findAll();
            return ResponseEntity.ok(all);
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }

//    @GetMapping("/{id}")
//    public HttpEntity<?> getOneFeee(@PathVariable UUID id) {
//        try {
//            PupilFee oneFee = pupilFeeService.getOneFee(id);
//            return ResponseEntity.ok(oneFee);
//        } catch (Exception e) {
//            e.printStackTrace();
//            return null;
//        }
//    }
}
