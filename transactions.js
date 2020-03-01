var table = document.getElementById("table")
var row = table.insertRow(-1);
columnCount=6;
console.log("table")
for (var j = 0; j < columnCount; j++) {
    var cell = row.insertCell(-1);
    cell.innerHTML = "HELLO";
}