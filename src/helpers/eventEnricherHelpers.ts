import { addMinutes } from 'date-fns'
import { IRawEvent, IBuiltEvent } from '../types'
import { convertToDate } from './timeHelpers'

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

function sortBuiltEventListByAscStartDate(eventList: IBuiltEvent[]) {
    return eventList.sort((a, b) => a.startDate.getTime() - b.startDate.getTime())
}
