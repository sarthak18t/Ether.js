const { ethers } = require("ethers");

const provider = new ethers.JsonRpcProvider(
    'https://mainnet.infura.io/v3/a95e5a86bdf647348dac8e75ea271c00'
)

const readBlockchain = async ()=>{
    const blockNum = await provider.getBlockNumber();
    console.log(blockNum);
    const balance = await provider.getBalance(
        "0xf8238a3dd9a67b8419412eDE613A06D73Ffc2D93"
    );
    console.log(balance);
    const balanceETH = ethers.formatEther(balance);
    console.log(balanceETH)
}
readBlockchain();