package it.revo.revoservice.repository.rest;

import it.revo.revoservice.entity.History;
import it.revo.revoservice.projection.CustomHistory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.UUID;


@CrossOrigin(origins = "http://127.0.0.1:5173/")
@RepositoryRestResource(path = "history", collectionResourceRel = "list", excerptProjection = CustomHistory.class)
public interface HistoryRepository extends JpaRepository<History, UUID> {
}
