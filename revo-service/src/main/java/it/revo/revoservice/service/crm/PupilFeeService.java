package it.revo.revoservice.service.crm;

import it.revo.revoservice.entity.crm.PupilFee;
import it.revo.revoservice.entity.crm.Pupils;
import it.revo.revoservice.repository.crm.PupilFeeRepository;
import it.revo.revoservice.repository.crm.PupilRepository;
import org.springframework.stereotype.Service;

import java.util.Optional;
import java.util.UUID;

@Service
public class PupilFeeService {
    private final PupilFeeRepository pupilFeeRepository;
    private final PupilRepository pupilRepository;

    public PupilFeeService(PupilFeeRepository pupilFeeRepository, PupilRepository pupilRepository) {
        this.pupilFeeRepository = pupilFeeRepository;
        this.pupilRepository = pupilRepository;
    }

//    public PupilFee getOneFee(UUID id) {
//        Optional<Pupils> byId = pupilRepository.findById(id);
//        if (byId.isPresent()) {
//            return pupilFeeRepository.findPupilFeeByPupilsId(id);
//        }
//        return null;
//    }
}
