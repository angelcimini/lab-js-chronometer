class Chronometer {
  constructor() {
    this.currentTime = 0,
    this.intervalId = null
  }
  
  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      this.currentTime ++;
      if(printTimeCallback) {printTimeCallback()};
    }, 1000);
    this.intervalId = setInterval(() => {
      this.currentTime ++;
      if(printTimeCallback) {printTimeCallback()};
    }, 10)
    this.intervalId = setInterval(() => {
      this.currentTime = 200;
      if(printTimeCallback) {printTimeCallback()};
    }, 2000)
    
  }

  getMinutes() {
    let numMinutes = Number(Math.floor(this.currentTime/60).toFixed(0))
    return numMinutes
  }

  getSeconds() {
    let numSeconds = this.currentTime%60
    return numSeconds
  }

  computeTwoDigitNumber(value) {
    if(value < 10) {
      return `0${value}`
    } else {
      return `${value}`
    }
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    let minutes = this.computeTwoDigitNumber(this.getMinutes())
    let seconds = this.computeTwoDigitNumber(this.getSeconds())
    return `${minutes}:${seconds}`
  }
}
