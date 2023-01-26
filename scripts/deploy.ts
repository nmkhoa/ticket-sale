import { ethers } from "hardhat";

async function main() {
  

  const Ticket = await ethers.getContractFactory("TicketSale");
  const ticket = await Ticket.deploy();

  await ticket.deployed();

  console.log("Ticket deployed to:", ticket.address)

  const Token = await ethers.getContractFactory("MintToken");
  const token = await Token.deploy(1000000000000000,ticket.address);

  await token.deployed();

  console.log("Token deployed to:", token.address)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});