export const DayOfWeek = {
    MONDAY: 'MONDAY',
    TUESDAY: 'TUESDAY',
    WEDNESDAY: 'WEDNESDAY',
    THURSDAY: 'THURSDAY',
    FRIDAY: 'FRIDAY',
    SATURDAY: 'SATURDAY',
    SUNDAY: 'SUNDAY'
} as const;

export type DayOfWeek = typeof DayOfWeek[keyof typeof DayOfWeek];

export interface Schedule {
    id: number;
    userId: number;
    dayOfWeek: DayOfWeek;
    subject: string;
    startTime: string;
    endTime: string;
    room?: string;
    createdAt: string;
    updatedAt: string;
}

export interface CreateScheduleRequest {
    dayOfWeek: DayOfWeek;
    subject: string;
    startTime: string;
    endTime: string;
    room?: string;
}

export interface UpdateScheduleRequest extends Partial<CreateScheduleRequest> { }