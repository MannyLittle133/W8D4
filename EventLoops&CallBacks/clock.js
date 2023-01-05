class Clock {
    constructor() {
        this.date = new Date()
        this.hours = this.date.getHours()
        this.minutes = this.date.getMinutes()
        this.seconds = this.date.getSeconds()
        this.printTime()
        // setInterval(1000, this._tick())
        setInterval(this._tick.bind(this), 1000)
      // 1. Create a Date object.
      // 2. Store the hours, minutes, and seconds.
      // 3. Call printTime.
      // 4. Schedule the tick at 1 second intervals.
    }

    printTime() {
        let currentTime = [this.hours, this.minutes, this.seconds]
        console.log(currentTime.join(':'))
    }

    _tick() {
      this.seconds += 1;
      if (this.seconds === 60) {
        this.seconds = 0;
        this.minutes += 1;
      }
      if (this.minutes === 60) {
        this.minutes = 0;
        this.hours += 1;
      }
      if (this.hours === 24) {
        this.hours = 0;
      }
      this.printTime();
      // 1. Increment the time by one second.
      // 2. Call printTime.
    }
}

const clock = new Clock();
// console.log(`${clock.hours}:${clock.minutes}:${clock.seconds}`)
clock.printTime()
// clock._tick()