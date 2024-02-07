import { hasOverlap, isNonOverlappingPlacedEvents } from './overlapHelpers'

describe('isNonOverlappingPlacedEvents', () => {
    it('should return true when no events are placed', () => {
        expect(
            isNonOverlappingPlacedEvents(
                {
                    startDate: new Date(0, 0, 0, 9),
                    endDate: new Date(0, 0, 0, 9, 45),
                },
                [],
            ),
        ).toEqual(true)
    })
    it("should return true when placed events doesn't overlap", () => {
        expect(
            isNonOverlappingPlacedEvents(
                {
                    startDate: new Date(0, 0, 0, 14),
                    endDate: new Date(0, 0, 0, 14, 30),
                },
                [
                    {
                        startDate: new Date(0, 0, 0, 9),
                        endDate: new Date(0, 0, 0, 9, 45),
                    },
                    {
                        startDate: new Date(0, 0, 0, 11, 40),
                        endDate: new Date(0, 0, 0, 12, 20),
                    },
                ],
            ),
        ).toEqual(true)
    })
    it('should return false when placed event overlap', () => {
        expect(
            isNonOverlappingPlacedEvents(
                {
                    startDate: new Date(0, 0, 0, 17),
                    endDate: new Date(0, 0, 0, 18),
                },
                [
                    {
                        startDate: new Date(0, 0, 0, 17),
                        endDate: new Date(0, 0, 0, 18),
                    },
                ],
            ),
        ).toEqual(false)
    })
})

describe('hasOverlap', () => {
    it.each([
        {
            result: true,
            values: [
                {
                    startDate: new Date(0, 0, 0, 17),
                    endDate: new Date(0, 0, 0, 18),
                },
                {
                    startDate: new Date(0, 0, 0, 17),
                    endDate: new Date(0, 0, 0, 18),
                },
            ],
        },
        {
            result: true,
            values: [
                {
                    startDate: new Date(0, 0, 0, 17),
                    endDate: new Date(0, 0, 0, 17, 30),
                },
                {
                    startDate: new Date(0, 0, 0, 17),
                    endDate: new Date(0, 0, 0, 18),
                },
            ],
        },
        {
            result: true,
            values: [
                {
                    startDate: new Date(0, 0, 0, 17),
                    endDate: new Date(0, 0, 0, 18),
                },
                {
                    startDate: new Date(0, 0, 0, 17, 30),
                    endDate: new Date(0, 0, 0, 18),
                },
            ],
        },
        {
            result: false,
            values: [
                {
                    startDate: new Date(0, 0, 0, 17),
                    endDate: new Date(0, 0, 0, 18),
                },
                {
                    startDate: new Date(0, 0, 0, 18),
                    endDate: new Date(0, 0, 0, 19),
                },
            ],
        },
        {
            result: false,
            values: [
                {
                    startDate: new Date(0, 0, 0, 16),
                    endDate: new Date(0, 0, 0, 17),
                },
                {
                    startDate: new Date(0, 0, 0, 17),
                    endDate: new Date(0, 0, 0, 18),
                },
            ],
        },
        {
            result: true,
            values: [
                {
                    startDate: new Date(0, 0, 0, 17),
                    endDate: new Date(0, 0, 0, 18),
                },
                {
                    startDate: new Date(0, 0, 0, 17, 30),
                    endDate: new Date(0, 0, 0, 17, 45),
                },
            ],
        },
        {
            result: false,
            values: [
                {
                    startDate: new Date(0, 0, 0, 14),
                    endDate: new Date(0, 0, 0, 15),
                },
                {
                    startDate: new Date(0, 0, 0, 17),
                    endDate: new Date(0, 0, 0, 18),
                },
            ],
        },
    ])('should return correct overlap status', ({ result, values }) => {
        expect(hasOverlap(values[0], values[1])).toEqual(result)
        expect(hasOverlap(values[1], values[0])).toEqual(result)
    })
})
