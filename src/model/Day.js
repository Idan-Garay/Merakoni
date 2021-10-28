class Day {
  constructor(day, date, tasks, quantity) {
    this.day = day;
    this.date = date;
    this.tasks = tasks;
    this.quantity = quantity;
  }

  getAccomplishedTasks() {
    return this.tasks.map(task => task.accomplished === true).length;
  }
}

export default Day;
