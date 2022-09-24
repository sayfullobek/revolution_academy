package it.revo.revoservice.service;

import it.revo.revoservice.entity.User;
import it.revo.revoservice.repository.UserRepository;
import net.bytebuddy.asm.Advice;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.util.Optional;
import java.util.UUID;

@Service
public class FileService {

    @Autowired
    UserRepository userRepository;

    public void uploadFile(UUID id, MultipartFile file) {
        try {
            Optional<User> byId = userRepository.findById(id);
            if (byId.isPresent()) {
                User user = byId.get();
                file.transferTo(new File("D:\\java\\Team Projects\\revo_full\\revo-client\\src\\files\\userFiles\\" + id + user.getFirstName() + ".jpg"));
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
