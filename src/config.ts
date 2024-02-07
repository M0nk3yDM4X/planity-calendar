import { convertToDate } from './helpers/timeHelpers'

export const CALENDAR_RELATIVE_REF_DATE = new Date(0)
export const CALENDAR_RANGE = {
    calendarStart: convertToDate('09:00', CALENDAR_RELATIVE_REF_DATE),
    calendarEnd: convertToDate('21:00', CALENDAR_RELATIVE_REF_DATE),
}
