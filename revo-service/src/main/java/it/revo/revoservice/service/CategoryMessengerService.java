package it.revo.revoservice.service;

import it.revo.revoservice.entity.CategoryMessenger;
import it.revo.revoservice.entity.User;
import it.revo.revoservice.payload.ApiResponse;
import it.revo.revoservice.payload.CategoryMessengerDto;
import it.revo.revoservice.repository.CategoryMessengerRepository;
import it.revo.revoservice.repository.UserRepository;
import it.revo.revoservice.repository.rest.IconsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.rest.webmvc.ResourceNotFoundException;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class CategoryMessengerService {
    @Autowired
    CategoryMessengerRepository categoryMessengerRepository;

    @Autowired
    UserRepository userRepository;

    @Autowired
    IconsRepository iconsRepository;

    public ApiResponse saveCategoryMsg(CategoryMessengerDto categoryMessengerDto) {
        List<UUID> userId = categoryMessengerDto.getUserId();
        List<User> userList = new ArrayList<>();
        for (int i = 0; i < userId.size(); i++) {
            if (i > 1) {
                Optional<User> byId = userRepository.findById(userId.get(i));
                userList.add(byId.get());
            }
        }
        if (!categoryMessengerRepository.existsCategoryMessengersByNameEquals(categoryMessengerDto.getName())) {
            CategoryMessenger categoryMessenger = new CategoryMessenger(
                    categoryMessengerDto.getName(),
                    iconsRepository.findById(categoryMessengerDto.getIconId()).orElseThrow(() -> new ResourceNotFoundException("getIcons")),
                    userList
            );
            categoryMessengerRepository.save(categoryMessenger);
            return new ApiResponse("successfully saved messageCategory", false);
        }
        return new ApiResponse("bunday categoryMessenger mavjudku oka", false);
    }
}