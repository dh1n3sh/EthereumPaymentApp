var table = document.getElementById("table")
// var row = table.insertRow(-1);

columnCount = 3;
console.log("table")
web3 = new Web3(web3.currentProvider);

contract = new web3.eth.Contract(abi, address);
var holder;
web3.eth.getAccounts().then(function (acc) {
    console.log(acc);
    $('#address').html(acc[0]);
    contract.methods.getBalance().call({ from: acc[0] }).then(
        function (bal) {
            $('#balance').html(bal)
        }
    );
});
function setTable(c, acc) {
    if (c == -1) return;
    contract.methods.getTransaction(c).call({ from: acc[0] }).then(
        function (t) {
            var row = table.insertRow(-1);
            console.log(t, c);
            // trans=t;
            for (var j = 0; j < columnCount; j++) {
                var cell = row.insertCell(-1);
                cell.innerHTML = t[j];
                if (t[j] == "DEBIT" || t[j + 1] == "DEBIT")
                    cell.style = "color:red"
                // row.style ="background-color:red"
                // row
                if (t[j] == "CREDIT" || t[j + 1] == "CREDIT")
                    cell.style = "color:green"
                // row.style ="background-color:green"
            }
            setTable(c - 1, acc);
        }
    );

}
web3.eth.getAccounts().then(function (acc) {
    contract.methods.getTransactionCount().call({ from: acc[0] }).then(function (c) {
        console.log(c);
        setTable(c - 1, acc);
    })

});

// var i =0;
// var trans = new Array();
// trans.push("123");
// var count=0;

// for(var i=2;i<=count;i++)
// {  
//     contract.methods.getTransaction(i).call({from:acc[0]}).then(
//         function(t){
//             console.log(t,i,"count", count);
//             trans.push(t);
//             // trans=t;
//             for (var j = 0; j < columnCount; j++) {
//                 var cell = row.insertCell(-1);
//                 cell.innerHTML = t[j];
//             }
//         }
//     );
//     console.log(trans)
// }

