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

document.getElementsByClassName("tablinks")[7].addEventListener('click', function() {
    openNewTheme(event, 7);
});

document.getElementsByClassName("tablinks")[8].addEventListener('click', function() {
    openNewTheme(event, 8);
    rocketObj();
});

document.getElementsByClassName("tablinks")[9].addEventListener('click', function() {
    openNewTheme(event, 9);
    rocketObj();
});

document.getElementsByClassName("tablinks")[10].addEventListener('click', function() {
    openNewTheme(event, 10);
});

document.getElementsByClassName("tablinks")[11].addEventListener('click', function() {
    openNewTheme(event, 11);
})

document.getElementsByClassName("tablinks")[12].onclick = function() {
    openNewTheme(event, 12);
}

document.getElementsByClassName("tablinks")[13].onclick = function() {
    openNewTheme(event, 13);
}

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

document.getElementsByClassName("callFunction")[21].onclick = function() {
  var x = inputError[2].value;
  try {
    x.toFixed();
  } catch(err){
    outputResult[2].innerHTML = "Haha! Type of your input isn't validated: " + err.name;
  }
  outputResult[2].style.display = "block";
}

//Hoisting function:
var outRes = document.getElementsByClassName("out-result-hoisting");
var n = document.getElementById("integral-calc");
document.getElementsByClassName("callFunction")[22].onclick = function() {
  var toomler = true;
  try {
    if(n.value == '') throw 'Input is empty. Please, try again!';
    if(isNaN(n.value)) throw 'Input is not a number. Please try gain!';
  } catch(err) {
    outRes[0].innerHTML = err;
    toomler = false;
  }
  if(toomler == true){
    calcIntegral();
  }
  outRes[0].style.display = "block";
}

function calcIntegral(){
  var nth = document.createElement("sup");
  var m = n.value;
  m++;
  nth.innerHTML = m;
  outRes[0].innerHTML = '=x';
  outRes[0].appendChild(nth);
  outRes[0].innerHTML += '/' + m + '+ln|x| + C';
}

//Checking associative arrays with named indexes:
var conOut = document.getElementsByClassName("console"),
    tesla = [2015, 'Crossover', 'Electric', '259hp'],
    chevrolet = [],
    toom = [];

for(var i=0; i < 6; i++) {
    toom.push(true);
}

document.getElementsByClassName("actions-btn")[0].onclick = function() {
     if(toom[0] == true) {
         conOut[0].innerHTML = ' = ' + tesla.length;
         toom[0] = false;
     } else {
         conOut[0].innerHTML = 'Output';
         toom[0] = true;
     }
}

document.getElementsByClassName("actions-btn")[1].onclick = function() {
    if(toom[1] == true) {
        conOut[1].innerHTML = tesla[0];
        toom[1] = false;
    } else {
        conOut[1].innerHTML = 'Output';
        toom[1] = true;
    }
}

document.getElementsByClassName("actions-btn")[2].onclick = function() {
    if(toom[2] == true) {
        conOut[2].innerHTML = tesla[2];
        toom[2] = false;
    } else {
        conOut[2].innerHTML = 'Output';
        toom[2] = true;
    }
}

document.getElementsByClassName("actions-btn")[3].onclick = function() {
    if(toom[3] == true) {
        conOut[3].innerHTML = chevrolet.length;
        toom[3] = false;
    } else {
        conOut[3].innerHTML = 'Output';
        toom[3] = true;
    }
}

document.getElementsByClassName("actions-btn")[4].onclick = function() {
    if(toom[4] == true) {
        conOut[4].innerHTML = chevrolet[1];it
        toom[4] = false;
    } else {
        conOut[4].innerHTML = 'Output';
        toom[4] = true;
    }
}

document.getElementsByClassName("actions-btn")[5].onclick = function() {
    if(toom[5] == true) {
        conOut[5].innerHTML = chevrolet[2];
        toom[5] = false;
    } else {
        conOut[5].innerHTML = 'Output';
        toom[5] = true;
    }
}
var rocket;
function rocketObj() {
    rocket = {
        'name' : 'Space Launch System (SLS)',
        'function' : 'Launch vehicle',
        'country' : 'USA',
        'manufacturer' : 'Boeing',
        'cost' : '$35 biilion',
        'cost_per_launch' : '$500 million',
        'payload' : '150 tonn'
    };

    var inputTable = document.getElementById("ls-input-table");
    var i, j=0;

    for(i in rocket) {
        inputTable.rows[j].cells[1].innerHTML = rocket[i];
        j++;
    }
}

var lsBtn = document.getElementsByClassName("ls-btn"),
    statusWindow = document.getElementById("ls-status"),
    myJSON,
    rocketJSON,
    simpleRocket,
    toomler = 0;

lsBtn[0].onclick = function() {
    if(toomler == 0) {
        myJSON = JSON.stringify(rocket);
        localStorage.setItem('rocketJSON', myJSON);
        statusWindow.style.backgroundColor = "#ecdb54";
        statusWindow.style.color = "#000000";
        statusWindow.innerHTML = "Rocket Object was saved to the Local Storage";
        toomler++;
    }
}

var outputTable = document.getElementById("ls-output-table");
lsBtn[1].onclick = function() {
    if(toomler == 1) {
        var i, j=0;
        rocketJSON = localStorage.getItem("rocketJSON");
        simpleRocket = JSON.parse(rocketJSON);
        for(i in simpleRocket) {
            outputTable.rows[j].cells[1].innerHTML = simpleRocket[i];
            j++;
        }
        outputTable.style.display = "block";
        statusWindow.style.backgroundColor = "#00a591";
        statusWindow.style.color = "#ffffff";
        statusWindow.innerHTML = "Rocket Object was output from Local Storage";
        toomler++;
    }
}

lsBtn[2].onclick = function() {
    if(toomler == 2) {
        var i;
        for(i = 0; i < outputTable.rows.length; i++) {
            outputTable.rows[i].cells[1].innerHTML = '';
        }
        outputTable.style.display = "none";
        statusWindow.style.backgroundColor = "#e94b3c";
        statusWindow.style.color = "#ffffff";
        statusWindow.innerHTML = "Local Storage is empty!";
        toomler = 0;
    }
}

//JSON - Elements:
var elBtn = document.getElementsByClassName("json-actions"),
    elConsole = document.getElementsByClassName("json-console"),
    notify = document.getElementById("notification"),
    uranus,
    toom2 = 0;

elBtn[0].onclick = function() {
    if(toom2 == 0) {
        //Identify JSON:
        uranus = {
            "Image" : "https://stardate.org/sites/default/files/images/gallery/neptune_blue.jpg",
            "Planet" : "Uranus",
            "Orbital_period" : "84 yr",
            "Orbital_speed" : "6.8 km/s",
            "Discovered_by" : "Wiliam Herschel",
            "Atmosphere" : {
                "Hydrogen" : "83.3%",
                "Helium" : "15.3%",
                "Methane" : "2.3%",
                "Deuteride" : "0.009%"
            },
            "Mass" : "8.6810 x 10^25",
            "Polar_radius" : "24973km"
        };
        var progressBar = document.createElement("div"),
            progressBarCtn = document.createElement("div"),
            progressW = 0;

        progressBar.setAttribute("id","progressbar-lvl");
        progressBarCtn.setAttribute("id","progressbar");
        progressBarCtn.appendChild(progressBar);
        elConsole[0].appendChild(progressBarCtn);

        var progressId = setInterval(level, 100);
        elConsole[0].classList.toggle('after-out', false);

        function level() {
            if(progressW == 100) {
                clearInterval(progressId);
                extractJSON();
            } else {
                progressW++;
                progressBar.style.width = progressW + "%";
                progressBarCtn.style.display = "block";
            }
        }
    }
}

function extractJSON() {
    var key,
        progressBarCtn = document.getElementById("progressbar");
    notify.innerHTML = '';
    elConsole[0].removeChild(progressBarCtn);
    elConsole[0].classList.toggle('after-out', true);
    for(key in uranus) {
        notify.innerHTML += key + ' : ' + uranus[key] + '\n';
    }
    toom2++;
}

elBtn[1].onclick = function() {
    var key,
        progressBarCtn = document.getElementById("progressbar");
    if(toom2 == 1) {
        for(key in uranus) {
            delete uranus[key];
        }
        notify.innerHTML = "Please, click the button above for starting implementing actions...";
        toom2--;
    }
}

//Converting received objects from server to the default JS object:
var toom3 = true;
document.getElementsByClassName("converted-obj-btn")[0].onclick = function() {
    if(toom3 == true) {
        var serverObj = '{"Full_name" : "Vladimir Pavlov", "Age" : 21, "Birth_date" : "05.03.1996", "Country_of_birth" : "Ukraine", "Homeland" : "Poland", "Education" : "Columbia University - Computer Science", "Place_of_work" : "Nitro Digital Agency"}';
        var infoCitizen = JSON.parse(serverObj);
        var outConsole = document.getElementsByClassName("converted-obj-out");
        var key;

        for(key in infoCitizen) {
            outConsole[1].innerHTML += key + ' : ' + infoCitizen[key] + ',\n';
        }
        outConsole[1].style.textAlign = "left";
        toom3 = false;
    }
}

var toom4 = true;
document.getElementsByClassName("converted-date-btn")[0].onclick = function() {
    if(toom4 == true) {
        var serverObj = '{"Buyer" : "Hendrew Timmermans", "Company" : "Hendrew & Partners", "Price" : 130500, "Tax1" : 0.56, "Tax2" : 1.44, "VAT" : 6.55, "Transaction_date" : "2018-05-23", "Tax_summary" : "function(){return this.Tax1 + this.Tax2 + this.VAT", "Final_price" : "function(){var percent = (this.Price * this.Tax_summary) / 100; return this.Price - percent;}"}';
        //Using reviver function for for checking each values:
        var eCard = JSON.parse(serverObj, function(key, value) {
            if(key == "Transaction_date") {
                return new Date(value);
            } else {
                return value;
            }
        });
        //Using eval() function for converting functions from strings:
        /*eCard.Tax_summary = eval("(" + eCard.Tax_summary + ")");
        eCard.Final_price = eval("(" + eCard.Final_price + ")");*/
        var outConsole = document.getElementsByClassName("converted-date-out");
        var i;

        for(i in eCard) {
            outConsole[1].innerHTML += i + ' : ' + eCard[i] + ',\n';
        }
        toom4 = false;
    }
}

//Converting simple JS-object to the object appropriated for the web-server:
var toom5 = true;
document.getElementsByClassName("converted-server-btn")[0].onclick = function() {
    if(toom5 == true) {
        var circuit = {
            "I1" : "2.539A",
            "I2" : "1.245A",
            "U1" : "360V",
            "U2" : "1199V",
            "L1" : "120H",
            "C1" : "5F",
            "tswitch" : new Date(),
            "C" : function() {
                return Er * E0 * (A/d);
            },
            "L" : function() {
                return u0 / (4 * Math.PI);
            }
        };

        circuit.C = circuit.C.toString();
        circuit.L = circuit.L.toString();
        var outConsole = document.getElementsByClassName("converted-server-out");
        var i;
        var circuitJSON = JSON.stringify(circuit);

        for(i in circuitJSON) {
            outConsole[1].innerHTML = circuitJSON;
        }
        toom5 = false;
    }
}

//Recieving data from php web-server:
var toom6 = true;
document.getElementsByClassName("recieve-ser-data")[0].onclick = function() {
    if(toom6 == true) {
        var consoleOut = document.getElementsByClassName("console-out")[0].children,
            xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200) {
            var myObj = JSON.parse(this.responseText),
                x;
            for(x in myObj) {
                consoleOut[1].innerHTML += x + ' : ' + myObj[x] + ',\n';
            }
        }
    };
    xmlhttp.open("GET", "index.php", true);
    xmlhttp.send();
    toom6 = false;
    }
}

//Recieving data from PHP-server using POST-method:
var toom7 = true;
document.getElementsByClassName("recieve-ser-data")[1].onclick = function() {
    if(toom7 == true) {
        var consoleOut = document.getElementsByClassName("console-out")[1].children,
            obj = {
                "table" : "products",
                "limit" : 10
            },
            xmlhttp = new XMLHttpRequest(),
            dbParam = JSON.stringify(obj),
            myObj,
            x;
        xmlhttp.onreadystatechange = function() {
            if(this.readyState == 4 && this.status == 200) {
                myObj = JSON.parse(this.responseText);
                for(x in myObj) {
                    consoleOut[1].innerHTML += x + ' : ' + myObj[x] + ',\n';
                }
            }
        };
        xmlhttp.open("POST", "products.php", true);
        xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xmlhttp.send("x=" + dbParam);
        toom7 = false;
    }
}

//Recieving data from server as a dynamic table:
var clothesJSON;
document.getElementById("clothes").onchange = function() {
    createClothesJSON(this.value);
    var clothesOut = document.getElementsByClassName("clothes-output"),
        x, txt = '';
    if(clothesJSON !== '') {
        txt += '<table class="clothes-obj">';
        for(x in clothesJSON) {
            txt += "<tr><td>" + x + "</td>" + "<td>" + clothesJSON[x] + "</td></tr>";
        }
        txt += "</table>";
        clothesOut[0].innerHTML = txt;
    } else {
        clothesOut[0].innerHTML = '';
    }
}

function createClothesJSON(check) {
    switch(check) {
        case 'jackets':
            clothesJSON = {
                "Lyle & Scott Fitness Foulkes Quilted Gilet in Black" : "$100.00",
                "ASOS Muscle Fit Track Jacket In Black" : "$20.00",
                "Nicce London Overhead Jacket In Camo" : "$55.00",
                "Liquor N Poker Oversized Denim Jacket Mustard" : "$45.00"
            };
            break;
        case 'overdress':
            clothesJSON = {
                "Adidas Originals adicolor" : "$70.00",
                "Nike Club Swoosh Crew Sweatshirt In Black 804340-010" : "$38.00",
                "ASOS Hoodie In Charcoal Marl" : "$18.00",
                "Fred Perry Crew Neck Sweat In Grey Marl" : "$85.00"
            };
            break;
        case 'underwear':
            clothesJSON = {
                "Polo Ralph Lauren Regular Fit Chino Shorts in Beige" : "$85.00",
                "Nike Jersey Shorts With Large Logo In Black 843520-010" : "$33.00",
                "New Look SPORT Running Shorts In Dark Grey" : "$9.99",
                "Wrangler Peter Max Colour Block Short" : "$140.00"
            };
            break;
        case 'shoes':
            clothesJSON = {
                "Nike Air Force 1 '07 Trainers In White 315122-111" : "$75.00",
                "Nike Air Max 95 Premium Trainers In Black 538416-012" : "$125.00",
                "Nike Air Vapormax Plus Trainers In Blue 924453-401" : "$170.00",
                "Base London Turner Leather Brogue Shoes in Tan" : "$75.00"
            };
            break;
        case 'none':
            clothesJSON = '';
            break;
    }
}

//ES6 - overview all features
var toom8 = true,
    consoleOut = document.getElementsByClassName("es6-out");
document.getElementsByClassName("es6-btn")[0].onclick = function() {
    if(toom8 == true) {
        var a = [4, 6, 8],
            b = [0.246, 0.746, 0.986];
        for(let i = 0; i < a.length; i++) {
            let x = a[i];
        }
        for (let i = 0; i < b.length; i++) {
            let y = b[i];
        }
        let callbacks = []
        for(let i = 0; i <=2; i++) {
            callbacks[i] = function (){
                return i * 2;
            }
        }
        consoleOut[0].innerHTML = "Output: ";
        for(let i in callbacks) {
            consoleOut[0].innerHTML += callbacks[i]() + ',\n';
        }
        consoleOut[0].style.display = "block";
        toom8 = false;
    }
}

var toom9 = true;
document.getElementsByClassName("es6-btn")[1].onclick = function() {
    if(toom9 == true) {
        {
            function first() {
                return "First function is here!";
            }
            consoleOut[1].innerHTML = "Output : <br/>" + first() + "<br/>";
            {
                function second() {
                    return "    First internal function from first is here!";
                }
                consoleOut[1].innerHTML += second() + "<br/>";
                {
                    function third() {
                        return "        First internal function from first & first external is here!";
                    }
                    consoleOut[1].innerHTML += third() + "<br/>";
                } 
            }
            consoleOut[1].innerHTML += first() + "<br/>";
        }
        consoleOut[1].style.display = "block";
        toom9 = false;
    }
}

