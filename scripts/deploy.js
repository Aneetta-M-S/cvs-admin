const hre = require("hardhat");

async function main() {
  const Certification = await hre.ethers.getContractFactory("Certification");
  const certification = await Certification.deploy(
    "Roman",
    "romulus",
    "bafybeic5z5dguqbeatyys6vqjqka3bfx6vo3exlvrpo52u3leqsohd2kse"
  );
  await certification.deployed();
  console.log("Contract deployed to:", certification.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
