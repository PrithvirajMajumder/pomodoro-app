export default class Alarm {
  focusTime;
  repBreakTime;
  setBreakTime;
  reps;
  sets;

  constructor({focusTime, repBreakTime, setBreakTime, reps, sets}) {
    this.focusTime = focusTime;
    this.repBreakTime = repBreakTime;
    this.setBreakTime = setBreakTime;
    this.reps = reps;
    this.sets = sets;
  }
}
