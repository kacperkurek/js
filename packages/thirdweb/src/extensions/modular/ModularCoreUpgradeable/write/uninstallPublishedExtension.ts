import type { ThirdwebContract } from "../../../../contract/contract.js";
import type { ThirdwebClient } from "../../../../client/client.js";
import type { Chain } from "../../../../chains/types.js";
import { getDeployedInfraContract } from "../../../../contract/deployment/utils/infra.js";
import { uninstallExtension } from "../../__generated__/ModularCoreUpgradeable/write/uninstallExtension.js";

export type UninstallPublishedExtensionOptions = {
  client: ThirdwebClient;
  chain: Chain;
  contract: ThirdwebContract;
  extensionName: string;
  publisherAddress: string;
  version?: string;
  constructorParams?: any[];
  extensionData?: `0x${string}`;
};

export function uninstallPublishedExtension(
  options: UninstallPublishedExtensionOptions,
) {
  const {
    client,
    chain,
    contract,
    extensionName,
    publisherAddress,
    constructorParams,
    version,
    extensionData,
  } = options;

  return uninstallExtension({
    contract,
    asyncParams: async () => {
      const deployedExtension = await getDeployedInfraContract({
        chain,
        client,
        contractId: extensionName,
        constructorParams: constructorParams || [],
        publisher: publisherAddress
      });
      return {
        extensionImplementation: deployedExtension?.address as string,
        data: extensionData || "0x",
      };
    },
  });
}
