var golds = 5000000
var x=1
var getgps=1

var minion = [
    {id:0, name:"computeur of grand-ma", cost: 10, gps:0.1, owned: 0},
    {id:1, name:"gamer computeur", cost: 100, gps:1, owned: 0},
    {id:2, name:"the holy antminer", cost: 500, gps:5, owned: 0}
];


function addGold(x) {
    (golds = golds + x)                                     //ajt les golds
}

function displayGolds() {
    document.getElementById("gold").innerHTML = golds       //affiche les golds
    document.getElementById("gps").innerHTML = getgps       //affiche le gps
    var m0 = minion[0].cost;
    var m1 = minion[1].cost;
    var m2 = minion[2].cost;
    document.getElementById("prix0").innerHTML = m0
    document.getElementById("prix1").innerHTML = m1
    document.getElementById("prix2").innerHTML = m2
}

function gps() {
    setInterval(function(){  
        golds = parseInt(golds) + getgps                   //Le gps qui ajoute des golds par secondes
        document.getElementById("gold").innerHTML = golds
    }, 1000);    
}

function buyminion(id){
    if (golds > minion[id].cost) {                          //condition pour acheter
                //rend le minion 1.15* plus chere
        (golds = golds - minion[id].cost);                  //perte des gold
        (minion[id].owned = minion[id].owned + 1);          //ajout de 1 minion a owned
        getgps = (getgps + minion[id].gps);                 //ajout du gps*
        document.getElementById("gps").innerHTML = getgps   //affiche le gps
        
    }
    else {
        alert("crédit insufisant");                       //si gold insuffisant à changer
    }
    (minion[id].cost = minion[id].cost * 1.15); 
    var m0 = minion[0].cost;
    var m1 = minion[1].cost;
    var m2 = minion[2].cost;
    document.getElementById("prix0").innerHTML = m0
    document.getElementById("prix1").innerHTML = m1
    document.getElementById("prix2").innerHTML = m2

    
    
}

function double() {
    var u = (minion[0].owned + minion[1].owned + minion[2].owned);//minion total
    var y = (u % 10);// est-il divisible par 50 doit retourner nombre entier 
    if (y == 0){
        x = (x * 2);
        alert("Votre valeur de click a double!"); 

        
    }

    
}

function doublegps() {
//var i = 1
    for (var i = 0; i <=3 ; i++) {
        
        if (minion[i].owned == 5 || minion[i].owned == 50 || minion[i].owned == 100 || minion[i].owned == 250 || minion[i].owned == 1000) {
        
    
            var totalowned = minion[i].owned
            var gpsowned = minion[i].gps
            var totalgps = (gpsowned * totalowned) 
            getgps = (getgps - totalgps)
            totalgps = (totalgps * 2)
            getgps = (totalgps + getgps)
    
            document.getElementById("gps1").innerHTML = getgps
            document.getElementById("gps2").innerHTML = totalgps
        }
    }
}