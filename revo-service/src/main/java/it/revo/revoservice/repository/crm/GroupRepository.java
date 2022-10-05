package it.revo.revoservice.repository.crm;

import it.revo.revoservice.entity.crm.Group;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.UUID;

@CrossOrigin(origins = "http://127.0.0.1:5173/")
public interface GroupRepository extends JpaRepository<Group, UUID> {
    boolean existsGroupByGroupNameEqualsIgnoreCase(String groupName);

}
