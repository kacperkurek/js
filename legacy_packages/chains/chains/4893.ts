import type { Chain } from "../src/types";
export default {
  "chain": "GC",
  "chainId": 4893,
  "explorers": [
    {
      "name": "blockscout",
      "url": "https://gcscan.io",
      "standard": "none"
    }
  ],
  "faucets": [],
  "infoURL": "https://gcscan.io",
  "name": "Globel Chain",
  "nativeCurrency": {
    "name": "Globel Chain",
    "symbol": "GC",
    "decimals": 18
  },
  "networkId": 4893,
  "rpc": [
    "https://4893.rpc.thirdweb.com/${THIRDWEB_API_KEY}",
    "https://rpc.gcscan.io"
  ],
  "shortName": "GC",
  "slug": "globel-chain",
  "testnet": false
} as const satisfies Chain;