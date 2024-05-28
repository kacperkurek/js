import type { Chain } from "../src/types";
export default {
  "chain": "ETL",
  "chainId": 111,
  "explorers": [],
  "faucets": [
    "https://etherlite.org/faucets"
  ],
  "infoURL": "https://etherlite.org",
  "name": "EtherLite Chain",
  "nativeCurrency": {
    "name": "EtherLite",
    "symbol": "ETL",
    "decimals": 18
  },
  "networkId": 111,
  "rpc": [
    "https://111.rpc.thirdweb.com/${THIRDWEB_API_KEY}",
    "https://rpc.etherlite.org"
  ],
  "shortName": "ETL",
  "slug": "etherlite-chain",
  "testnet": false
} as const satisfies Chain;