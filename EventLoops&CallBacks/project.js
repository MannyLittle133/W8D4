class Clock {
    constructor() {
        this.date = new Date()
        this.hours = this.date.getHours()
        this.minutes = this.date.getMinutes()
        this.seconds = this.date.getSeconds()
        this.printTime()
      // 1. Create a Date object.
      // 2. Store the hours, minutes, and seconds.
      // 3. Call printTime.
      // 4. Schedule the tick at 1 second intervals.
    }

    printTime() {
        let formatMins = this.minutes
        let formatSeconds = this.seconds
        if (formatMins.length < 2) {
            formatMins = `0${this.minutes}`
            let currentTime = `${this.hours}:${formatMins}:${this.seconds}`
            console.log(currentTime)
        } else if (formatSeconds.length < 2) {
            formatSeconds = `0${this.seconds}`
            let currentTime = `${this.hours}:${this.minutes}:${formatSeconds}`
            console.log(currentTime)
        }
      // Format the time in HH:MM:SS
      // Use console.log to print it.
    }

    _tick() {
      // 1. Increment the time by one second.
      // 2. Call printTime.
    }
}

const clock = new Clock();
console.log(`${clock.hours}:${clock.minutes}:${clock.seconds}`)
// clock.printTime()