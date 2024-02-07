import { IEnrichedEvent } from '../types'

interface IEventProps {
    event: IEnrichedEvent
}

function Event({ event }: IEventProps) {
    return (
        <div className="Event">
            <span>Event n°{event.id}</span>
        </div>
    )
}

export default Event
