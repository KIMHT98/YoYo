package com.yoyo.member.adapter.in.web;

import com.yoyo.common.WebAdapter;
import com.yoyo.member.application.port.in.UpdateMemberCommand;
import com.yoyo.member.application.port.in.UpdateMemberUseCase;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@WebAdapter
@RestController
@RequiredArgsConstructor
public class UpdateMemberController {

    private final UpdateMemberUseCase updateMemberUseCase;

    @PatchMapping("/members/{memberId}")
    ResponseEntity<?> updateMember(@PathVariable("memberId") Long memberId, @RequestBody UpdateMemberRequest request) {
        UpdateMemberCommand command = UpdateMemberCommand.builder()
                                                         .memberId(memberId)
                                                         .name(request.getName())
                                                         .build();
        updateMemberUseCase.updateMember(command);
        return ResponseEntity.ok().build();
    }

}
