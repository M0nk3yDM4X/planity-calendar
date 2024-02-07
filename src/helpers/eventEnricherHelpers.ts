import { addMinutes } from 'date-fns'
import { IRawEvent, IBuiltEvent, IEnrichedEvent } from '../types'
import { convertToDate } from './timeHelpers'
import { getEventMaxOverlap, hasOverlap, isNonOverlappingPlacedEvents } from './overlapHelpers/overlapHelpers'

export function addTimeRangeToRawEventList(eventList: IRawEvent[], refDate: Date): IBuiltEvent[] {
    const builtEventList = eventList.map(({ start, duration, id }) => {
        const eventStartDate = convertToDate(start, refDate)
        const eventEndState = addMinutes(eventStartDate, duration)

        return {
            id: id,
            duration: duration,
            startDate: eventStartDate,
            endDate: eventEndState,
        }
    })

    return sortBuiltEventListByAscStartDate(builtEventList)
}

export function computeOverlap(eventList: IBuiltEvent[]) {
    const enrichedEventList: IEnrichedEvent[] = []

    for (const partialEnrichedEvent of eventList) {
        const eventCurrentMaxOverlap = getEventMaxOverlap(partialEnrichedEvent, eventList)

        if (isNonOverlappingPlacedEvents(partialEnrichedEvent, enrichedEventList)) {
            enrichedEventList.push({
                ...partialEnrichedEvent,
                numColumn: 0,
                maxOverlap: eventCurrentMaxOverlap,
            })
        } else {
            const overlappingPlacedEventList = enrichedEventList.filter(placedElement => hasOverlap(placedElement, partialEnrichedEvent))

            const overlappingPlacedEventMaxOverlap = overlappingPlacedEventList.reduce((acc, { maxOverlap }) => {
                if (acc > maxOverlap) {
                    return acc
                }
                return maxOverlap
            }, 0)

            enrichedEventList.push({
                ...partialEnrichedEvent,
                numColumn: findFirstAvailableColumn(overlappingPlacedEventList),
                maxOverlap: Math.max(overlappingPlacedEventMaxOverlap, eventCurrentMaxOverlap),
            })
        }
    }

    return enrichedEventList
}

function sortBuiltEventListByAscStartDate(eventList: IBuiltEvent[]) {
    return eventList.sort((a, b) => a.startDate.getTime() - b.startDate.getTime())
}

function findFirstAvailableColumn(overlappingElements: IEnrichedEvent[]): number {
    const usedColumns = overlappingElements.map(element => element.numColumn)
    let columnNumber = 0

    while (usedColumns.includes(columnNumber)) {
        columnNumber++
    }

    return columnNumber
}
