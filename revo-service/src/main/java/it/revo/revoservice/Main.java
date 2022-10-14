package it.revo.revoservice;

import it.revo.revoservice.entity.enums.HaftaKunlari;
import org.springframework.format.annotation.DateTimeFormat;

import java.sql.Time;
import java.time.*;
import java.time.format.DateTimeFormatter;
import java.util.*;

public class Main {
    public static void main(String[] args) {
        Date date1 = new Date();
        int i = date1.getMonth();
        Date date = new Date(new Date().getYear() + 1900, i, date1.getDate());
//        int day = date.getDay();
//        int month = date.getMonth();
        Locale locale = new Locale("uz", "Uzbekistan");
//        System.out.println(Calendar.getInstance());
//        System.err.println("month " + Calendar.MONTH);
//        System.err.println("haftaning nechanchi kuni " + Calendar.DAY_OF_WEEK);
//        System.err.println("day " + Calendar.OCTOBER);
//        System.out.println(Date.from(Instant.now()));
//        System.out.println(Arrays.toString(new String[]{String.valueOf(TimeZone.getDefault())}));
        //2022-10-09T09:51:26.412+00:00
        //2022-10-09T09:49:59.486+00:00
//        System.out.println(date);
//        System.out.println(date.getMonth());
//        System.out.println(date.getTime());
//        System.out.println(LocalDate.of(date.getYear(), date.getMonth(), 30));
//        System.out.println(date.getYear());
//        System.out.println(LocalDate.now().atTime(date.getHours(), date.getMinutes()));
//        System.out.println(Calendar.getInstance(TimeZone.getDefault()));
//        List<HaftaKunlari> haftaKunlaris = new ArrayList<>();
        //    MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY, SATURDAY, SUNDAY
//        haftaKunlaris.add(HaftaKunlari.MONDAY);
//        haftaKunlaris.add(HaftaKunlari.WEDNESDAY);
//        haftaKunlaris.add(HaftaKunlari.FRIDAY);
//        int count = 1;
//        for (int j = date.getDate(); j <= 31; j++) {
//            Date date2 = new Date(date.getYear(), date.getMonth(), j);
//            if (date2.getMonth() == date.getMonth() && date2.getDay() == 1 || date2.getDay() == 3 || date2.getDay() == 5) {
//                System.out.println(count + ", " + date2);
//                count++;
//            }
//            else {
//                System.err.println(j + ", " + date2);
//            }
//        }
    }
}
