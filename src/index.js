//Special script for tablist:
document.getElementsByClassName('tablinks')[0].addEventListener('click',function(){
    openNewTheme(event,0);
});

document.getElementsByClassName('tablinks')[1].addEventListener('click',function(){
    openNewTheme(event,1);
});

document.getElementsByClassName('tablinks')[2].addEventListener('click',function(){
    openNewTheme(event,2);
});

document.getElementsByClassName('tablinks')[3].addEventListener('click',function(){
    openNewTheme(event,3);
    onLoadData();
});

document.getElementsByClassName('tablinks')[4].addEventListener('click',function(){
    openNewTheme(event,4);
});

document.getElementsByClassName('tablinks')[5].addEventListener('click',function(){
  openNewTheme(event,5);
});

document.getElementsByClassName("tablinks")[6].addEventListener('click',function(){
  openNewTheme(event,6);
});

function openNewTheme(ev,thNum){
    var tabcontent = document.getElementsByClassName("tabcontent"),
    tablinks = document.getElementsByClassName("tablinks");

    for(var i=0;i<tabcontent.length;i++){
        tabcontent[i].style.display = "none";
    }

    for(var i=0;i<tablinks.length;i++){
        tablinks[i].className = tablinks[i].className.replace(" active","");
    }
    tabcontent[thNum].style.display = 'block';
    ev.currentTarget.className += " active";
}

document.getElementById("defaultOpen").click();

//Comparisons functions:
document.getElementsByClassName("callFunction")[0].addEventListener('click',function(){
    checkYourAge();
})

function checkYourAge(){
    var age, voteable;
    age = Number(document.getElementById('age').value);
    if(isNaN(age)){
        voteable = 'Error! Input does not consist number values';
    } else {
        voteable = (age<18) ? 'You are not an adult!' : 'You are an adult!';
    }
    document.getElementById('output-status').innerHTML = voteable;
}

document.getElementsByClassName("callFunction")[1].addEventListener('click',function(){
    getTheDay();
})

function getTheDay(){
    var todayDate = new Date().getDay(),
    todayDay;
    switch(todayDate){
        case 0:
            todayDay = 'Sunday';
            break;
        case 1:
            todayDay = 'Monday';
            break;
        case 2:
            todayDay = 'Tuesday';
            break;
        case 3:
            todayDay = 'Wednesday';
            break;
        case 4:
            todayDay = 'Thursday';
            break;
        case 5:
            todayDay = 'Friday';
            break;
        case 6:
            todayDay = 'Saturday';
    }
    document.getElementById('out-day').value = todayDay;
}

document.getElementsByClassName("callFunction")[2].addEventListener("click",function(){
    document.getElementById("out-day").value = '';
});

//Continue and break statement:
var outCont = document.getElementsByClassName("get-data");
document.getElementsByClassName("callFunction")[3].addEventListener("click",function(){
    var i, N=100, newListItem;
    var outList = document.createElement("ol");
    outList.id = 'list-out';
    outCont[0].appendChild(outList);
    for(i=0;i<=N;i++){
        if(i == 4){
            continue;
        } else if(i == 29){
            break;
        } else {
            newListItem = document.createElement("li");
            newListItem.innerHTML = i+1 + '-th element';
        }
        outList.appendChild(newListItem);
    }
});

document.getElementsByClassName("callFunction")[4].addEventListener("click",function(){
    var outList = document.getElementById("list-out");
    outCont[0].removeChild(outList);
});

var outCont2 = document.getElementsByClassName("get-data-2");
document.getElementsByClassName("callFunction")[5].addEventListener("click",function(){
    var t=0, RAM_now=0, CPU_now=0, t_max=105, RAM_max=32, CPU_max=4, CPU_mes, RAM_mes, t_mes;
    var hardware = document.createElement("div");
    var hardwareTitle = document.createElement("div");
    var hardwareRow = document.createElement("div");
    var CPU = document.createElement("div");
    var RAM = document.createElement("div");
    var GPU = document.createElement("div");

    hardware.classList.add('hardware-package');
    hardwareTitle.classList.add('hardware-title');
    hardwareRow.classList.add('hardware-row');
    CPU.classList.add('hardware-part','CPU');
    RAM.classList.add('hardware-part','RAM');
    GPU.classList.add('hardware-part','GPU');

    hardware.appendChild(hardwareTitle);
    hardware.appendChild(hardwareRow);
    hardwareRow.appendChild(CPU);
    hardwareRow.appendChild(RAM);
    hardwareRow.appendChild(GPU);

    hardwareTitle.innerHTML = "HARDWARE MONITORING";
    console.log(hardware);
    outCont2[0].appendChild(hardware);

    Monitor: {
        while(RAM_now<RAM_max){
            if(t<=t_max){
                CPU_mes = document.createElement("p");
                RAM_mes = document.createElement("p");
                t_mes = document.createElement("p");

                CPU_mes.innerHTML = 'Speed of CPU = ' + CPU_now;
                RAM_mes.innerHTML = 'Storage of RAM = ' + RAM_now;
                t_mes.innerHTML = 'Temperature of GPU = ' + t;

                CPU.appendChild(CPU_mes);
                RAM.appendChild(RAM_mes);
                GPU.appendChild(t_mes);
                RAM_now+=0.56;
                CPU_now+=0.000924;
                t+=11.4242;
            } else {
                t_mes.classList.toggle('errorMessage',true);
                CPU_mes.classList.toggle('errorMessage',true);
                RAM_mes.classList.toggle('errorMessage',true);
                t_mes.innerHTML = 'WARNING! Temperature of GPU was achieved a critical value = 105.1424C. Computer will shut down!'
                CPU_mes.innerHTML = 'STOP CPU! ERROR #252166F';
                RAM_mes.innerHTML = 'STOP RAM! ERROR #932513F';
                break Monitor;
            }
        }
    }
});

document.getElementsByClassName("callFunction")[6].addEventListener("click",function(){
    var hardware = document.getElementsByClassName("hardware-package");
    outCont2[0].removeChild(hardware[0]);
});

var outResult = document.getElementById("out-type");
var startData = document.getElementsByClassName("start-data-cell-2");
var date = new Date();
var arrayObj = ['John','Steve','Frank','Oliver'];
var simpleObj = {
    producer : 'Audi',
    model : 'R8',
    volume : 4,
    engine : 'V8'
};

document.getElementsByClassName("callFunction")[7].addEventListener("click",function(){
    outResult.value = date.constructor.toString().indexOf("Date") > -1;
    outResult.style.border = '2px solid #ff0000';
});

document.getElementsByClassName("callFunction")[8].addEventListener("click",function(){
    outResult.value = arrayObj.constructor.toString().indexOf("Array") > -1;
    outResult.style.border = '2px solid #ff33cc';
})

document.getElementsByClassName("callFunction")[9].addEventListener("click",function(){
    outResult.value = simpleObj.constructor.toString().indexOf("Object") > -1;
    outResult.style.border = "2px solid #33cc33"
})

//For onloading all functionalities and preferences for body template:
var toomler = true;
function onLoadData(){
    if(toomler !== false){
        var i;
        startData[0].innerHTML = date;
        startData[1].innerHTML += '[';
        for(i in arrayObj){
            startData[1].innerHTML += ' ' + arrayObj[i] + ' ';
        }
        startData[1].innerHTML += ']';
        for(i in simpleObj){
            startData[2].innerHTML += ' { ' + simpleObj[i] + ' } ' + '\n';
        }
        toomler = false;
    }
}

//Create a new mini-app for testing bitwise operations:
var displayToomler = true;
var mainTable = document.getElementsByClassName("bitwise-table");
var tableRow = document.getElementsByClassName("bitwise-table-row");
document.getElementsByClassName("callFunction left-menu")[0].addEventListener("click",function(){
    if(displayToomler === true){
        firstDisplay();
    }
    var x = 75 & 5;
    mainTable[0].childNodes[1].innerHTML = "&AND";
    tableRow[0].childNodes[3].innerHTML = x;
    tableRow[1].childNodes[3].innerHTML = decToBin(x);
});

document.getElementsByClassName("callFunction left-menu")[1].addEventListener("click",function(){
    if(displayToomler === true){
        firstDisplay();
    }
    var x = 75 | 5;
    mainTable[0].childNodes[1].innerHTML = "|OR";
    tableRow[0].childNodes[3].innerHTML = x;
    tableRow[1].childNodes[3].innerHTML = decToBin(x);
});

document.getElementsByClassName("callFunction left-menu")[2].addEventListener("click",function(){
    if(displayToomler === true){
        firstDisplay();
    }
    var x = 75 ^ 5;
    mainTable[0].childNodes[1].innerHTML = "^XOR";
    tableRow[0].childNodes[3].innerHTML = x;
    tableRow[1].childNodes[3].innerHTML = decToBin(x);
});

document.getElementsByClassName("callFunction left-menu")[3].addEventListener("click",function(){
   if(displayToomler === true){
       firstDisplay();
   }
   var x = ~75;
   mainTable[0].childNodes[1].innerHTML = "~NOT";
   tableRow[0].childNodes[3].innerHTML = x;
   tableRow[1].childNodes[3].innerHTML = decToBin(x);
});

document.getElementsByClassName("callFunction left-menu")[4].addEventListener("click",function(){
    if(displayToomler === true){
        firstDisplay();
    }
    var x = 75<<5;
    mainTable[0].childNodes[1].innerHTML = "&#12298LEFT SHIFT";
    tableRow[0].childNodes[3].innerHTML = x;
    tableRow[1].childNodes[3].innerHTML = decToBin(x);
});

document.getElementsByClassName("callFunction left-menu")[5].addEventListener("click",function(){
    if(displayToomler === true){
        firstDisplay();
    }
    var x = 75>>5;
    mainTable[0].childNodes[1].innerHTML = "&#12299RIGHT SHIFT";
    tableRow[0].childNodes[3].innerHTML = x;
    tableRow[1].childNodes[3].innerHTML = decToBin(x);
});

document.getElementsByClassName("callFunction left-menu")[6].addEventListener("click",function(){
    if(displayToomler === true){
        firstDisplay();
    }
    var x = -75>>>5;
    mainTable[0].childNodes[1].innerHTML = "&#12297&#12297&#12297 ZERO FILL RIGHT SHIFT";
    tableRow[0].childNodes[3].innerHTML = x;
    tableRow[0].childNodes[3].innerHTML = decToBin(x);
});

function decToBin(a){
    return (a >>> 0).toString(2);
}

function firstDisplay(){
    tableRow[0].childNodes[1].innerHTML = "Decimal";
    tableRow[1].childNodes[1].innerHTML = "Binary";
    mainTable[0].style.display = "table";
}

//Testing input validation with try...catch and throw statements:
document.getElementsByClassName("callFunction")[17].addEventListener("click",function(){
  var infoWindow = document.getElementById("checking-result");
  var age = document.getElementById("input-age").value;
  infoWindow.innerHTML = "";
  try {
    if(age == "") throw "empty";
    if(isNaN(age)) throw "not a number";
    age = Number(age);
    if(age < 18) throw "too young";
    if(age > 50) throw "too old";
  } catch(err) {
    infoWindow.innerHTML = "Age is " + err;
  }
  infoWindow.style.display = "block";
});

//Testing input validation with try...catch...finally statements:
document.getElementsByClassName("callFunction")[18].addEventListener("click",function(){
  var infoYear = document.getElementById("checking-year");
  var year = document.getElementById("year");
  infoYear.innerHTML = "";
  try {
    if(year.value == "") throw "empty";
    if(isNaN(year.value)) throw "not a number";
    if(parseInt(year.value) < 1901) throw "Oops! Your answer is lower than independence year!";
    if(parseInt(year.value) > 1901) throw "Oops! Your answer is bigger than independence year!";
  } catch(err){
    infoYear.innerHTML = "Answer: " + err;
  } finally {
    year.value = '';
  }
  infoYear.style.display = "block";
});

//Testing all properties name of error object:
var inputError = document.getElementsByClassName("error-prop");
var outputResult = document.getElementsByClassName("out-checking-res");
document.getElementsByClassName("callFunction")[19].addEventListener("click",function(){
  var x = inputError[0].value;
  try {
    x.toPrecision(500);
  } catch(err) {
    outputResult[0].innerHTML = "Haha! You made a mistake!: " + err.name;
  }
  outputResult[0].style.display = "block";
});

document.getElementsByClassName("callFunction")[20].onclick = function(){
  var x = inputError[1].value;
  try {
    x = Math.sqrt(Math.pow((x*y),Math.E));
  } catch(err) {
    outputResult[1].innerHTML = "Haha! Y doesn't exist: " + err.name;
  }
  outputResult[1].style.display = "block";
}

document.getElementsByClassName("callFunction")[21].onclick = function(){
  var x = inputError[2].value;
  try {
    x.toFixed();
  } catch(err){
    outputResult[2].innerHTML = "Haha! Type of your input isn't validated: " + err.name;
  }
  outputResult[2].style.display = "block";
}
