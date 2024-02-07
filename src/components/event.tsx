interface IEventProps {
    eventId: number
    eventWidth: number
    eventHeight: number
    eventDistanceFromTop: number
    eventDistanceFromLeft: number
}

function Event({ eventId, eventWidth, eventHeight, eventDistanceFromTop, eventDistanceFromLeft }: IEventProps) {
    return (
        <div
            className="Event"
            style={{
                top: `${eventDistanceFromTop}vh`,
                height: `${eventHeight}vh`,
                width: `${eventWidth}vw`,
                left: `${eventDistanceFromLeft}vw`,
            }}
        >
            <span>Event n°{eventId}</span>
        </div>
    )
}

export default Event
