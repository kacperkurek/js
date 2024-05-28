import type { Chain } from "../src/types";
export default {
  "chain": "ETC",
  "chainId": 61,
  "explorers": [
    {
      "name": "etcnetworkinfo-blockscout-ethereum-classic",
      "url": "https://explorer-blockscout.etc-network.info",
      "standard": "none"
    },
    {
      "name": "etcnetworkinfo-alethio-ethereum-classic",
      "url": "https://explorer-alethio.etc-network.info",
      "standard": "none"
    },
    {
      "name": "etcnetworkinfo-expedition-ethereum-classic",
      "url": "https://explorer-expedition.etc-network.info",
      "standard": "none"
    },
    {
      "name": "hebeblock-ethereum-classic",
      "url": "https://etcerscan.com",
      "standard": "EIP3091"
    },
    {
      "name": "oklink-ethereum-classic",
      "url": "https://www.oklink.com/etc",
      "standard": "EIP3091"
    },
    {
      "name": "tokenview-ethereum-classic",
      "url": "https://etc.tokenview.io",
      "standard": "EIP3091"
    }
  ],
  "faucets": [],
  "features": [
    {
      "name": "EIP155"
    }
  ],
  "infoURL": "https://ethereumclassic.org",
  "name": "Ethereum Classic",
  "nativeCurrency": {
    "name": "Ether",
    "symbol": "ETC",
    "decimals": 18
  },
  "networkId": 61,
  "redFlags": [],
  "rpc": [
    "https://61.rpc.thirdweb.com/${THIRDWEB_API_KEY}",
    "https://etc.etcdesktop.com",
    "https://etc.rivet.link",
    "https://besu-at.etc-network.info",
    "https://geth-at.etc-network.info",
    "https://etc.mytokenpocket.vip"
  ],
  "shortName": "etc",
  "slip44": 61,
  "slug": "ethereum-classic",
  "status": "active",
  "testnet": false,
  "title": "Ethereum Classic Mainnet"
} as const satisfies Chain;