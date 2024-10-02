export const BASE_URL = `http://70.12.247.178/yoyo/`;

export const END_POINT = {
    MEMBER: (path) => `members/${path}`,
    EVENT: "event",
    EVENT_PATH: (path) => `event/${path}`,

    SCHEDULE: `schedule`,
    SCHEDULE_PATH: (path) => `schedule/${path}`,

    NOTIFICATION: `notification`,
    NOTIFICATION_PATH: (path) => `notification/${path}`,

    TRANSACTION: `transactions`,
    TRANSACTION_PATH: (path) => `transactions/${path}`,

    RELATION: `members-relation`,
    RELATIONS: `members-relations`,
    RELATION_PATH: (path) => `members-relations/${path}`,
};
