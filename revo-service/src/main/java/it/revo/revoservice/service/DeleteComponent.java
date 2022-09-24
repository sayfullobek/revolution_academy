package it.revo.revoservice.service;

import it.revo.revoservice.entity.History;
import it.revo.revoservice.entity.User;
import it.revo.revoservice.payload.ApiResponse;
import it.revo.revoservice.repository.CategoryMessengerRepository;
import it.revo.revoservice.repository.UserRepository;
import it.revo.revoservice.repository.rest.HistoryRepository;
import org.springframework.stereotype.Service;

import java.util.Optional;
import java.util.UUID;

@Service
public class DeleteComponent {
    private final HistoryRepository historyRepository;
    private final UserRepository userRepository;
    private final CategoryMessengerRepository categoryMessengerRepository;

    public DeleteComponent(HistoryRepository historyRepository, UserRepository userRepository, CategoryMessengerRepository categoryMessengerRepository) {
        this.historyRepository = historyRepository;
        this.userRepository = userRepository;
        this.categoryMessengerRepository = categoryMessengerRepository;
    }

    public ApiResponse delete(UUID uuid, String repositoryName) {
        try {
            if (repositoryName.equals("historyRepository")) {
                Optional<History> byId = historyRepository.findById(uuid);
                History history = byId.get();
                historyRepository.delete(history);
            } else if (repositoryName.equals("userRepository")) {
                Optional<User> byId = userRepository.findById(uuid);
//                categoryMessengerRepository.
                User user = byId.get();
                userRepository.delete(user);
            }
            return new ApiResponse("successfully deleted user", true);
        } catch (Exception e) {
            return new ApiResponse("xatolik", false);
        }
    }
}
