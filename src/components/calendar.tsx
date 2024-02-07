import { getEventWidth } from '../helpers/sizeAndPositionHelpers'
import { getTimeDifferenceInMinutes } from '../helpers/timeHelpers'
import { EventList } from '../types'
import Event from './event'

interface ICalendarProps {
    calendarRange: {
        calendarStart: Date
        calendarEnd: Date
    }
    eventList: EventList
}

function Calendar({ eventList, calendarRange: { calendarEnd, calendarStart } }: ICalendarProps) {
    const calendarMinutesAvailable = getTimeDifferenceInMinutes(calendarStart, calendarEnd)
    console.log('calendarMinutesAvailable: ', calendarMinutesAvailable)

    return (
        <div className="Calendar">
            {eventList.map(event => {
                console.log('event id:', event.id)
                const timeDifferenceFromCalendarStartToEventStart = getTimeDifferenceInMinutes(calendarStart, event.startDate)
                console.log('timeDifferenceFromCalendarStartToEventStart: ', timeDifferenceFromCalendarStartToEventStart)

                const eventWidth = getEventWidth(event.maxOverlap)
                console.log('eventWidth:', eventWidth)

                return <Event key={`eventId:${event.id}`} event={event} />
            })}
        </div>
    )
}

export default Calendar
