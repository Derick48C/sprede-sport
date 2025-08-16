let teams = '[{"p":"0","d":"0","pos":"1","g":"0","w":"0","name":"Bournemouth","id":"bou","l":"0","m":"0"},{"p":"0","d":"0","pos":"2","g":"0","w":"0","name":"Arsenal","id":"ars","l":"0","m":"0"},{"p":"0","d":"0","pos":"3","g":"0","w":"0","name":"Aston Villa","id":"ast","l":"0","m":"0"},{"p":"0","d":"0","pos":"4","g":"0","w":"0","name":"Brentford","id":"bre","l":"0","m":"0"},{"p":"0","d":"0","pos":"5","g":"0","w":"0","name":"Brighton","id":"bri","l":"0","m":"0"},{"p":"0","d":"0","pos":"6","g":"0","w":"0","name":"Burnley","id":"bur","l":"0","m":"0"},{"p":"0","d":"0","pos":"7","g":"0","w":"0","name":"Chelsea","id":"che","l":"0","m":"0"},{"p":"0","d":"0","pos":"8","g":"0","w":"0","name":"Crystal Palace","id":"cry","l":"0","m":"0"},{"p":"0","d":"0","pos":"9","g":"0","w":"0","name":"Everton","id":"eve","l":"0","m":"0"},{"p":"0","d":"0","pos":"10","g":"0","w":"0","name":"Fulham","id":"ful","l":"0","m":"0"},{"p":"0","d":"0","pos":"11","g":"0","w":"0","name":"Leeds United","id":"lee","l":"0","m":"0"},{"p":"0","d":"0","pos":"12","g":"0","w":"0","name":"Liverpool","id":"liv","l":"0","m":"0"},{"p":"0","d":"0","pos":"13","g":"0","w":"0","name":"Manchester City","id":"mci","l":"0","m":"0"},{"p":"0","d":"0","pos":"14","g":"0","w":"0","name":"Manchester United","id":"mun","l":"0","m":"0"},{"p":"0","d":"0","pos":"15","g":"0","w":"0","name":"Newcastle","id":"new","l":"0","m":"0"},{"p":"0","d":"0","pos":"16","g":"0","w":"0","name":"Nottingham Forest","id":"not","l":"0","m":"0"},{"p":"0","d":"0","pos":"17","g":"0","w":"0","name":"Sunderland","id":"sun","l":"0","m":"0"},{"p":"0","d":"0","pos":"18","g":"0","w":"0","name":"Tottenham","id":"tot","l":"0","m":"0"},{"p":"0","d":"0","pos":"19","g":"0","w":"0","name":"Westham United","id":"wes","l":"0","m":"0"},{"p":"0","d":"0","pos":"20","g":"0","w":"0","name":"Wolverhampton","id":"wol","l":"0","m":"0"}]';         
let Teams = JSON.parse(teams);
var string = '[{"date":"15-8-2025","awayTeam":"bou","homeTeam":"liv","htG":"4","wtSc":"Semenyo ⚽⚽","time":"22:00hrs","wtg":"2","htSc":"Ekitike ⚽<br>Gakpo ⚽ <br>Chiesa ⚽ <br>M.Salah ⚽","live":"r"},{"date":"16-8-2025","awayTeam":"new","homeTeam":"ast","htG":" ","wtSc":" ","time":"14:30hrs","wtg":" ","htSc":" ","live":"1"},{"date":"16-8-2025","awayTeam":"ful","homeTeam":"bri","htG":" ","wtSc":" ","time":"17:00hrs","wtg":" ","htSc":" ","live":"1"},{"date":"16-8-2025","awayTeam":"wes","homeTeam":"sun","htG":" ","wtSc":" ","time":"17:00hrs","wtg":" ","htSc":" ","live":"1"},{"date":"16-8-2025","awayTeam":"bur","homeTeam":"tot","htG":" ","wtSc":" ","time":"17:00hrs","wtg":" ","htSc":" ","live":"1"},{"date":"16-8-2025","awayTeam":"mci","homeTeam":"wol","htG":" ","wtSc":" ","time":"19:30hrs","wtg":" ","htSc":" ","live":"1"},{"date":"17-8-2025","awayTeam":"cry","homeTeam":"che","htG":" ","wtSc":" ","time":"16:00hrs","wtg":" ","htSc":" ","live":"1"},{"date":"17-8-2025","awayTeam":"bre","homeTeam":"not","htG":" ","wtSc":" ","time":"16:00hrs","wtg":" ","htSc":" ","live":"1"},{"date":"17-8-2025","awayTeam":"ars","homeTeam":"mun","htG":" ","wtSc":" ","time":"18:30hrs","wtg":" ","htSc":" ","live":"1"},{"date":"18-8-2025","awayTeam":"eve","homeTeam":"lee","htG":" ","wtSc":" ","time":"22:00hrs","wtg":" ","htSc":" ","live":"1"}]';
var weekOne = JSON.parse(string);
var fixtures = weekOne;

function getFullname(id) {
  let full;
  Teams.forEach(function (team) {
    if (team.id == id) full = team.name;
  })
  return full;
}
//alert(getFullname('ars'));
let htmlf = []; let htmlLive = [];
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
  else if (bool == 0) {
    let elem = `<div class="match-view live">
      <div class="time-view liveTime">LIVE - 72'</div>
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
    htmlLive.push(elem);
    //console.log(htmlLive);
  }
  else  {
    let elem = `<div class="match-view result">
      <div class="time-view">Full Time</div>
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
    htmlLive.push(elem);
    //console.log(htmlLive);
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
//alert(htmlf.join(''));

window.onload = function () {
  document.getElementById('fixView').innerHTML = htmlf.join('');
}

function live() {
  document.getElementById('liveView').innerHTML = htmlLive.join('');
  document.getElementById('fixView').innerHTML = ``;
}

function fixed() {
  document.getElementById('liveView').innerHTML = '';
  document.getElementById('fixView').innerHTML =  htmlf.join('');
}
