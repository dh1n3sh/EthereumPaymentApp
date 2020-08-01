var contract;
$(document).ready(function () {
  ethereum.enable();
  web3 = new Web3(web3.currentProvider);

  contract = new web3.eth.Contract(abi, address);
  var holder;
  web3.eth.getAccounts().then(function (acc) {
    console.log(acc);
    // $('#address').html(acc[0]);
    contract.methods.getBalance().call({ from: acc[0] }).then(function (bal) { console.log(bal); $('#balance').html(bal) });
  });
});
