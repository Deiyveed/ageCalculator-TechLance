function age() {
let dobDate = document.getElementById('date').value;
let dobMonth = document.getElementById('month').value;
let dobYear = document.getElementById('year').value;

let date = new Date();
let currentDate = date.getDate();
let currentMonth = 1 + date.getMonth();
let currentYear = date.getFullYear();
const monthDays = [31,28,31,30,31,30,31,31,30,31,30,31];

dobMonth <= 12
// to calculate the years 

let yearAge = currentYear - dobYear;

// to calculate the months

let monthAge = "";

if (currentMonth >= dobMonth) {
    monthAge = currentMonth - dobMonth;
} else {
    monthAge = 12 + currentMonth - dobMonth;
    yearAge = yearAge - 1;
}

// to calculate the days

let dateAge = "";

if (currentDate >= dobDate) {
    dateAge = currentDate - dobDate;
} else {
    dateAge = monthDays[monthAge - 1] + currentDate - dobDate;
    monthAge = monthAge - 1;
}

// document.getElementById('age').innerHTML = `You are ${yearAge} years, ${monthAge} months, ${dateAge} days old`;

// alert part

if((dobMonth == "") || (dobDate == "") || (dobYear == "")){
    return Swal.fire({
        title: 'Error!',
        text: 'Please fill all input fields',
        icon: 'error',
        confirmButtonText: 'Okay'
      })
} else {
    document.getElementById('age').innerHTML = "";
}

if((dobMonth == 0) || (dobDate == 0) || (dobYear == 0)){
    return Swal.fire({
        title: 'Error!',
        text: 'Please enter valid details',
        icon: 'error',
        confirmButtonText: 'Okay'
      })
} else {
    document.getElementById('age').innerHTML = "";
}

if(dobDate > 31){

    return Swal.fire({
        title: 'Error!',
        text: 'Date cannot exceed 31',
        icon: 'error',
        confirmButtonText: 'Okay'
      })
} else {
    document.getElementById('age').innerHTML = "";

}

if(dobMonth > 12){

    return Swal.fire({
        title: 'Error!',
        text: 'Month cannot exceed 12',
        icon: 'error',
        confirmButtonText: 'Okay'
      })
} else {
    document.getElementById('age').innerHTML = ""
}


if(dobYear.length < 4) {
    return Swal.fire({
        title: 'Error!',
        text: 'Dob Year should not be less than 4 digits',
        icon: 'error',
        confirmButtonText: 'Okay'
      })
} else {
    document.getElementById('age').innerHTML = ""
}

document.getElementById('age').innerHTML = `You are ${yearAge} years, ${monthAge} months, ${dateAge} days old`;

if(yearAge < 18){
    return Swal.fire({
        title: 'Error!',
        text: 'Sorry! You are ineligible for this job. You have to be above 18 years',
        icon: 'error',
        confirmButtonText: 'Okay'
      }) 
}

if(yearAge >= 27){
    return Swal.fire({
        title: 'Error!',
        text: 'Sorry! You are ineligible for this job. You have to be below 27 years',
        icon: 'error',
        confirmButtonText: 'Okay'
      }) 
} else {
    return Swal.fire({
        title: 'Success!',
        text: 'Congratulations! You are Eligible',
        icon: 'success',
        confirmButtonText: 'Proceed'
      }) 
}
}
