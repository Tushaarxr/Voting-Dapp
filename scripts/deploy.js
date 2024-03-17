const { ethers } = require("hardhat");

async function main() {
  const Create = await ethers.getContractFactory("Create");

  // Pass constructor arguments as an array to the deploy function
  const create = await Create.deploy();

  // Wait for deployment to complete
  await create.deployed();

  console.log("Contract deployed to:", create.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
