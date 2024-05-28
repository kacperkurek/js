import type { Chain } from "../src/types";
export default {
  "chain": "RUBY",
  "chainId": 1821,
  "explorers": [
    {
      "name": "RUBY Smart Chain MAINNET Explorer",
      "url": "https://rubyscan.net",
      "standard": "none"
    }
  ],
  "faucets": [],
  "infoURL": "https://rubychain.io",
  "name": "Ruby Smart Chain MAINNET",
  "nativeCurrency": {
    "name": "RUBY Smart Chain Native Token",
    "symbol": "RUBY",
    "decimals": 18
  },
  "networkId": 1821,
  "rpc": [
    "https://1821.rpc.thirdweb.com/${THIRDWEB_API_KEY}",
    "https://mainnet-data.rubychain.io/",
    "https://mainnet.rubychain.io/"
  ],
  "shortName": "RUBY",
  "slip44": 1,
  "slug": "ruby-smart-chain",
  "testnet": false
} as const satisfies Chain;