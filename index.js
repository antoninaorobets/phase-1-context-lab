function createEmployeeRecord(array) {
    return {
        firstName: array[0],
        familyName: array[1],
        title: array[2],
        payPerHour: array[3],
        timeInEvents: [],
        timeOutEvents: [],
    }
}

function createEmployeeRecords(records) {
    const employeeRecords = []
    records.forEach(record => {
        const emploee = createEmployeeRecord(record)
        employeeRecords.push(emploee)
    });
    return employeeRecords;
}

function createTimeInEvent(timeString) {
    const dateTime = timeString.split(' ')
    this.timeInEvents.push({
        type: "TimeIn",
        date: dateTime[0],
        hour: parseInt(dateTime[1]),
    })
    return this
}

function createTimeOutEvent(timeString) {
    const dateTime = timeString.split(' ')
    this.timeOutEvents.push({
        type: "TimeOut",
        date: dateTime[0],
        hour: parseInt(dateTime[1]),
    })
    return this
}

function hoursWorkedOnDate(dateString) {
    const inObj = this.timeInEvents.find(element => element.date === dateString)
    const outObj = this.timeOutEvents.find(element => element.date === dateString)
    return (outObj.hour - inObj.hour) / 100
}

function wagesEarnedOnDate(dateString) {
    return hoursWorkedOnDate.call(this, dateString) * this.payPerHour
}

// function allWagesFor(emploeeRecord){
//     const totalDays = emploeeRecord.timeInEvents.length
//     let sum = 0
//     for (let i = 0; i < totalDays; i++ ){
//       const totalHours = (emploeeRecord.timeOutEvents[i].hour - emploeeRecord.timeInEvents[i].hour)/100
//       sum = sum + (totalHours) * emploeeRecord.payPerHour
//     }
//   return sum
//}

function calculatePayroll(emploeeRecordArr){
    let sum = 0
    for (let i = 0; i < emploeeRecordArr.length; i++){
      sum = sum + allWagesFor.call(emploeeRecordArr[i])
    }
    return sum 
  }


  function findEmployeeByFirstName(arr, name) {
    let a = []
      arr.forEach(emploee => {
          if (emploee.firstName === name) {
            a.push(emploee);     
            }
        })
  return a[0];
  } 
/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}
