const hre = require("hardhat");

async function main() {
  const Hotel = await hre.ethers.getContractFactory("Hotel");
  const hotel = await Hotel.deploy();
  await hotel.deployed();
  console.log("Transactions deployed to:", hotel.address);
}

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

runMain();
