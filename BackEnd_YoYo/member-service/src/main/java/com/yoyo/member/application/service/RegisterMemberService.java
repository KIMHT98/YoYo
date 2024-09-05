package com.yoyo.member.application.service;

import com.yoyo.common.annotation.UseCase;
import com.yoyo.member.adapter.out.persistence.MemberJpaEntity;
import com.yoyo.member.adapter.out.persistence.MemberMapper;
import com.yoyo.member.application.port.in.RegisterMemberCommand;
import com.yoyo.member.application.port.in.RegisterMemberUseCase;
import com.yoyo.member.application.port.out.RegisterMemberPort;
import com.yoyo.member.domain.Member;
import com.yoyo.member.domain.Member.MemberBirthDay;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Transactional
@UseCase
public class RegisterMemberService implements RegisterMemberUseCase {

    private final RegisterMemberPort registerMemberPort;
    private final MemberMapper memberMapper;
    @Override
    public Member registerMember(RegisterMemberCommand command) {
        // command -> DB
        // port, adapter
        MemberJpaEntity jpaEntity = registerMemberPort.createMember(
                new Member.MemberName(command.getName()),
                new Member.MemberPassword(command.getPassword()),
                new Member.MemberPhoneNumber(command.getPhoneNumber()),
                new MemberBirthDay(command.getBirthDay())
        );

        return memberMapper.mapToDomainEntity(jpaEntity);
    }

}
