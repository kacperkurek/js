import type { Chain } from "../src/types";
export default {
  "chain": "ETH",
  "chainId": 167004,
  "explorers": [
    {
      "name": "blockscout",
      "url": "https://explorer.a2.taiko.xyz",
      "standard": "EIP3091"
    }
  ],
  "faucets": [],
  "infoURL": "https://taiko.xyz",
  "name": "Taiko (Alpha-2 Testnet)",
  "nativeCurrency": {
    "name": "Ether",
    "symbol": "ETH",
    "decimals": 18
  },
  "networkId": 167004,
  "rpc": [
    "https://167004.rpc.thirdweb.com/${THIRDWEB_API_KEY}",
    "https://rpc.a2.taiko.xyz"
  ],
  "shortName": "taiko-a2",
  "slip44": 1,
  "slug": "taiko-alpha-2-testnet",
  "status": "deprecated",
  "testnet": true
} as const satisfies Chain;