package it.revo.revoservice.service;

import it.revo.revoservice.entity.Messenger;
import it.revo.revoservice.entity.User;
import it.revo.revoservice.payload.ApiResponse;
import it.revo.revoservice.payload.SendMessage;
import it.revo.revoservice.repository.MessageRepository;
import it.revo.revoservice.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class MessageService {
    @Autowired
    MessageRepository messageRepository;

    @Autowired
    UserRepository userRepository;

    public ApiResponse sendMessage(SendMessage sendMessage) {
        try {
            Optional<User> byId = userRepository.findById(sendMessage.getUserId());
            if (byId.isPresent()) {
                Optional<User> byId1 = userRepository.findById(sendMessage.getFromUserId().get(2));
                if (byId1.isPresent()) {
                    List<User> userList = new ArrayList<>();
                    List<User> fromUserList = new ArrayList<>();
                    User user = byId.get();
                    User user1 = byId1.get();
                    userList.add(user);
                    fromUserList.add(user1);
                    Messenger messenger = new Messenger();
                    messenger.setUser(userList);
                    messenger.setFromUser(fromUserList);
                    messenger.setMessage(sendMessage.getMessage());
                    messenger.setKimdanKimga(user.getPhoneNumber() + "->" + user1.getPhoneNumber());
                    messageRepository.save(messenger);
                    return new ApiResponse("sending message user", true);
                }
                return new ApiResponse("bunday uzer joq aka", false);
            }
            return new ApiResponse("bunday user mavjud emas oka", false);
        } catch (Exception e) {
            e.printStackTrace();
            return new ApiResponse("xatolik", false);
        }
    }

    public List<SendMessage> getMessagebyUserId(UUID uuid) {
        List<Messenger> allMessengerByUserId = messageRepository.findAllMessengerByUserId(uuid);
        List<SendMessage> sendMessageList = new ArrayList<>();
        for (Messenger messenger : allMessengerByUserId) {
            SendMessage sendMessage = new SendMessage(
                    messenger.getId(),
                    uuid,
                    Collections.singletonList(messenger.getFromUser().get(0).getId()),
                    messenger.getMessage(),
                    messenger.getKimdanKimga()
            );
            sendMessageList.add(sendMessage);
        }
        return sendMessageList;
    }

    public ApiResponse deleteMessage(UUID id) {
        Optional<Messenger> byId = messageRepository.findById(id);
        if (byId.isPresent()) {
            Messenger messenger = byId.get();
            messageRepository.delete(messenger);
            return new ApiResponse("successfully delete message", true);
        }
        return new ApiResponse("bunday user jo'q", false);
    }
}
