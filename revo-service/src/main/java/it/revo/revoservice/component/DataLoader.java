package it.revo.revoservice.component;

import it.revo.revoservice.entity.Role;
import it.revo.revoservice.entity.User;
import it.revo.revoservice.entity.enums.RoleName;
import it.revo.revoservice.repository.RoleRepository;
import it.revo.revoservice.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.crypto.password.PasswordEncoder;

@Configuration
@EnableWebSecurity
public class DataLoader implements CommandLineRunner {
    @Autowired
    UserRepository userRepository;

    @Autowired
    RoleRepository roleRepository;

    @Autowired
    PasswordEncoder passwordEncoder;

    @Value("${spring.sql.init.mode}")
    private String initMode;

    @Override
    public void run(String... args) throws Exception {
        if (initMode.equals("never")) {
            roleRepository.save(
                    new Role(
                            RoleName.ADMIN_CRM
                    )
            );
            roleRepository.save(
                    new Role(
                            RoleName.TEACHER
                    )
            );
            roleRepository.save(
                    new Role(
                            RoleName.SUPER_ADMIN
                    )
            );
            roleRepository.save(
                    new Role(
                            RoleName.BOT_ADMIN
                    )
            );
            roleRepository.save(
                    new Role(
                            RoleName.ADMIN_CLIENT
                    )
            );
            roleRepository.save(
                    new Role(
                            RoleName.USER
                    )
            );
            userRepository.save(
                    new User(
                            "Sayfullo",
                            "To'xtayev",
                            "+990763246",
                            "sayfullogithub@gmail.com",
                            passwordEncoder.encode("root123"),
                            roleRepository.findAll(),
                            "Root123_9*12",
                            null
                    )
            );
        }
    }
}
