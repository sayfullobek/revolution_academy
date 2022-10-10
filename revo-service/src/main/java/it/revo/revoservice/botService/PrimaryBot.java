package it.revo.revoservice.botService;

import it.revo.revoservice.entity.crm.Course;
import it.revo.revoservice.repository.crm.CourseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.telegram.telegrambots.bots.TelegramLongPollingBot;
import org.telegram.telegrambots.meta.api.methods.ParseMode;
import org.telegram.telegrambots.meta.api.methods.send.SendMessage;
import org.telegram.telegrambots.meta.api.methods.send.SendPhoto;
import org.telegram.telegrambots.meta.api.objects.Contact;
import org.telegram.telegrambots.meta.api.objects.InputFile;
import org.telegram.telegrambots.meta.api.objects.Message;
import org.telegram.telegrambots.meta.api.objects.Update;
import org.telegram.telegrambots.meta.api.objects.replykeyboard.InlineKeyboardMarkup;
import org.telegram.telegrambots.meta.api.objects.replykeyboard.ReplyKeyboardMarkup;
import org.telegram.telegrambots.meta.api.objects.replykeyboard.buttons.InlineKeyboardButton;
import org.telegram.telegrambots.meta.api.objects.replykeyboard.buttons.KeyboardButton;
import org.telegram.telegrambots.meta.api.objects.replykeyboard.buttons.KeyboardRow;
import org.telegram.telegrambots.meta.exceptions.TelegramApiException;

import java.io.File;
import java.util.*;

@Service
public class PrimaryBot extends TelegramLongPollingBot {
    @Autowired
    CourseRepository courseRepository;

    Long id;
//    String kurs = getLanguage().get(id).equals("uz") ? "Kurslar" : getLanguage().get(id).equals("en") ? "Course" : "курсы";

    Map<Long, String> isRegister = new HashMap<>();
    Map<Long, String> firstName = new HashMap<>();
    Map<Long, String> lastName = new HashMap<>();
    Map<Long, String> phoneNumber = new HashMap<>();
    Map<Long, String> language = new HashMap<>();
    Set<Long> statistika = new HashSet<>();
    Set<Long> registerId = new HashSet<>();

    public Map<Long, String> getLanguage() {
        return language;
    }

    public void setLanguage(Map<Long, String> language) {
        this.language = language;
    }

    private static final InlineButton IB = new InlineButton();

    @Override
    public String getBotUsername() {
        return BotConfig.BOT_USERNAME;
    }

    @Override
    public String getBotToken() {
        return BotConfig.BOT_TOKEN;
    }

    @Override
    public void onUpdateReceived(Update update) {
        if (update.hasMessage()) {
            SendMessage sendMessage = new SendMessage();
            SendPhoto sendPhoto = new SendPhoto();
            Message message = update.getMessage();
            Long chatId = message.getChatId();
            id = message.getChatId();
            sendMessage.setChatId(chatId.toString());
            sendPhoto.setChatId(chatId.toString());
            String name = message.getFrom().getFirstName();
            String text = message.getText();
            if (message.hasText()) {
                if (text.equals("/start")) {
                    InlineKeyboardMarkup keyboardMarkup1 = new InlineKeyboardMarkup(getInlineButtonRows(BotConfig.LANG));
//                    sendPhoto(sendPhoto, "", "Assalomu alekum " + name + " botimizga hush kelipsiz tilni tanlang!", keyboardMarkup1);
                    getFirstLan(sendMessage, keyboardMarkup1, "Assalomu alekum " + name + " botimizga hush kelipsiz tilni tanlang!");
                    //D:\rasm.jpg
                    statistika.add(chatId);
                } else if (text.equals(getLanguage().get(chatId).equals("uz") ? "Kurslar" : getLanguage().get(chatId).equals("en") ? "Course" : "курсы")) {
                    getRegisterMenu(sendMessage);
                    sendMSG(sendMessage, "Kursni tanlang!");
                } else if (text.equals(getLanguage().get(chatId).equals("uz") ? "Mening ma'lumotlarim" : getLanguage().get(chatId).equals("en") ? "my info" : "men")) {
                    userInfos(chatId, sendMessage);
                } else if (text.equals(getLanguage().get(chatId).equals("uz") ? "Biz haqimizda" : getLanguage().get(chatId).equals("en") ? "we about" : "Biz haqimizda")) {
                    sendMSG(sendMessage, "*****");
                } else if (text.equals(getLanguage().get(chatId).equals("uz") ? "Statestika" : getLanguage().get(chatId).equals("en") ? "statistic" : "Statestika")) {
                    sendMSG(sendMessage, "statestika: bizning botimizda " + statistika.size() + " ta foydalanuvchi mavjud");
                } else if (text.equals(getLanguage().get(chatId).equals("uz") ? "Biz bilan aloqa" : getLanguage().get(chatId).equals("en") ? "we contact with" : "Biz bilan aloqa")) {
                    sendMSG(sendMessage, "phoneNumber: " + BotConfig.PHONE_NUMBER + "\ntelegrem link: " +
                            BotConfig.TELEGRAM_LINK + "\nTelegram kanal: https://t.me/yangishahrisabz_group \n Instagram: https://www.instagram.com/sayfullobek/");
                } else if (isRegister.get(chatId).equals("firstName")) {
                    if (text.length() >= 3) {
                        isRegister.put(chatId, "lastName");
                        sendMSG(sendMessage, getLanguage().get(id).equals("uz") ? "Famliyangizni kiriting" : getLanguage().get(id).equals("en") ? "enter your surname" : "fam kirit");
                        firstName.put(chatId, text);
                    } else {
                        sendMSG(sendMessage, getLanguage().get(id).equals("uz") ? "Iltimos ismingizni to'g'ri kiriting" : getLanguage().get(id).equals("en") ? "please enter name success" : "ism xotaa");
                    }
                } else if (isRegister.get(chatId).equals("lastName")) {
                    if (text.length() >= 7) {
                        isRegister.put(chatId, "phoneNumber");
//                        sendMSG(sendMessage, "");
                        lastName.put(chatId, text);
                        buttonPhoneNumber(sendMessage);
                    } else {
                        sendMSG(sendMessage, getLanguage().get(id).equals("uz") ? "Iltimos familiyangizni to'g'ri kiriting" : getLanguage().get(id).equals("en") ? "please enter surname success" : "familya xota");
                    }
                } else if (isRegister.get(chatId).equals("phoneNumber")) {
                    if (text.length() == 13 && text.startsWith("+998")) {
                        try {
                            Long.valueOf(text.substring(1));
//                            buttonInfo(sendMessage);
                            registerId.add(chatId);
                            isRegister.remove(chatId);
                            phoneNumber.put(chatId, text);
//                            sendMSG(sendMessage, "ro'yxatdan o'tdingiz oka");
                            buttons(sendMessage, getLanguage().get(id).equals("uz") ? "Siz muaffaqiyatle ruyxatdan utdingiz!" : getLanguage().get(id).equals("en") ? "you successfully registered" : "royxatbek");
                        } catch (Exception e) {
                            sendMSG(sendMessage, getLanguage().get(id).equals("uz") ? "Faqat raqamlardan iborat bo'lsin!" : getLanguage().get(id).equals("en") ? "number" : "tel xota");
                        }
                    } else {
                        sendMSG(sendMessage, getLanguage().get(id).equals("uz") ? "Telefon raqamingizni to'gri kiriting" : getLanguage().get(id).equals("en") ? "this phone number wrong" : "xota");
                    }
                } else {
                    try {
                        sendMSG(sendMessage, getLanguage().get(id).equals("uz") ? "Topilmadi" : getLanguage().get(id).equals("en") ? "fot found" : "joq");
                    } catch (Exception e) {
                        e.printStackTrace();
                        sendMSG(sendMessage, e.toString());
                    }
                }
            } else if (message.hasContact()) {
                Contact contact = message.getContact();
//                buttonInfo(sendMessage);
                phoneNumber.put(chatId, contact.getPhoneNumber());
                registerId.add(chatId);
                isRegister.remove(chatId);
                buttons(sendMessage, getLanguage().get(id).equals("uz") ? "Siz muaffaqiyatle ruyxatdan utdingiz!" : getLanguage().get(id).equals("en") ? "you successfully registered" : "royxatbek");
            }
        } else if (update.hasCallbackQuery()) {
            String data = update.getCallbackQuery().getData();
            Long id = update.getCallbackQuery().getFrom().getId();
            Message message = update.getCallbackQuery().getMessage();
            SendMessage sendMessage = new SendMessage();
            sendMessage.setChatId(id.toString());
            SendPhoto sendPhoto = new SendPhoto();
            sendPhoto.setChatId(id.toString());
            String name = message.getFrom().getFirstName();
            int count = 0;
            for (Long aLong : registerId) {
                if (aLong.equals(id)) {
                    count++;
                }
            }
            if ("Back".equals(data)) {
//                delMsg(message);
                getRegisterMenu(sendMessage);
//                registerUser.remove(`id);
                sendMSG(sendMessage, getLanguage().get(id).equals("uz") ? "Kurslarni tanlang" : getLanguage().get(id).equals("en") ? "selected course" : "kursni tanlang");
            } else if ("Ruyxatdan utish".equals(data) || data.equals("sign up")) {
                if (count == 1) {
                    sendMSG(sendMessage, "oka siz ro'yxatdan o'tgansiz");
                } else {
                    sendMSG(sendMessage, getLanguage().get(id).equals("uz") ? "ismingizni kiritingi" : getLanguage().get(id).equals("en") ? "enter your name" : "ism oka");
                    isRegister.put(id, "firstName");
                }
            } else if ("Register".equals(data)) {
                sendMSG(sendMessage, getLanguage().get(id).equals("uz") ? "Kurslarni tanlang" : getLanguage().get(id).equals("en") ? "selected course" : "kursni tanlang");
            } else if (data.equals("uz")) {
                language.put(id, "uz");
                getButtonLan("uz", id, sendPhoto);
            } else if (data.equals("en")) {
                language.put(id, "en");
                getButtonLan("en", id, sendPhoto);
            } else if (data.equals("ru")) {
                language.put(id, "ru");
                getButtonLan("ru", id, sendPhoto);
            }
        }
    }

    //userninh o'ziga ko'rinadigan ma'lumotlari
    public void userInfos(Long chatId, SendMessage sendMessage) {
        try {
            sendMSG(sendMessage, "ismingiz : " + firstName.get(chatId) + "\nfamiliyangiz : " + lastName.get(chatId) + "\ntel raqamingiz : " + phoneNumber.get(chatId));
        } catch (Exception e) {
            System.out.println("not execute");
        }
    }

    //bu method userning ro'yaxtadn o'tgan yoki o'tmaganiga qarab button chiqaradi
    public void getButtonLan(String lan, Long id, SendPhoto sendPhoto) {
        int count = 0;
        for (Long aLong : registerId) {
            if (aLong.equals(id)) {
                count++;
            }
        }
        if (count == 1) {
            InlineKeyboardMarkup keyboardMarkup = new InlineKeyboardMarkup(getInlineButtonRows(lan.equals("uz") ? BotConfig.COURSE_UZ : lan.equals("en") ? BotConfig.COURSE_EN : BotConfig.COURSE_RU));
            sendPhoto(sendPhoto, "D:\\rasm.jpg", "yo'nalishni tanlang", keyboardMarkup);
        } else {
            InlineKeyboardMarkup keyboardMarkup = new InlineKeyboardMarkup(getInlineButtonRows(lan.equals("uz") ? BotConfig.FIRSTBUTTON_UZ : lan.equals("en") ? BotConfig.FIRSTBUTTON_EN : BotConfig.FIRSTBUTTON_RU));
            sendPhoto(sendPhoto, "D:\\rasm.jpg", "yo'nalishni tanlang", keyboardMarkup);
        }
    }

    public void getRegisterMenu(SendMessage message) {
        message.setParseMode(ParseMode.MARKDOWN);
        InlineKeyboardMarkup markup = new InlineKeyboardMarkup(getInlineButtonRows(getCourses()));
        message.setReplyMarkup(markup);
    }

    public List<String> getCourses() {
        List<String> courses = new ArrayList<>();
        List<Course> all = courseRepository.findAll();
        for (Course course : all) {
            courses.add(course.getUzName());
            System.out.println(course);
        }
//        for (String cours : courses) {
//            sendMSG(sendMessage, cours);
//        }
        return courses;
    }

    public void getFirstLan(SendMessage sendMessage, InlineKeyboardMarkup keyboardMarkup1, String text) {
        try {
            sendMessage.setReplyMarkup(keyboardMarkup1);
            sendMessage.setText(text);
            execute(sendMessage);
        } catch (Exception e) {
            System.out.println("not execute");
        }
    }

    public void sendPhoto(SendPhoto sendPhoto, String rasm, String text, InlineKeyboardMarkup markup) {
        try {
            sendPhoto.setPhoto(new InputFile(new File(rasm)));
            sendPhoto.setCaption(text);
            sendPhoto.setReplyMarkup(markup);
            execute(sendPhoto);
        } catch (TelegramApiException e) {
            System.out.println("not execute");
        }
    }

    public List<List<InlineKeyboardButton>> getInlineButtonRows(List<String> data) {
        List<List<InlineKeyboardButton>> rows = new ArrayList<>();
        int length = data.size() % 2 != 0 ? data.size() - 1 : data.size();
        for (int i = 0; i < length; i += 2) {
            List<InlineKeyboardButton> inlineButton = new ArrayList<>();
            inlineButton.add(IB.getInlineButton(data.get(i), data.get(i)));
            inlineButton.add(IB.getInlineButton(data.get(i + 1), data.get(i + 1)));
            rows.add(inlineButton);
        }
        if (data.size() % 2 != 0) {
            String text = data.get(data.size() - 1);
            rows.add(Collections.singletonList(IB.getInlineButton(text, text)));
        }
        return rows;
    }


    public void buttons(SendMessage sendMessage, String text) {
        switch (getLanguage().get(id)) {
            case "uz":
                getButtons(sendMessage, text, BotConfig.BUTTONS_UZ);
                break;
            case "en":
                getButtons(sendMessage, text, BotConfig.BUTTONS_EN);
                break;
            case "ru":
                getButtons(sendMessage, text, BotConfig.BUTTONS_RU);
                break;
        }
    }

    public void getButtons(SendMessage sendMessage, String text, List<String> buttons) {
        ReplyKeyboardMarkup markup = new ReplyKeyboardMarkup();
        List<KeyboardRow> keyboardRows = new ArrayList<>();
        int length = buttons.size() % 2 != 0 ? buttons.size() - 1 : buttons.size();
        for (int i = 0; i < length; i += 2) {
            KeyboardRow keyboardRow = new KeyboardRow();
            keyboardRow.add(getKeyboardButton(buttons.get(i)));
            keyboardRow.add(getKeyboardButton(buttons.get(i + 1)));
            keyboardRows.add(keyboardRow);
        }
        KeyboardRow keyboardRow2 = new KeyboardRow();
        if (buttons.size() % 2 != 0) {
            keyboardRow2.add(getKeyboardButton(buttons.get(buttons.size() - 1)));
        }
        keyboardRows.add(keyboardRow2);
        markup.setSelective(true);
        markup.setResizeKeyboard(true);
        markup.setOneTimeKeyboard(true);
        markup.setKeyboard(keyboardRows);
        sendMessage.setReplyMarkup(markup);
        sendMSG(sendMessage, text);
    }

    public KeyboardButton getKeyboardButton(String text) {
        return new KeyboardButton(text);
    }

    //message
    public void sendMSG(SendMessage message, String text) {
        try {
            message.setText(text);
            execute(message);
        } catch (TelegramApiException e) {
            System.out.println("not execute");
        }
    }

    public void buttonPhoneNumber(SendMessage message) {
        ReplyKeyboardMarkup replyKeyboardMarkup = new ReplyKeyboardMarkup();
        message.setReplyMarkup(replyKeyboardMarkup);
        replyKeyboardMarkup.setSelective(true);
        replyKeyboardMarkup.setResizeKeyboard(true);
        replyKeyboardMarkup.setOneTimeKeyboard(true);
        List<KeyboardRow> keyboard = new ArrayList<>();
        KeyboardRow keyboardFirstRow = new KeyboardRow();
        KeyboardButton keyboardButton = new KeyboardButton();
        keyboardButton.setText("Telefon raqam");
        keyboardButton.setRequestContact(true);
        keyboardFirstRow.add(keyboardButton);
        keyboard.add(keyboardFirstRow);
        replyKeyboardMarkup.setKeyboard(keyboard);
        sendMSG(message, "Telefon raqamingizni kiriting");
    }
}
