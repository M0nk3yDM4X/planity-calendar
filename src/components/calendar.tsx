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
    return (
        <div className="Calendar">
            {eventList.map(event => {
                return <Event key={`eventId:${event.id}`} event={event} />
            })}
        </div>
    )
}

export default Calendar
