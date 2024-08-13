import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: "0.8.24",
  networks: {
    sepolia: {
      url: process.env.ALCHEMY_API_KEY,
      accounts: [
        process.env.PRIVATE_KEY !== undefined ? process.env.PRIVATE_KEY : "",
      ],
    },
  },
};

export default config;
