package it.revo.revoservice.controller.crm;

import it.revo.revoservice.entity.crm.Pupils;
import it.revo.revoservice.payload.ApiResponse;
import it.revo.revoservice.payload.crm.PupilDto;
import it.revo.revoservice.repository.crm.PupilRepository;
import it.revo.revoservice.service.crm.PupilService;
import org.springframework.http.HttpEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/crm/pupil")
public class PupilController {
    private final PupilService pupilService;
    private final PupilRepository pupilRepository;

    public PupilController(PupilService pupilService, PupilRepository pupilRepository) {
        this.pupilService = pupilService;
        this.pupilRepository = pupilRepository;
    }

    @PostMapping
    public HttpEntity<?> addPupil(@RequestBody PupilDto pupilDto) {
        ApiResponse apiResponse = pupilService.addPupilCrm(pupilDto);
        return ResponseEntity.status(apiResponse.isSuccess() ? 200 : 409).body(apiResponse);
    }

    @GetMapping
    public HttpEntity<?> getAllPupil() {
        try {
            List<Pupils> all = pupilRepository.findAll();
            return ResponseEntity.ok(all);
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }

    @GetMapping("/{id}")
    public HttpEntity<?> getOnePupil(@PathVariable UUID id) {
        Pupils onePupil = pupilService.getOnePupil(id);
        return ResponseEntity.ok(onePupil);
    }
}