package it.revo.revoservice.repository.rest;

import it.revo.revoservice.entity.allAdmins.Icons;
import it.revo.revoservice.projection.CustomIcons;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.UUID;


@CrossOrigin(origins = "http://127.0.0.1:5173/")
@RepositoryRestResource(path = "icons", collectionResourceRel = "list", excerptProjection = CustomIcons.class)
public interface IconsRepository extends JpaRepository<Icons, UUID> {
}
