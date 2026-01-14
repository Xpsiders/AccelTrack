export interface Test{
    id: number;
    userId: number;
    subject: string;
    topic: string;
    testDate: string; //ISO date string
    testTime: string; //HH:mm format
    notes?: string;
    notified24h: boolean;
    notified1h: boolean;
    createdAt: string;
    updatedAt: string;
}

export interface CreateTestRequest{
    subject: string;
    topic: string;
    testDate: string;
    testTime: string;
    notes?: string;
}

export interface UpdateTestRequest extends Partial<CreateTestRequest> {}