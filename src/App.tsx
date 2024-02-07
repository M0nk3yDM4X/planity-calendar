import Calendar from './components/calendar'
import { CALENDAR_RANGE } from './config'
import { useEventList } from './hooks/useEventList'

function App() {
    const { eventList } = useEventList()

    return <Calendar eventList={eventList} calendarRange={CALENDAR_RANGE} />
}

export default App
