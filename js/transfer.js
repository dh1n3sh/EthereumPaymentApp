var contract;

//   var contract;

function getBalance() {
    web3 = new Web3(web3.currentProvider);

    contract = new web3.eth.Contract(abi, address);
    var holder;
    web3.eth.getAccounts().then(function (acc) {
        // console.log(acc);
        // $('#address').html("Your account address detected is : " + acc[0]);
        contract.methods.getBalance().call({ from: acc[0] }).then(
            function (bal) {
                $('#balance').html(bal)
            }
        );
    });
}
$(document).ready(getBalance());

$('#transfer').click(function () {
    console.log("clicked");
    web3 = new Web3(web3.currentProvider);

    contract = new web3.eth.Contract(abi, address);
    web3.eth.getAccounts().then(function (acc) {
        console.log(acc);
        // $('#address').html(acc[0]);
        var to = $("#add").val();
        var amt = parseInt($("#amount").val());
        contract.methods.sendCoin(amt, to).send({ from: acc[0] });
    }
    ).then(function (x) { console.log(x) }).catch(function (x) { console.log(x) });
    getBalance();
});