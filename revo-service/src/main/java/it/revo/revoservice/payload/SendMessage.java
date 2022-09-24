package it.revo.revoservice.payload;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;
import java.util.UUID;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class SendMessage {
    private UUID id;
    private UUID userId;
    private List<UUID> fromUserId;
    private String message;
    private String kimdanKimga;
}
