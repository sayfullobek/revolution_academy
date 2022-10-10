//package it.revo.revoservice.component;
//
//import it.revo.revoservice.entity.Role;
//import it.revo.revoservice.entity.User;
//import it.revo.revoservice.entity.crm.Hafta;
//import it.revo.revoservice.entity.enums.HaftaKunlari;
//import it.revo.revoservice.entity.enums.RoleName;
//import it.revo.revoservice.repository.RoleRepository;
//import it.revo.revoservice.repository.UserRepository;
//import it.revo.revoservice.repository.crm.HaftaRepository;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.beans.factory.annotation.Value;
//import org.springframework.boot.CommandLineRunner;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
//import org.springframework.security.crypto.password.PasswordEncoder;
//
//@Configuration
//@EnableWebSecurity
//public class DataLoader implements CommandLineRunner {
//    @Autowired
//    UserRepository userRepository;
//
//    @Autowired
//    RoleRepository roleRepository;
//
//    @Autowired
//    HaftaRepository haftaRepository;
//
//    @Autowired
//    PasswordEncoder passwordEncoder;
//
//    @Value("${spring.sql.init.mode}")
//    private String initMode;
//
//    @Override
//    public void run(String... args) throws Exception {
//        if (initMode.equals("never")) {
//            haftaRepository.save(
//                    new Hafta(
//                            1,
//                            HaftaKunlari.MONDAY
//                    )
//            );
//            haftaRepository.save(
//                    new Hafta(
//                            2,
//                            HaftaKunlari.TUESDAY
//                    )
//            );
//            haftaRepository.save(
//                    new Hafta(
//                            3,
//                            HaftaKunlari.WEDNESDAY
//                    )
//            );
//            haftaRepository.save(
//                    new Hafta(
//                            4,
//                            HaftaKunlari.THURSDAY
//                    )
//            );
//            haftaRepository.save(
//                    new Hafta(
//                            5,
//                            HaftaKunlari.FRIDAY
//                    )
//            );
//            haftaRepository.save(
//                    new Hafta(
//                            6,
//                            HaftaKunlari.SATURDAY
//                    )
//            );
//            haftaRepository.save(
//                    new Hafta(
//                            7,
//                            HaftaKunlari.SUNDAY
//                    )
//            );
//            roleRepository.save(
//                    new Role(
//                            RoleName.ADMIN_CRM
//                    )
//            );
//            roleRepository.save(
//                    new Role(
//                            RoleName.TEACHER
//                    )
//            );
//            roleRepository.save(
//                    new Role(
//                            RoleName.SUPER_ADMIN
//                    )
//            );
//            roleRepository.save(
//                    new Role(
//                            RoleName.BOT_ADMIN
//                    )
//            );
//            roleRepository.save(
//                    new Role(
//                            RoleName.ADMIN_CLIENT
//                    )
//            );
//            roleRepository.save(
//                    new Role(
//                            RoleName.USER
//                    )
//            );
//            userRepository.save(
//                    new User(
//                            "Sayfullo",
//                            "To'xtayev",
//                            "+990763246",
//                            "sayfullogithub@gmail.com",
//                            passwordEncoder.encode("root123"),
//                            roleRepository.findAll(),
//                            "Root123_9*12",
//                            null
//                    )
//            );
//        }
//    }
//}
