import type { Chain } from "../src/types";
export default {
  "chain": "Joseon",
  "chainId": 1392,
  "explorers": [
    {
      "name": "BlockExplorer",
      "url": "https://www.blockexplorer.com",
      "standard": "EIP3091"
    }
  ],
  "faucets": [],
  "infoURL": "https://www.joseon.com/",
  "name": "Joseon Mainnet",
  "nativeCurrency": {
    "name": "Joseon Mun",
    "symbol": "JSM",
    "decimals": 18
  },
  "networkId": 1392,
  "rpc": [
    "https://1392.rpc.thirdweb.com/${THIRDWEB_API_KEY}",
    "https://rpc.modchain.net/blockchain.joseon.com/rpc"
  ],
  "shortName": "mun",
  "slug": "joseon",
  "testnet": false
} as const satisfies Chain;