package it.revo.revoservice.repository;

import it.revo.revoservice.entity.allAdmins.Messenger;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.List;
import java.util.UUID;

@CrossOrigin(origins = "http://127.0.0.1:5173/")
public interface MessageRepository extends JpaRepository<Messenger, UUID> {
    List<Messenger> findAllMessengerByUserId(UUID user_id);
}
