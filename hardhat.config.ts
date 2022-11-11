import { HardhatUserConfig } from "hardhat/config";
import { task } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
  
});
const config: HardhatUserConfig = {
  solidity: {
    version:  "0.8.12",
    
    settings: {
      optimizer: {
        enabled: true,
        runs: 2000,
        details: {
          yul: true,
          yulDetails: {
            stackAllocation: true,
            optimizerSteps: "dhfoDgvulfnTUtnIf"
          }
        }
      }
    },
  },
  
  networks: {
    hardhat: {
      chainId: 1337,
    },
  //   kovan: {
  //     url: "https://eth-kovan.alchemyapi.io/v2/2ltPxjNf2rh4dAiXvo8NcI6jt62jnCsD",
  //     accounts: ["0xd67e3685dfe7d23ae09de01fac32da53c58ae72a3d4f1a55fb0ef99b58d81907"],
  //   },
  //   local: {
  //     url: `http://127.0.0.1:8545/`,
  //     accounts: ["0xd67e3685dfe7d23ae09de01fac32da53c58ae72a3d4f1a55fb0ef99b58d81907"],
  //   },
    },
    


};

export default config;