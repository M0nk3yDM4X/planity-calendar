interface IEventProps {
    eventId: number
    eventWidth: number
    eventHeight: number
    eventDistanceFromTop: number
    eventDistanceFromLeft: number
}

function Event({ eventId, eventWidth, eventHeight, eventDistanceFromTop, eventDistanceFromLeft }: IEventProps) {
    console.log('event style:', eventWidth, eventHeight, eventDistanceFromTop, eventDistanceFromLeft)
    return (
        <div className="Event">
            <span>Event n°{eventId}</span>
        </div>
    )
}

export default Event
