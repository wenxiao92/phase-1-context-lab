/* Your Code Here */
function createEmployeeRecord(recordArray){

    return {
        firstName: recordArray[0],
        familyName: recordArray[1],
        title: recordArray[2],
        payPerHour: recordArray[3],
    
        timeInEvents: [],
        timeOutEvents: []
    }
}


function createEmployeeRecords(nestedArray){
    //using map method to return as many arrays of objects
    return nestedArray.map(arrays => createEmployeeRecord(arrays))
    
}


function createTimeInEvent(dateTimeInStamp){
    //Create an object and push this oject into timeInEvents
    let obj = {
        type: "TimeIn",
        date: dateTimeInStamp.slice(0,10),
        hour: parseInt(dateTimeInStamp.slice(11,15),10)
    }

    this.timeInEvents.push(obj)
    return this
}


function createTimeOutEvent(dateTimeOutStamp){
    //Create an object and push this object into timeOutEvents
        let obj = {
            type: "TimeOut",
            date: dateTimeOutStamp.slice(0,10),
            hour: parseInt(dateTimeOutStamp.slice(11,15),10)
        }
    
        this.timeOutEvents.push(obj)
        return this
}


function hoursWorkedOnDate(date){
    let timeIn = this.timeInEvents.filter(function(ele){
        return ele.date === date;
    })
    
    let timeOut = this.timeOutEvents.filter(function(ele){
        return ele.date === date;
    })

    let hoursWorked = timeOut[0].hour - timeIn[0].hour
    //console.log(hoursWorked)
    return hoursWorked/100
}


function wagesEarnedOnDate(date){

return hoursWorkedOnDate.call(this, date) * this.payPerHour
//cannot use hoursWordedOnDate(date) because there's no object in hoursWorkedOnDate for 'this'.
//this is defined b/c of cRecord (from test scope). you need the .call to pass the object into the hoursWorkedOnDate function
}


function findEmployeeByFirstName(employeeRecords, firstName){
//console.log(employeeRecords)
let nameMatch = employeeRecords.filter(function(ele){
    return ele.firstName === firstName
})

return nameMatch[0]
}


function calculatePayroll(employeeRecords){
    let total = 0
    for(let i = 0; i< employeeRecords.length; i++){
        
        total += allWagesFor.call(employeeRecords[i])
        //console.log(total)
    }
    return total
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

