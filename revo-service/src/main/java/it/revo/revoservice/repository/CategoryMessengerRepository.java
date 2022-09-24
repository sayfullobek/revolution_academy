package it.revo.revoservice.repository;

import it.revo.revoservice.entity.CategoryMessenger;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.UUID;

@CrossOrigin(origins = "http://127.0.0.1:5173/")
public interface CategoryMessengerRepository extends JpaRepository<CategoryMessenger, UUID> {
    boolean existsCategoryMessengersByNameEquals(String name);
//
//    List<User> findAllUserByCategoryMessenger(UUID user_id);
}
