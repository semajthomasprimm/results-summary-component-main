import data from './data.json' assert {type: 'json' };

document.getElementById("reaction").innerText = data[0].category;
document.getElementById("reactionScore").innerText = data[0].score;
document.getElementById("reactionImg").src = data[0].icon;

document.getElementById("memory").innerText = data[1].category;
document.getElementById("memoryScore").innerText = data[1].score;
document.getElementById("memoryImg").src = data[1].icon;

document.getElementById("verbal").innerText = data[2].category;
document.getElementById("verbalScore").innerText = data[2].score;
document.getElementById("verbalImg").src = data[2].icon;

document.getElementById("visual").innerText = data[3].category;
document.getElementById("visualScore").innerText = data[3].score;
document.getElementById("visualImg").src = data[3].icon;
