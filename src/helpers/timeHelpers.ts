import { parse } from 'date-fns'

export function getTimeDifferenceInMinutes(from: Date, to: Date) {
    const timeFrom = from.getTime()
    const timeTo = to.getTime()

    const timeDifference = (timeTo - timeFrom) / (1000 * 60)

    return Math.abs(timeDifference)
}

export function convertToDate(date: string, refDate: Date): Date {
    return parse(date, 'HH:mm', refDate)
}
