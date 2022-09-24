package it.revo.revoservice.payload;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ReqRegister {
    private String firstName;

    private String lastName;

    private String phoneNumber;

    private String email;

    private String password;

    private String prePassword;

    private Integer roleId;

    private String malumot;

    private String img;

    public ReqRegister(String firstName, String lastName, String malumot) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.malumot = malumot;
    }

    public ReqRegister(String phoneNumber, String malumot) {
        this.phoneNumber = phoneNumber;
        this.malumot = malumot;
    }
}
