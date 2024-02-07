import { isAfter, isBefore, isEqual } from 'date-fns'
import { ITimeRange, IBuiltEvent } from '../../types'

export function isNonOverlappingPlacedEvents(event: ITimeRange, placedEventList: ITimeRange[]): boolean {
    return placedEventList.length === 0 || placedEventList.every(placedElement => !hasOverlap(event, placedElement))
}

export function hasOverlap(a: ITimeRange, b: ITimeRange) {
    const isBetween =
        (isAfter(a.startDate, b.startDate) && isBefore(a.startDate, b.endDate)) ||
        (isAfter(a.endDate, b.startDate) && isBefore(a.endDate, b.endDate)) ||
        (isAfter(b.startDate, a.startDate) && isBefore(b.startDate, a.endDate)) ||
        (isAfter(b.endDate, a.startDate) && isBefore(b.endDate, a.endDate))

    const isStrictlyEqual = isEqual(a.startDate, b.startDate) && isEqual(a.endDate, b.endDate)

    return isBetween || isStrictlyEqual
}

export function getEventMaxOverlap(event: IBuiltEvent, eventList: IBuiltEvent[]) {
    const overlappingEventList = eventList.filter(e => e.id !== event.id && hasOverlap(e, event))

    const maxOverlapList = overlappingEventList.map(overlappingEvent => {
        const overlappingEventListWithoutCurrentOverlappingEvent = overlappingEventList.filter(element => element !== overlappingEvent)

        return overlappingEventListWithoutCurrentOverlappingEvent.reduce(
            (acc, curr) => {
                return acc.every(e => hasOverlap(e, curr)) ? [...acc, curr] : acc
            },
            [overlappingEvent, event],
        ).length
    })

    return Math.max(1, ...maxOverlapList)
}
