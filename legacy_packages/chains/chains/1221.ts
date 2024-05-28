import type { Chain } from "../src/types";
export default {
  "chain": "ETH",
  "chainId": 1221,
  "explorers": [],
  "faucets": [],
  "infoURL": "https://www.cyclenetwork.io/",
  "name": "Cycle Network Testnet",
  "nativeCurrency": {
    "name": "Ether",
    "symbol": "ETH",
    "decimals": 18
  },
  "networkId": 1221,
  "rpc": [
    "https://1221.rpc.thirdweb.com/${THIRDWEB_API_KEY}",
    "https://rpc-testnet.cyclenetwork.io"
  ],
  "shortName": "Cycle",
  "slug": "cycle-network-testnet",
  "testnet": true
} as const satisfies Chain;