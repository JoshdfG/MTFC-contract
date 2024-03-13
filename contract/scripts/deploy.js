// scripts/deploy.js
const hre = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deployig contract with a the account:", deployer.address);

  const SimpleRegistry = await hre.ethers.getContractFactory("SimpleRegistry");
  const simpleRegistry = await SimpleRegistry.deploy("John Doe", 25);

  console.log("SimpleRegistry deployed to:", simpleRegistry.target);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
