import { getEventDistanceFromTop, getEventViewHeight, getEventWidth } from '../helpers/sizeAndPositionHelpers'
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

    return (
        <div className="Calendar">
            {eventList.map(({ duration, id, maxOverlap, numColumn, startDate }) => {
                const timeDifferenceFromCalendarStartToEventStart = getTimeDifferenceInMinutes(calendarStart, startDate)

                const eventWidth = getEventWidth(maxOverlap)

                return (
                    <Event
                        key={`eventId:${id}`}
                        eventWidth={eventWidth}
                        eventDistanceFromLeft={numColumn * eventWidth}
                        eventDistanceFromTop={getEventDistanceFromTop(timeDifferenceFromCalendarStartToEventStart, calendarMinutesAvailable)}
                        eventHeight={getEventViewHeight(duration, calendarMinutesAvailable)}
                        eventId={id}
                    />
                )
            })}
        </div>
    )
}

export default Calendar
