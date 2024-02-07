import { EventList } from '../types'

interface ICalendarProps {
    calendarRange: {
        calendarStart: Date
        calendarEnd: Date
    }
    eventList: EventList
}

function Calendar({ eventList, calendarRange: { calendarEnd, calendarStart } }: ICalendarProps) {
    console.log('eventList: ', eventList)
    console.log('calendarEnd: ', calendarEnd)
    console.log('calendarStart: ', calendarStart)
    return (
        <div className="Calendar">
            <span>Calendar</span>
        </div>
    )
}

export default Calendar
