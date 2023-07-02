import logo from "./logo.svg";
import "./App.css";
import { ethers } from "ethers";
import { useEffect } from "react";
function App() {
  const walletAddress = "0x253e7bb44cc17e93039f285ee55e44c464685ebe";
  const walletABI = [
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
	},
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
	}
];
  const writeContract = async () => {
    let currAddress;
    if (window.ethereum) {
        console.log('1st comment');

      if (window.ethereum.isConnected()) {
        console.log('2nd comment');

        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        console.log(accounts[0]);
        currAddress = accounts[0];
      }

      console.log('3rd comment');

      const provider = new ethers.BrowserProvider(window.ethereum);

      console.log('4th comment');
      // await provider.send("eth_requestAccounts", []);
      const signer = await provider.getSigner();
      console.log(signer);
      console.log('5th comment');

      const walletContract = new ethers.Contract(
        walletAddress,
        walletABI,
        signer
      );

      console.log(walletContract);

      console.log('6th comment');

      const res = await walletContract.setValue('2');
      res.wait(1);

      console.log('7th comment');

      console.log(res);

      console.log('8th comment');

    }
  };

  return (
    <div className="App">
      <button onClick={() => writeContract()}>Write button</button>
    </div>
  );
}

export default App;



// import logo from './logo.svg';
// import './App.css';
// import { ethers } from 'ethers';
// import { useEffect } from "react";
// function App() {

//   useEffect(()=>{
    
//     const walletAddress = "0x253e7bb44cc17e93039f285ee55e44c464685ebe";
//     const walletABI =     [
//       {
//           "inputs": [],
//           "name": "sendEthContract",
//           "outputs": [],
//           "stateMutability": "payable",
//           "type": "function"
//       },
//       {
//           "inputs": [
//               {
//                   "internalType": "address",
//                   "name": "_user",
//                   "type": "address"
//               }
//           ],
//           "name": "sendEthUser",
//           "outputs": [],
//           "stateMutability": "payable",
//           "type": "function"
//       },
//       {
//           "inputs": [
//               {
//                   "internalType": "uint256",
//                   "name": "_num",
//                   "type": "uint256"
//               }
//           ],
//           "name": "setValue",
//           "outputs": [],
//           "stateMutability": "nonpayable",
//           "type": "function"
//       },
//       {
//           "inputs": [
//               {
//                   "internalType": "address",
//                   "name": "_address",
//                   "type": "address"
//               }
//           ],
//           "name": "accountBalance",
//           "outputs": [
//               {
//                   "internalType": "uint256",
//                   "name": "",
//                   "type": "uint256"
//               }
//           ],
//           "stateMutability": "view",
//           "type": "function"
//       },
//       {
//           "inputs": [],
//           "name": "contractBalance",
//           "outputs": [
//               {
//                   "internalType": "uint256",
//                   "name": "",
//                   "type": "uint256"
//               }
//           ],
//           "stateMutability": "view",
//           "type": "function"
//       },
//       {
//           "inputs": [],
//           "name": "getValue",
//           "outputs": [
//               {
//                   "internalType": "uint256",
//                   "name": "",
//                   "type": "uint256"
//               }
//           ],
//           "stateMutability": "view",
//           "type": "function"
//       },
//       {
//           "inputs": [],
//           "name": "name",
//           "outputs": [
//               {
//                   "internalType": "string",
//                   "name": "",
//                   "type": "string"
//               }
//           ],
//           "stateMutability": "view",
//           "type": "function"
//       }
//   ]
//     const writeContract = async()=>{
//     const provider = new ethers.BrowserProvider(window.ethereum);
//     await provider.send("eth_requestAccounts", []);
//     const signer = provider.getSigner();
//     const walletContract = new ethers.Contract(
//       walletAddress,walletABI,signer
//     )
//     await walletContract.setValue(2);
//     }
//     writeContract();
//   },[])
//   return (
//     <div className="App">
      
//     </div>
//   );
// }

// export default App;
