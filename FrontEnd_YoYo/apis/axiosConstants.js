export const BASE_URL = `http://70.12.247.178:8000/yoyo/`;

export const END_POINT = {
    //회원
    MEMBER: (path) => `members/${path}`,
    //이벤트
    EVENT: "event",
    EVENT_PATH: (path) => `event/${path}`,

    SCHEDULE: `schedule`,
    SCHEDULE_PATH: (path) => `schedule/${path}`,

    NOTIFICATION: `notification`,
    NOTIFICATION_PATH: (path) => `notification/${path}`,

    TRANSACTION: `transactions`,
    TRANSACTION_PATH: (path) => `transactions/${path}`,

    RELATIONS: `members-relations`,
    RELATIONS_PATH: (path) => `members-relations/${path}`,

    //계좌
    ACCOUNT: "account",
    ACCOUTN_PATH: (path) => `account/${path}`,
    //페이
    PAYMENT: "pay",
    PAYMENT_PATH: (path) => `pay/${path}`,
};
