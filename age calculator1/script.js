let userDate = document.getElementById('date')
userDate.max = new Date().toISOString().split("T")[0];

let result = document.getElementById('result')

function calculateAge(){
    let birthdate = new Date(userDate.value)

    let date1 = birthdate.getDate();
    let month1 =birthdate.getMonth() +1;
    let year1 = birthdate.getFullYear();
    console.log(date1);
    console.log(birthdate);



    let currentdate = new Date();

    let date2 = currentdate.getDate();
    let month2= currentdate.getMonth()+1;
    let year2 =currentdate.getFullYear();
    console.log(typeof(year1));
    console.log(typeof(year2));
    console.log(typeof(month1));
    console.log(typeof(month2));
    console.log(typeof(year1));
    console.log(typeof(year2));
    console.log(year1);
    


    let date3, month3, year3;

    year3 = year2-year1;


    if (month2 >= month1) {
       month3 =  month2- month1;
    }else{
        year3--;
        month3 = 12 + month2 - month1;
    }


    if (date2 >= date1) {
        date3 = date2 - date1;
        
    } else {
        month3--;
           date3= getDaysInMonth(year1, month1)+  date2 - date1 ;
    }

    if (month3 < 0) {
        month3 = 11;
        year3--;
    }
    result.innerHTML=`<h4> Your Perfect Age ${year3} Years ${month3} Months And ${date3} Days`
    console.log(year3, month3, date3);
}


// calculateAge();
function getDaysInMonth(year, month) {
    return new Date(year, month, 0).getDate();   
}
