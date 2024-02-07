import { useEventList } from './hooks/useEventList'

function App() {
    const eventList = useEventList()
    console.log('eventList enriched: ', eventList)

    return (
        <div>
            <span>Hello World</span>
        </div>
    )
}

export default App
