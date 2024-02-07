import { CALENDAR_RELATIVE_REF_DATE } from '../config'
import rawEventList from '../eventList.json'
import { addTimeRangeToRawEventList } from '../helpers/eventEnricherHelpers'
import { IRawEvent, EventList } from '../types'

function enrichRawEventList(eventList: IRawEvent[]): EventList {
    const builtEventList = addTimeRangeToRawEventList(eventList, CALENDAR_RELATIVE_REF_DATE)
    console.log('builtEventList:', builtEventList)
    return []
}

export function useEventList() {
    return { eventList: enrichRawEventList(rawEventList) }
}
