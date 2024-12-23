package com.yoyo.member.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "relation")
@AllArgsConstructor
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Getter
@Builder
public class Relation {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long relationId;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "member_id")
    @JsonBackReference
    private Member member;
    private Long oppositeId;
    private String oppositeName;
    @Enumerated(EnumType.STRING)
    @Setter
    private RelationType relationType;
    @Setter
    private String description;
    @Setter
    private long totalReceivedAmount;
    @Setter
    private long totalSentAmount;
    private boolean isMember;
}
