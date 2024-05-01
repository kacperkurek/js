export const modularFactoryCompilerMetadata = {
    compiler: { version: "0.8.17+commit.8df45f5f" },
    language: "Solidity",
    output: {
      abi: [
        { inputs: [], type: "error", name: "CloneFactoryFailedToInitialize" },
        {
          inputs: [
            {
              internalType: "address",
              name: "implementation",
              type: "address",
              indexed: true,
            },
            {
              internalType: "address",
              name: "proxy",
              type: "address",
              indexed: false,
            },
            {
              internalType: "address",
              name: "deployer",
              type: "address",
              indexed: true,
            },
          ],
          type: "event",
          name: "ProxyDeployed",
          anonymous: false,
        },
        {
          inputs: [
            { internalType: "address", name: "_implementation", type: "address" },
            { internalType: "bytes", name: "_data", type: "bytes" },
            { internalType: "bytes32", name: "_salt", type: "bytes32" },
          ],
          stateMutability: "nonpayable",
          type: "function",
          name: "deployDeterministicERC1967",
          outputs: [
            { internalType: "address", name: "deployedProxy", type: "address" },
          ],
        },
        {
          inputs: [
            { internalType: "address", name: "_implementation", type: "address" },
            { internalType: "bytes", name: "_data", type: "bytes" },
            { internalType: "bytes32", name: "_salt", type: "bytes32" },
          ],
          stateMutability: "nonpayable",
          type: "function",
          name: "deployProxyByImplementation",
          outputs: [
            { internalType: "address", name: "deployedProxy", type: "address" },
          ],
        },
      ],
      devdoc: {
        kind: "dev",
        methods: {
          "deployProxyByImplementation(address,bytes,bytes32)": {
            params: {
              _data: "The data to initialize the clone with.",
              _implementation: "The implementation to point a clone to.",
              _salt: "The salt to use for the deployment of the clone.",
            },
          },
        },
        version: 1,
      },
      userdoc: {
        kind: "user",
        methods: {
          "deployProxyByImplementation(address,bytes,bytes32)": {
            notice: "Deploys a minimal clone at a determininstic address.",
          },
        },
        version: 1,
      },
    },
    settings: {
      remappings: [
        "@manifoldxyz/creator-core-solidity/=node_modules/@manifoldxyz/creator-core-solidity/",
        "@manifoldxyz/libraries-solidity/=node_modules/@manifoldxyz/libraries-solidity/",
        "@openzeppelin/contracts-upgradeable/=node_modules/@openzeppelin/contracts-upgradeable/",
        "@openzeppelin/contracts/=node_modules/@openzeppelin/contracts/",
        "@thirdweb-dev/dynamic-contracts/=node_modules/@thirdweb-dev/dynamic-contracts/src/",
        "@zoralabs/protocol-rewards/src/=node_modules/@zoralabs/protocol-rewards/dist/contracts/",
        "ds-test/=lib/forge-std/lib/ds-test/src/",
        "erc721a-upgradeable/=node_modules/erc721a-upgradeable/contracts/",
        "forge-std/=lib/forge-std/src/",
      ],
      optimizer: { enabled: true, runs: 200 },
      metadata: { bytecodeHash: "ipfs" },
      compilationTarget: { "src/infra/CloneFactory.sol": "CloneFactory" },
      evmVersion: "london",
      libraries: {},
    },
    sources: {
      "lib/forge-std/src/console.sol": {
        keccak256:
          "0x91d5413c2434ca58fd278b6e1e79fd98d10c83931cc2596a6038eee4daeb34ba",
        urls: [
          "bzz-raw://91ccea707361e48b9b7a161fe81f496b9932bc471e9c4e4e1e9c283f2453cc70",
          "dweb:/ipfs/QmcB66sZhQ6Kz7MUHcLE78YXRUZxoZnnxZjN6yATsbB2ec",
        ],
        license: "MIT",
      },
      "src/infra/CloneFactory.sol": {
        keccak256:
          "0x92e09fcbb11bb55ef6387fa4a8a55e123ae108e3a06e52428080807b55cc2799",
        urls: [
          "bzz-raw://87b099d456d5caf728177703cfb7af88129545499c7e2f8b539acea51d5504c0",
          "dweb:/ipfs/QmP84udpUK9sX15HftDDXVPdmacY4MM3zfkdtzKgw88LH6",
        ],
        license: "Apache-2.0",
      },
      "src/lib/LibClone.sol": {
        keccak256:
          "0x3efb2632c4f733c4c44268a84e0b7620c6b941ac2f2950dba380d69fe0b9691b",
        urls: [
          "bzz-raw://7a2930deb2a88c8aef3387a72ef5e0affc4263fdbe24de98482d8ab5ca9285dd",
          "dweb:/ipfs/QmYWU3hhuvTz7c44hNB1q3DfBD9MbdcSorPjyNtQGNqnYD",
        ],
        license: "MIT",
      },
    },
    version: 1,
  };
  export const modularFactoryBytecode =
    "0x608060405234801561001057600080fd5b50610423806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c806311b804ab1461003b57806322250df71461006a575b600080fd5b61004e6100493660046102e5565b61007d565b6040516001600160a01b03909116815260200160405180910390f35b61004e6100783660046102e5565b610190565b6040516bffffffffffffffffffffffff193360601b1660208201526034810182905260009081906054016040516020818303038152906040528051906020012090506100c9858261019d565b6040516001600160a01b03808316825291935033918716907f9e0862c4ebff2150fbbfd3f8547483f55bdec0c34fd977d3fccaa55d6c4ce7849060200160405180910390a383511561018857600080836001600160a01b03168660405161013091906103be565b6000604051808303816000865af19150503d806000811461016d576040519150601f19603f3d011682016040523d82523d6000602084013e610172565b606091505b50915091508161018557610185816101b2565b50505b509392505050565b6000816100c985826101db565b60006101ab600084846101e9565b9392505050565b8051156101c25780518082602001fd5b60405163a89a8fd760e01b815260040160405180910390fd5b60006101ab60008484610240565b60006c5af43d3d93803e602a57fd5bf36021528260145273602c3d8160093d39f33d3d3d3d363d3d37363d73600052816035600c86f59050806102345763301164256000526004601cfd5b60006021529392505050565b60006040517fcc3735a920a3ca505d382bbc545af43d6000803e6038573d6000fd5b3d6000f36060527f5155f3363d3d373d3d363d7f360894a13ba1a3210667c828492db98dca3e207660405261600960205283601e5268603d3d8160223d3973600a5282605f602187f59150816102c05763301164256000526004601cfd5b60405260006060529392505050565b634e487b7160e01b600052604160045260246000fd5b6000806000606084860312156102fa57600080fd5b83356001600160a01b038116811461031157600080fd5b9250602084013567ffffffffffffffff8082111561032e57600080fd5b818601915086601f83011261034257600080fd5b813581811115610354576103546102cf565b604051601f8201601f19908116603f0116810190838211818310171561037c5761037c6102cf565b8160405282815289602084870101111561039557600080fd5b826020860160208301376000602084830101528096505050505050604084013590509250925092565b6000825160005b818110156103df57602081860181015185830152016103c5565b50600092019182525091905056fea264697066735822122018f916394705e16e10857aa5381c92f1c8188e98baa53ce3d44eaaf04c6f6b2a64736f6c63430008110033";
  
  export const modularFactoryDeployedBytecode =
    "0x608060405234801561001057600080fd5b50600436106100365760003560e01c806311b804ab1461003b57806322250df71461006a575b600080fd5b61004e6100493660046102e5565b61007d565b6040516001600160a01b03909116815260200160405180910390f35b61004e6100783660046102e5565b610190565b6040516bffffffffffffffffffffffff193360601b1660208201526034810182905260009081906054016040516020818303038152906040528051906020012090506100c9858261019d565b6040516001600160a01b03808316825291935033918716907f9e0862c4ebff2150fbbfd3f8547483f55bdec0c34fd977d3fccaa55d6c4ce7849060200160405180910390a383511561018857600080836001600160a01b03168660405161013091906103be565b6000604051808303816000865af19150503d806000811461016d576040519150601f19603f3d011682016040523d82523d6000602084013e610172565b606091505b50915091508161018557610185816101b2565b50505b509392505050565b6000816100c985826101db565b60006101ab600084846101e9565b9392505050565b8051156101c25780518082602001fd5b60405163a89a8fd760e01b815260040160405180910390fd5b60006101ab60008484610240565b60006c5af43d3d93803e602a57fd5bf36021528260145273602c3d8160093d39f33d3d3d3d363d3d37363d73600052816035600c86f59050806102345763301164256000526004601cfd5b60006021529392505050565b60006040517fcc3735a920a3ca505d382bbc545af43d6000803e6038573d6000fd5b3d6000f36060527f5155f3363d3d373d3d363d7f360894a13ba1a3210667c828492db98dca3e207660405261600960205283601e5268603d3d8160223d3973600a5282605f602187f59150816102c05763301164256000526004601cfd5b60405260006060529392505050565b634e487b7160e01b600052604160045260246000fd5b6000806000606084860312156102fa57600080fd5b83356001600160a01b038116811461031157600080fd5b9250602084013567ffffffffffffffff8082111561032e57600080fd5b818601915086601f83011261034257600080fd5b813581811115610354576103546102cf565b604051601f8201601f19908116603f0116810190838211818310171561037c5761037c6102cf565b8160405282815289602084870101111561039557600080fd5b826020860160208301376000602084830101528096505050505050604084013590509250925092565b6000825160005b818110156103df57602081860181015185830152016103c5565b50600092019182525091905056fea264697066735822122018f916394705e16e10857aa5381c92f1c8188e98baa53ce3d44eaaf04c6f6b2a64736f6c63430008110033";