const { ethers } = require("ethers");

const provider = new ethers.JsonRpcProvider(
    "https://sepolia.infura.io/v3/9ad5fcd436204d2c914b5194caf8a197"
)

const walletAddress = "0x253e7bb44cc17e93039f285ee55e44c464685ebe";

const walletABI = 
    [
        {
            "inputs": [],
            "name": "sendEthContract",
            "outputs": [],
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_user",
                    "type": "address"
                }
            ],
            "name": "sendEthUser",
            "outputs": [],
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_num",
                    "type": "uint256"
                }
            ],
            "name": "setValue",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_address",
                    "type": "address"
                }
            ],
            "name": "accountBalance",
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
            "inputs": [],
            "name": "contractBalance",
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
            "inputs": [],
            "name": "getValue",
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
            "inputs": [],
            "name": "name",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        }
    ]


    const contractInteraction = async ()=>{
        const walletContract = new ethers.Contract(
            walletAddress,
            walletABI,
            provider
        );

        const contractName = await walletContract.name();
        console.log(contractName);

        const num = await walletContract.getValue();
        console.log("Number Value:", String(num));

        const balethContract = await walletContract.contractBalance();
        console.log(balethContract);

        const userBalance = await walletContract.accountBalance(
            "0x6D3Fcf4b7895a12aDedf7dc3c4751dAC6142C3e9"
        )
        console.log(userBalance);
    }
    contractInteraction();
