import type { Chain } from "../src/types";
export default {
  "chain": "Opside",
  "chainId": 23118,
  "explorers": [
    {
      "name": "opsideInfo",
      "url": "https://opside.info",
      "standard": "EIP3091"
    }
  ],
  "faucets": [
    "https://faucet.opside.network"
  ],
  "infoURL": "https://opside.network",
  "name": "Opside Testnet",
  "nativeCurrency": {
    "name": "IDE",
    "symbol": "IDE",
    "decimals": 18
  },
  "networkId": 23118,
  "rpc": [
    "https://23118.rpc.thirdweb.com/${THIRDWEB_API_KEY}",
    "https://testrpc.opside.network"
  ],
  "shortName": "opside",
  "slip44": 1,
  "slug": "opside-testnet",
  "testnet": true
} as const satisfies Chain;