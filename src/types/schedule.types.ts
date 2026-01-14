export enum DayOfWeek {
    MONDAY = 'MONDAY',
    TUESDAY = 'TUESDAY',
    WEDNESDAY = 'WEDNESDAY',
    THURSDAY = 'THURSDAY',
    FRIDAY = 'FRIDAY',
    SATURDAY = 'SATURDAY',
    SUNDAY = 'SUNDAY'    
}

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

export interface UpdateScheduleRequest extends Partial<CreateScheduleRequest> {}