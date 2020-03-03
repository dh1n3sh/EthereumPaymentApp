var address = "0x39eB50dE07fEB813ba0bb77A777d28c8FB94e3cD";
var abi=[
			{
				"inputs": [
					{
						"internalType": "uint256",
						"name": "_amount",
						"type": "uint256"
					},
					{
						"internalType": "address",
						"name": "_to",
						"type": "address"
					}
				],
				"name": "sendCoin",
				"outputs": [
					{
						"internalType": "int256",
						"name": "",
						"type": "int256"
					}
				],
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"inputs": [],
				"stateMutability": "nonpayable",
				"type": "constructor"
			},
			{
				"inputs": [],
				"name": "getBalance",
				"outputs": [
					{
						"internalType": "uint256",
						"name": "",
						"type": "uint256"
					}
				],
				"stateMutability": "view",
				"type": "function"
			},
			{
				"inputs": [
					{
						"internalType": "address",
						"name": "ad",
						"type": "address"
					}
				],
				"name": "getBalanceOf",
				"outputs": [
					{
						"internalType": "uint256",
						"name": "",
						"type": "uint256"
					}
				],
				"stateMutability": "view",
				"type": "function"
			},
			{
				"inputs": [
					{
						"internalType": "uint256",
						"name": "i",
						"type": "uint256"
					}
				],
				"name": "getTransaction",
				"outputs": [
					{
						"internalType": "address",
						"name": "account",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "amount",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "nature",
						"type": "string"
					}
				],
				"stateMutability": "view",
				"type": "function"
			},
			{
				"inputs": [],
				"name": "getTransactionCount",
				"outputs": [
					{
						"internalType": "uint256",
						"name": "count",
						"type": "uint256"
					}
				],
				"stateMutability": "view",
				"type": "function"
			}
];