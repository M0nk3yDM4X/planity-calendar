import { parse } from 'date-fns'

export function convertToDate(date: string, refDate: Date): Date {
    return parse(date, 'HH:mm', refDate)
}
