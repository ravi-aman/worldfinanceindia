import { HardhatUserConfig } from "hardhat/types";
import "@nomiclabs/hardhat-waffle";
import * as dotenv from "dotenv";

dotenv.config();  // Load environment variables from .env file

const config: HardhatUserConfig = {
    solidity: "0.8.0",
    networks: {
        linea: {
            url: "https://rpc.goerli.linea.build",  // Linea Testnet RPC
            accounts: process.env.PRIVATE_KEY ? [process.env.PRIVATE_KEY] : [],  // Use .env for private key
        }
    }
};

export default config;
