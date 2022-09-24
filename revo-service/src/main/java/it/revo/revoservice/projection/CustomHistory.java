package it.revo.revoservice.projection;

import it.revo.revoservice.entity.History;
import org.springframework.data.rest.core.config.Projection;

import java.util.Date;
import java.util.UUID;

@Projection(types = History.class, name = "customHistory")
public interface CustomHistory {
    UUID getId();

    String getName();

    String getSurname();

    String getRole();

    String getNimaQildi();

    Date getQachon();
}
