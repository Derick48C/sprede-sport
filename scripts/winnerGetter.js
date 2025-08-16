let teams = '[{"p":"0","d":"0","pos":"1","g":"0","w":"0","name":"AFC Bournemouth","id":"bou","l":"0","m":"0"},{"p":"0","d":"0","pos":"2","g":"0","w":"0","name":"Arsenal","id":"ars","l":"0","m":"0"},{"p":"0","d":"0","pos":"3","g":"0","w":"0","name":"Aston Villa","id":"ast","l":"0","m":"0"},{"p":"0","d":"0","pos":"4","g":"0","w":"0","name":"Brentford","id":"bre","l":"0","m":"0"},{"p":"0","d":"0","pos":"5","g":"0","w":"0","name":"Brighton","id":"bri","l":"0","m":"0"},{"p":"0","d":"0","pos":"6","g":"0","w":"0","name":"Burnley","id":"bur","l":"0","m":"0"},{"p":"0","d":"0","pos":"7","g":"0","w":"0","name":"Chelsea","id":"che","l":"0","m":"0"},{"p":"0","d":"0","pos":"8","g":"0","w":"0","name":"Crystal Palace","id":"cry","l":"0","m":"0"},{"p":"0","d":"0","pos":"9","g":"0","w":"0","name":"Everton","id":"eve","l":"0","m":"0"},{"p":"0","d":"0","pos":"10","g":"0","w":"0","name":"Fulham","id":"ful","l":"0","m":"0"},{"p":"0","d":"0","pos":"11","g":"0","w":"0","name":"Leeds United","id":"lee","l":"0","m":"0"},{"p":"0","d":"0","pos":"12","g":"0","w":"0","name":"Liverpool","id":"liv","l":"0","m":"0"},{"p":"0","d":"0","pos":"13","g":"0","w":"0","name":"Manchester City","id":"mci","l":"0","m":"0"},{"p":"0","d":"0","pos":"14","g":"0","w":"0","name":"Manchester United","id":"mun","l":"0","m":"0"},{"p":"0","d":"0","pos":"15","g":"0","w":"0","name":"Newcastle","id":"new","l":"0","m":"0"},{"p":"0","d":"0","pos":"16","g":"0","w":"0","name":"Nottingham Forest","id":"not","l":"0","m":"0"},{"p":"0","d":"0","pos":"17","g":"0","w":"0","name":"Sunderland","id":"sun","l":"0","m":"0"},{"p":"0","d":"0","pos":"18","g":"0","w":"0","name":"Tottenham","id":"tot","l":"0","m":"0"},{"p":"0","d":"0","pos":"19","g":"0","w":"0","name":"Westham United","id":"wes","l":"0","m":"0"},{"p":"0","d":"0","pos":"20","g":"0","w":"0","name":"Wolverhampton","id":"wol","l":"0","m":"0"}]';         
let Teams = JSON.parse(teams);/*
let string = '[{"date":"15-8-2025","awayTeam":"bou","homeTeam":"liv","htG":"4","wtSc":"Eitike ⚽⚽","time":"22:00hrs","wtg":"2","htSc":"Semenyo ⚽⚽","live":"0"},{"date":"16-8-2025","awayTeam":"new","homeTeam":"ast","htG":" ","wtSc":" ","time":"14:30hrs","wtg":" ","htSc":" ","live":"1"},{"date":"16-8-2025","awayTeam":"ful","homeTeam":"bri","htG":" ","wtSc":" ","time":"17:00hrs","wtg":" ","htSc":" ","live":"1"},{"date":"16-8-2025","awayTeam":"wes","homeTeam":"sun","htG":" ","wtSc":" ","time":"17:00hrs","wtg":" ","htSc":" ","live":"1"},{"date":"16-8-2025","awayTeam":"bur","homeTeam":"tot","htG":" ","wtSc":" ","time":"17:00hrs","wtg":" ","htSc":" ","live":"1"},{"date":"16-8-2025","awayTeam":"mci","homeTeam":"wol","htG":" ","wtSc":" ","time":"19:30hrs","wtg":" ","htSc":" ","live":"1"},{"date":"17-8-2025","awayTeam":"cry","homeTeam":"che","htG":" ","wtSc":" ","time":"16:00hrs","wtg":" ","htSc":" ","live":"1"},{"date":"17-8-2025","awayTeam":"bre","homeTeam":"not","htG":" ","wtSc":" ","time":"16:00hrs","wtg":" ","htSc":" ","live":"1"},{"date":"17-8-2025","awayTeam":"ars","homeTeam":"mun","htG":" ","wtSc":" ","time":"18:30hrs","wtg":" ","htSc":" ","live":"1"},{"date":"18-8-2025","awayTeam":"eve","homeTeam":"lee","htG":" ","wtSc":" ","time":"22:00hrs","wtg":" ","htSc":" ","live":"1"}]';
let weekOne = JSON.parse(string);*/
var string = '[{"date":"15-8-2025","awayTeam":"bou","homeTeam":"liv","htG":"4","wtSc":"Semenyo ⚽⚽","time":"22:00hrs","wtg":"2","htSc":"Ekitike ⚽<br>Gakpo ⚽ <br>Chiesa ⚽ <br>M.Salah ⚽","live":"r"},{"date":"16-8-2025","awayTeam":"new","homeTeam":"ast","htG":" ","wtSc":" ","time":"14:30hrs","wtg":" ","htSc":" ","live":"r"},{"date":"16-8-2025","awayTeam":"ful","homeTeam":"bri","htG":" ","wtSc":" ","time":"17:00hrs","wtg":" ","htSc":" ","live":"r"},{"date":"16-8-2025","awayTeam":"wes","homeTeam":"sun","htG":"3","wtSc":" ","time":"17:00hrs","wtg":"0","htSc":" ","live":"r"},{"date":"16-8-2025","awayTeam":"bur","homeTeam":"tot","htG":"3","wtSc":" ","time":"17:00hrs","wtg":"0","htSc":" ","live":"r"},{"date":"16-8-2025","awayTeam":"mci","homeTeam":"wol","htG":" ","wtSc":" ","time":"19:30hrs","wtg":" ","htSc":" ","live":"1"},{"date":"17-8-2025","awayTeam":"cry","homeTeam":"che","htG":" ","wtSc":" ","time":"16:00hrs","wtg":" ","htSc":" ","live":"1"},{"date":"17-8-2025","awayTeam":"bre","homeTeam":"not","htG":" ","wtSc":" ","time":"16:00hrs","wtg":" ","htSc":" ","live":"1"},{"date":"17-8-2025","awayTeam":"ars","homeTeam":"mun","htG":" ","wtSc":" ","time":"18:30hrs","wtg":" ","htSc":" ","live":"1"},{"date":"18-8-2025","awayTeam":"eve","homeTeam":"lee","htG":" ","wtSc":" ","time":"22:00hrs","wtg":" ","htSc":" ","live":"1"}]';
var weekOne = JSON.parse(string);

var mtch;
function liveMatch(id1, id2, gs1, gs2) {
if (gs1 == gs2) return console.log("Match is A Draw No Winner");

function getDet(id, gs) {
  let arr;
  for (let v of Teams ) {
    if (v.id == id) {
      arr = {id: id, mp: v.m, w:v.w, d:v.d, l:v.l, g:v.g, p:v.p, gs:gs, pos: v.pos, name: v.name};
    }
  }

  return arr;
}
  let mtchOne = getDet(id1, gs1) 
  let mtchTwo = getDet(id2, gs2)
  mtch = [mtchOne, mtchTwo]
}



/*
weekOne.forEach(function (team) {
});
*/


//alert(parseInt(" "))

let matches = []

for (let team of weekOne) {
  if (team.live != "1") {
   matches.push([team.homeTeam , team.awayTeam, team.htG, team.wtg]);
  }
}

for (let v of matches) {

  if (parseInt(v[2]) != parseInt(v[3])) {
  // 
  console.log("Game Proceeds to Next Stage Mr Kymz")
  liveMatch(v[0], v[1], v[2], v[3]);
  }
  else {/*console.log("This " + v[0] + " vs " +
  v[1] + " is a draw game of " + v[2] + " " +
  v[3]);*/
  let obj1, obj2;
    for (let val of Teams) {
      if (val.id == v[0]) {
        obj1 = {
            name: val.name, id: val.id, p: parseInt(val.p) + 1,
            g: parseInt(val.g) + parseInt(v[2]), m: parseInt(val.m) + 1,
            w: val.w, l: val.l, d : parseInt(val.d) + 1,
            
        }
        obj2 = {
            name: val.name, id: val.id, p: parseInt(val.p) + 1,
            g: parseInt(val.g) + parseInt(v[3]), m: parseInt(val.m) + 1,
            w: val.w, l: val.l, d : parseInt(val.d) + 1,
            pos: val.pos
        }
      }
    }
  //rmvAdd(obj1); rmvAdd(obj2);
    console.log("Draws updated")
  }
}
//liveMatch(Teams[1].id, Teams[2].id, 2, 3);

//live match btwn Liv && Bou
//Live mtch scores Liv = 2 , Bou = 0
//get The winner
function winnerBtwn(id1, id2, option) {
  let id1G, id2G;
  mtch.forEach(function (team) {
    if (team.id == id1) id1G =parseInt(team.gs);
    else if (team.id == id2) id2G = parseInt(team.gs);
  });
  let goals = [id1G, id2G];
  let getwinner = (id1G > id2G)? id1G : id2G;
  let lose = (getwinner == id1G)? id2G : id1G;
  //console.log(getwinner)//ascending order
  let winner = null; let loser = null;
  mtch.forEach(function (team) {
    if (team.gs == getwinner) winner = team.id;
    else if (team.gs == lose) loser = team.id;
  });
  if (option == "lose") return loser;
  else return winner;
}

//liveMatch(Teams[0].id, Teams[11].id, 2, 3)
let winner = winnerBtwn(mtch[0].id, mtch[1].id, "win");
let losing = winnerBtwn(mtch[0].id, mtch[1].id, "lose");

//console.log(winner)
//Winner is Liv//

function update(id, option) {
  if (option == "lose") {
    let g, p, w, d, l, mp;
    let wIndex, lIndex;
    
    mtch.forEach(function (team) {
      if (team.id == id) {
        lIndex = mtch.indexOf(team);
      }
    });
    wIndex = (lIndex == 1)? 0 : 1;
    g = (parseInt(mtch[lIndex].g) + parseInt(mtch[lIndex].gs)) - parseInt(mtch[wIndex].gs);
    p = mtch[lIndex].p;
    w = mtch[lIndex].w;
    d = mtch[lIndex].d;
    l = parseInt(mtch[lIndex].l) + 1;
    mp = parseInt(mtch[lIndex].mp) + 1;
    name = mtch[lIndex].name;
    pos = mtch[lIndex].pos;
    
    let obj = {
      id : id, g: g, w: w, d: d, l: l, p : p, m: mp, name: name, pos: pos
    }
    return obj;
  }
  else {
    
    let g, p, w, d, l, mp;
    let wIndex, lIndex;
    
    mtch.forEach(function (team) {
      if (team.id == id) {
        wIndex = mtch.indexOf(team);
      }
    });
    lIndex = (wIndex == 0)? 1 : 0;
    g = (parseInt(mtch[wIndex].g) + parseInt(mtch[wIndex].gs)) - parseInt(mtch[lIndex].gs);
    p = parseInt(mtch[wIndex].p) + 3;
    w = parseInt(mtch[wIndex].w) + 1;
    d = mtch[wIndex].d;
    l = mtch[wIndex].l;
    mp = parseInt(mtch[wIndex].mp) + 1;
    name = mtch[wIndex].name;
    pos = mtch[wIndex].pos;
    
    let obj = {
      id : id, g: g, w: w, d: d, l: l, p : p, m: mp, name: name, pos: pos
    }
    return obj;
  }
}

//let obj = update(winner, "win");

function rmvAdd(details) {
  let index;
  for (let t of Teams) {
    if (t == details.id) {
      index = Teams.indexOf(t);
    }
  }
  //console.log("Crt Teams = " + Teams.length);
  Teams.splice(index, 1);
 // console.log("Crt Teams = " + Teams.length);
  Teams.push(details);
  //console.log("Crt Teams = " + Teams.length);
 /* Teams.forEach((team) => console.log(team.g))*/
}

rmvAdd(update(winner, "win"));
rmvAdd(update(losing, "lose"));

function sorted(object) {
  object.sort((a, b) => {
    if (b.p === a.p) {
      return b.g - a.g;
    }
    return b.p - a.p;
  });

  object.forEach((team, index) => {
    team.pos =  index + 1;
  });

 return object;
}
Teams = sorted(Teams);
//Teams.forEach((y) => console.log(y.d));
var html = ["<table><tr><th>Pos.</th><th>Team</th><th>MP</th><th>GD</th><th>W</th><th>D</th><th>L</th><th>PTS</th></tr>"];
console.log("Creating Table...");
function createTable(list) {
  let elem = '';
  for (let team of list) {
    
    elem += `${String.fromCodePoint(10)}<tr><td>${team.pos}.</td><td>${team.name}</td><td>${team.m}</td><td>${team.g}<td>${team.w}</td><td>${team.d}</td><td>${team.l}</td><td>${team.p}</td></tr>`;
  }
  elem += "</table>";
  html.push(elem);
}
createTable(Teams);


console.log("Creating Table...Done");


var fixtures = weekOne;

function getFullname(id) {
  let full;
  Teams.forEach(function (team) {
    if (team.id == id) full = team.name;
  })
  return full;
}
//alert(getFullname('ars'));
var htmlf = [];
function onLive(bool, ht, wt, htG, wtG, htSc, wtSc, date, time) {
  
  if (bool == 1) {
    let elem = `<div class="match-view">
      <div class="time-view">${time}<br><br>${date}</div>
      <div class="team-view">
        <div class="team-name">${ht}</div>
        <div class="team-goals"></div>
        <div class="team-scorers"></div>
      </div><hr>
      <div class="team-view">
      <div class="team-name">${wt}</div>
        <div class="team-goals"></div>
        <div class="team-scorers"></div>
      </div>
    </div>`;
    htmlf.push(elem);
  }
  else {
    let elem = `<div class="match-view live">
      <div class="time-view liveTime">LIVE </div>
      <div class="team-view">
        <div class="team-name">${ht}</div>
        <div class="team-goals">${htG}</div>
        <div class="team-scorers">${htSc}</div>
      </div><hr>
      <div class="team-view">
      <div class="team-name">${wt}</div>
        <div class="team-goals">${wtG}</div>
        <div class="team-scorers">${wtSc}</div>
      </div>
    </div>`;
    htmlf.push(elem);
  }
 
} 

function element(value) {
  let arr = value.split(',');
  let newArr = '';
  for (let value of arr) {
    newArr += `<p>${value}</p>`;
  }
  return newArr;
}

function createFix() {
  for (let fix of weekOne) {
    onLive(fix.live, getFullname(`${fix.homeTeam}`), getFullname(`${fix.awayTeam}`), fix.htG, fix.wtg, fix.htSc, fix.wtSc, fix.date, fix.time)
  }
  //alert()
}

createFix();
console.log(htmlf.join(''));

