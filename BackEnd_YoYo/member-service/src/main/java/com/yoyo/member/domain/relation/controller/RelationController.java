package com.yoyo.member.domain.relation.controller;

import com.yoyo.common.response.ApiResponse;
import com.yoyo.member.domain.relation.dto.FindRelationDTO;
import com.yoyo.member.domain.relation.dto.UpdateRelationDTO;
import com.yoyo.member.domain.relation.service.RelationService;
import com.yoyo.member.entity.Member;
import com.yoyo.member.entity.Relation;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/yoyo")
@RequiredArgsConstructor
public class RelationController {
    private final RelationService relationService;

    /**
     * @param tag    태그
     * @param search 이름 검색
     * @return 리스트 조회
     * @Header memberId 현재 사용자
     */
    @GetMapping("/members-relations")
    public ResponseEntity<?> getRelationList(@RequestHeader("memberId") Long memberId,
                                             @RequestParam(required = false) String tag,
                                             @RequestParam(required = false) String search) {
        ApiResponse<List<FindRelationDTO.Response>> response;
        List<FindRelationDTO.Response> relations = relationService.findRelations(memberId, tag, search);
        if (relations.isEmpty()) {
            response = new ApiResponse<>(
                    HttpStatus.NO_CONTENT.value(),
                    "데이터 없음",
                    relations
            );
            return ResponseEntity.status(HttpStatus.NO_CONTENT.value()).body(response);
        }
        response = new ApiResponse<>(
                HttpStatus.OK.value(),
                "리스트 조회 성공",
                relations
        );
        return ResponseEntity.status(HttpStatus.OK).body(response);
    }

    /**
     * 친구관계 정보 수정
     *
     * @param request 태그, 메모
     */
    @PatchMapping("/members-relation")
    ResponseEntity<?> updateRelation(@RequestHeader("memberId") Long memberId,
                                     @RequestBody UpdateRelationDTO.Request request) {
        ApiResponse<Relation> response = new ApiResponse<>(
                HttpStatus.OK.value(),
                "친구관계 수정",
                relationService.updateRelation(memberId, request)
        );
        return ResponseEntity.status(HttpStatus.OK).body(response);
    }
}