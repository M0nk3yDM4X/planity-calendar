export interface IRawEvent {
    id: number
    start: string
    duration: number
}

export interface ITimeRange {
    startDate: Date
    endDate: Date
}

export interface IBuiltEvent extends ITimeRange {
    id: number
    duration: number
}

export interface IEnrichedEvent extends IBuiltEvent {
    maxOverlap: number
    numColumn: number
}

export type EventList = IEnrichedEvent[]
