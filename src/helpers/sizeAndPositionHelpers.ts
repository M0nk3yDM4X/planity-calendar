export function getEventWidth(maxOverlap: number) {
    return 100 / maxOverlap
}

export function getEventViewHeight(eventDurationInMinutes: number, calendarMinutesAvailable: number) {
    return (eventDurationInMinutes / calendarMinutesAvailable) * 100
}

export function getEventDistanceFromTop(timeDifferenceInMinutes: number, calendarMinutesAvailable: number) {
    return (timeDifferenceInMinutes * 100) / calendarMinutesAvailable
}
