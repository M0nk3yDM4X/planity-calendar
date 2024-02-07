# Planity Calendar

## The problem

The problem consists in rendering events on a calendar, avoiding overlapping events to visually overlap.
Your implementation should meet the two following constraints:

1. Every overlapping event should have the same width as every event it overlaps
2. Every event should use the maximum width available while satisfying constraint 1

A visual illustration of the problem is given below.

Rendering events on a calendar means here: the relative position of events to the top of the screen and their height is a function of the height of the screen, the start/end time of the calendar, and the start time/duration of the events. For example: if the calendar goes from 00:00 to 24:00 and the screen is 2400px high, an event starting at 12:00 and lasting 1h would be positioned at 1200px of the top of the screen and have a height of 100px.

Using the maximum width available here implies that the width of every group of mutually overlapping events equals the width of the window.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm test`

Launches the test runner.\
