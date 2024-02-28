let time = "11:59:59PM"
// "07:05:45PM"
// "12:00:00AM"
// "12:45:54PM"
// "09:30:16AM"
// "11:59:59PM"


let hour = time.charAt(0) + time.charAt(1)
let inthr = parseInt(hour)
let apm = time.charAt(8) + time.charAt(9)
let twofour = 0

if (apm === "AM"){
    if(time === "12:00:00AM"){
        console.log("00:00:00")
    }
    else{
        let final = time.replace(apm, " ")
        console.log(final)
    }
}
else if (apm === "PM"){
    if (inthr === 12){
        let final = time.replace(apm, " ")
        console.log(final)
    }
    if (inthr < 12){
        twofour = inthr + 12
        let result = time.replace(hour, twofour.toString())
        let final = result.replace(apm, " ")
        console.log(final)
    } else if (inthr === "12"){
        console.log(time)
    }
}
