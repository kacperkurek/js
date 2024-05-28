import type { Chain } from "../src/types";
export default {
  "chain": "CRC",
  "chainId": 1804,
  "explorers": [
    {
      "name": "Lite Explorer",
      "url": "https://ethereum-pocr.github.io/explorer/kerleano",
      "standard": "EIP3091"
    }
  ],
  "faucets": [
    "https://github.com/ethereum-pocr/kerleano/blob/main/docs/faucet.md"
  ],
  "infoURL": "https://github.com/ethereum-pocr/kerleano",
  "name": "Kerleano",
  "nativeCurrency": {
    "name": "Climate awaReness Coin",
    "symbol": "CRC",
    "decimals": 18
  },
  "networkId": 1804,
  "rpc": [
    "https://1804.rpc.thirdweb.com/${THIRDWEB_API_KEY}",
    "https://cacib-saturn-test.francecentral.cloudapp.azure.com",
    "wss://cacib-saturn-test.francecentral.cloudapp.azure.com:9443"
  ],
  "shortName": "kerleano",
  "slip44": 1,
  "slug": "kerleano",
  "status": "active",
  "testnet": true,
  "title": "Proof of Climate awaReness testnet"
} as const satisfies Chain;