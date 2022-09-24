package it.revo.revoservice.projection;

import it.revo.revoservice.entity.Icons;
import org.springframework.data.rest.core.config.Projection;

import java.util.UUID;

@Projection(types = Icons.class, name = "customIcons")
public interface CustomIcons {
    UUID getId();

    String getUzName();

    String getEnName();

    String getRuName();

    String getIconName();
}
