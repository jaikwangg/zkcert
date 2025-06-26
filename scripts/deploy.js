const hre = require("hardhat");

async function main() {
  const SBT = await hre.ethers.getContractFactory("MySBT");
  const sbt = await SBT.deploy();
  await sbt.deployed();
  console.log("✅ Contract deployed at:", sbt.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});