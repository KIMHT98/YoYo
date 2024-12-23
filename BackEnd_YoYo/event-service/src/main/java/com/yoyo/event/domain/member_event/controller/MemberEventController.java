package com.yoyo.event.domain.member_event.controller;

import com.yoyo.event.domain.member_event.dto.MemberEventDTO.Response;
import com.yoyo.event.domain.member_event.service.MemberEventService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Tag(name = "MemberEvent API", description = "MemberEventController")
@RestController
@RequestMapping("/yoyo/schedule")
@RequiredArgsConstructor
public class MemberEventController {

    private final MemberEventService memberEventService;

    @Operation(summary = "일정 목록 조회", description = "일정 목록을 조회한다.")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "일정 목록 조회 성공",
                         content = @Content(schema = @Schema(implementation = Response.class)))
    })
    @GetMapping
    public ResponseEntity<?> getScheduleList(@RequestHeader("memberId") String memberId) {
        List<Response> responses = memberEventService.getScheduleList(Long.parseLong(memberId));
        return new ResponseEntity<>(responses, HttpStatus.OK);
    }

    @Operation(summary = "일정 상세 조회", description = "일정 상세를 조회한다.")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "일정 상세 조회 성공",
                         content = @Content(schema = @Schema(implementation = Response.class))),
            @ApiResponse(responseCode = "400", description = "존재하지 않는 일정입니다."),
            @ApiResponse(responseCode = "403", description = "이벤트 접근 권한이 없습니다.")
    })
    @GetMapping("/{scheduleId}")
    public ResponseEntity<?> getSchedule(@RequestHeader("memberId") String memberId,
                                         @PathVariable("scheduleId") Long memberEventId) {
        Response response = memberEventService.getSchedule(Long.parseLong(memberId),
                                                           memberEventId);
        return new ResponseEntity<>(response, HttpStatus.OK);
    }
}
