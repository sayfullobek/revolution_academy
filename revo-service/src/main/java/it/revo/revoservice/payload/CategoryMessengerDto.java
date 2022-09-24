package it.revo.revoservice.payload;

import it.revo.revoservice.entity.Icons;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;
import java.util.UUID;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CategoryMessengerDto {
    private UUID id;

    private String name;

    private UUID iconId;

    private List<UUID> userId;

    public CategoryMessengerDto(String name, UUID iconId, List<UUID> userId) {
        this.name = name;
        this.iconId = iconId;
        this.userId = userId;
    }
}
