import { prepareEvent } from "../../../../../event/prepare-event.js";
import type { AbiParameterToPrimitiveType } from "abitype";

/**
 * Represents the filters for the "AccountCreated" event.
 */
export type AccountCreatedEventFilters = Partial<{
  account: AbiParameterToPrimitiveType<{
    indexed: true;
    internalType: "address";
    name: "account";
    type: "address";
  }>;
  accountAdmin: AbiParameterToPrimitiveType<{
    indexed: true;
    internalType: "address";
    name: "accountAdmin";
    type: "address";
  }>;
}>;

/**
 * Creates an event object for the AccountCreated event.
 * @param filters - Optional filters to apply to the event.
 * @returns The prepared event object.
 * @extension ERC4337
 * @example
 * ```
 * import { getContractEvents } from "thirdweb";
 * import { accountCreatedEvent } from "thirdweb/extensions/erc4337";
 *
 * const events = await getContractEvents({
 * contract,
 * events: [
 *  accountCreatedEvent({
 *  account: ...,
 *  accountAdmin: ...,
 * })
 * ],
 * });
 * ```
 */
export function accountCreatedEvent(filters: AccountCreatedEventFilters = {}) {
  return prepareEvent({
    signature:
      "event AccountCreated(address indexed account, address indexed accountAdmin)",
    filters,
  });
}
