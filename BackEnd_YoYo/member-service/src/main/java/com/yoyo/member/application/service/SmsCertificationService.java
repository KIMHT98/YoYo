package com.yoyo.member.application.service;

import com.yoyo.common.annotation.UseCase;
import com.yoyo.member.adapter.out.persistence.SmsCertificationRepository;
import com.yoyo.member.adapter.out.persistence.SpringDataMemberRepository;
import com.yoyo.member.application.port.in.member.SmsCertificationUseCase;
import java.util.Random;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import net.nurigo.sdk.message.model.Message;
import org.springframework.beans.factory.annotation.Value;

@Slf4j
@UseCase
@RequiredArgsConstructor
public class SmsCertificationService implements SmsCertificationUseCase {

    @Value("${cool-sms.send-phone-number}")
    private String SEND_PHONE_NUMBER;

    private final SmsCertificationRepository smsCertificationRepository;
    private final SpringDataMemberRepository memberRepository;

    @Override
    public String getValidationCode() {
        Random random = new Random();
        StringBuilder stringBuilder = new StringBuilder();
        for (int i = 0; i < 6; i++) {
            stringBuilder.append(random.nextInt(10));
        }
        return stringBuilder.toString();
    }

    @Override
    public Message getMessageForm(String randomString, String phoneNumber) {
        Message message = new Message();
        message.setFrom(SEND_PHONE_NUMBER);
        message.setTo(phoneNumber);
        message.setText("[YoYo] 아래의 인증번호를 입력해주세요 \n [" + randomString + "]");
        return message;
    }

    @Override
    public void saveSmsCertification(String phoneNumber, String certificationNumber) {
        smsCertificationRepository.createSmsCertification(phoneNumber, certificationNumber);
    }

    @Override
    public boolean duplicatePhoneNumber(String phoneNumber) {
        return memberRepository.existsByPhoneNumber(phoneNumber);
    }

    @Override
    public boolean verifySmsCertification(String phoneNumber, String certificationNumber) {
        String storedCode = smsCertificationRepository.getSmsCertification(phoneNumber);
        if (storedCode != null && storedCode.equals(certificationNumber)) {
            smsCertificationRepository.deleteSmsCertification(phoneNumber);
            return true;
        }
        return false;
    }
}
