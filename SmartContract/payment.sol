pragma solidity >=0.4.21 <0.7.0;

contract paymentContract {
    uint256 constant rate = 1e16;
    // struct wallet{
    //     address holder;
    //     uint balance;
    // }
    struct transactions {
        string[] nature;
        address[] acc;
        uint256[] coins;
        uint256 count;
        uint256 balance;
    }
    mapping(address => transactions) trans;

    // mapping(address => uint) public account;

    // uint amount;
    constructor() public {
        // seller = _sender;
        // seller = msg.sender;
        // address _sender =0xC9f2b74D1C20506eB7A4843dDAB094749EDA23C4;
        trans[msg.sender].balance = 10000;
    }

    // function buyElixir() public payable
    // {
    //     // amount=msg.value;
    //     account[msg.sender]+=msg.value/rate;
    //     seller.transfer(msg.value);
    // }

    function sendCoin(uint256 _amount, address _to) public returns (int256) {
        if (msg.sender != _to) {
            if (trans[msg.sender].balance >= _amount) {
                trans[msg.sender].balance -= _amount;
                trans[_to].balance += _amount;
                trans[msg.sender].nature.push("DEBIT");
                trans[msg.sender].acc.push(_to);
                trans[msg.sender].coins.push(_amount);

                trans[_to].nature.push("CREDIT");
                trans[_to].acc.push(msg.sender);
                trans[_to].coins.push(_amount);
                trans[_to].count += 1;
                trans[msg.sender].count += 1;
                return 1;
            }
        }
        return -1;
    }

    function getTransactionCount() public view returns (uint256 count) {
        return trans[msg.sender].count;
    }

    function getTransaction(uint256 i)
        public
        view
        returns (
            address account,
            uint256 amount,
            string nature
        )
    {
        return (
            trans[msg.sender].acc[i],
            trans[msg.sender].coins[i],
            trans[msg.sender].nature[i]
        );
    }

    function getBalanceOf(address ad) public view returns (uint256) {
        return trans[ad].balance;
    }

    function getBalance() public view returns (uint256) {
        return trans[msg.sender].balance;
    }
}
