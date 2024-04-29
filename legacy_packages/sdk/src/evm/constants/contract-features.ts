import {
  FEATURE_TOKEN,
  FEATURE_TOKEN_BATCH_MINTABLE,
  FEATURE_TOKEN_BURNABLE,
  FEATURE_TOKEN_MINTABLE,
  FEATURE_TOKEN_SIGNATURE_MINTABLE,
  FEATURE_TOKEN_CLAIM_CONDITIONS_V1,
  FEATURE_TOKEN_CLAIM_CONDITIONS_V2,
  FEATURE_TOKEN_CLAIM_PHASES_V2,
  FEATURE_TOKEN_CLAIM_PHASES_V1,
  FEATURE_TOKEN_PERMIT,
} from "./erc20-features";
import {
  FEATURE_NFT,
  FEATURE_NFT_BATCH_MINTABLE,
  FEATURE_NFT_BURNABLE,
  FEATURE_NFT_CLAIM_CUSTOM,
  FEATURE_NFT_LAZY_MINTABLE,
  FEATURE_NFT_ENUMERABLE,
  FEATURE_NFT_MINTABLE,
  FEATURE_NFT_REVEALABLE,
  FEATURE_NFT_SUPPLY,
  FEATURE_NFT_CLAIM_CONDITIONS_V1,
  FEATURE_NFT_CLAIM_CONDITIONS_V2,
  FEATURE_NFT_CLAIM_PHASES_V2,
  FEATURE_NFT_TIERED_DROP,
  FEATURE_NFT_CLAIM_PHASES_V1,
  FEATURE_NFT_SIGNATURE_MINTABLE_V1,
  FEATURE_NFT_SIGNATURE_MINTABLE_V2,
  FEATURE_NFT_SHARED_METADATA,
  FEATURE_NFT_CLAIM_ZORA,
  FEATURE_NFT_LOYALTY_CARD,
  FEATURE_NFT_UPDATABLE_METADATA,
  FEATURE_NFT_QUERYABLE,
} from "./erc721-features";
import {
  FEATURE_EDITION,
  FEATURE_EDITION_BATCH_MINTABLE,
  FEATURE_EDITION_BURNABLE,
  FEATURE_EDITION_CLAIM_CUSTOM,
  FEATURE_EDITION_CLAIM_CONDITIONS_V1,
  FEATURE_EDITION_CLAIM_CONDITIONS_V2,
  FEATURE_EDITION_CLAIM_PHASES_V2,
  FEATURE_EDITION_ENUMERABLE,
  FEATURE_EDITION_LAZY_MINTABLE_V1,
  FEATURE_EDITION_LAZY_MINTABLE_V2,
  FEATURE_EDITION_MINTABLE,
  FEATURE_EDITION_REVEALABLE,
  FEATURE_EDITION_SIGNATURE_MINTABLE,
  FEATURE_EDITION_CLAIM_PHASES_V1,
  FEATURE_EDITION_UPDATABLE_METADATA,
  FEATURE_EDITION_SUPPLY,
} from "./erc1155-features";
import {
  FEATURE_METADATA,
  FEATURE_OWNER,
  FEATURE_PERMISSIONS,
  FEATURE_PERMISSIONS_ENUMERABLE,
  FEATURE_PLATFORM_FEE,
  FEATURE_PRIMARY_SALE,
  FEATURE_ROYALTY,
  FEATURE_APPURI,
  FEATURE_GASLESS,
  FEATURE_PACK_VRF,
  FEATURE_PLUGIN_ROUTER,
  FEATURE_MODULAR_CORE,
  FEATURE_MODULAR_HOOK,
  FEATURE_DIRECT_LISTINGS,
  FEATURE_ENGLISH_AUCTIONS,
  FEATURE_OFFERS,
  FEATURE_DYNAMIC_CONTRACT,
  FEATURE_AIRDROP_ERC20,
  FEATURE_AIRDROP_ERC721,
  FEATURE_AIRDROP_ERC1155,
  FEATURE_ACCOUNT,
  FEATURE_ACCOUNT_FACTORY,
  FEATURE_ACCOUNT_PERMISSIONS,
  FEATURE_ACCOUNT_PERMISSIONS_V1,
  FEATURE_FALLBACK,
} from "./thirdweb-features";

/**
 * @internal
 */
export type Feature =
  | typeof FEATURE_TOKEN
  | typeof FEATURE_TOKEN_MINTABLE
  | typeof FEATURE_TOKEN_BATCH_MINTABLE
  | typeof FEATURE_TOKEN_BURNABLE
  | typeof FEATURE_TOKEN_CLAIM_CONDITIONS_V1
  | typeof FEATURE_TOKEN_CLAIM_CONDITIONS_V2
  | typeof FEATURE_TOKEN_CLAIM_PHASES_V1
  | typeof FEATURE_TOKEN_CLAIM_PHASES_V2
  | typeof FEATURE_TOKEN_SIGNATURE_MINTABLE
  | typeof FEATURE_TOKEN_PERMIT
  | typeof FEATURE_NFT
  | typeof FEATURE_NFT_SUPPLY
  | typeof FEATURE_NFT_ENUMERABLE
  | typeof FEATURE_NFT_QUERYABLE
  | typeof FEATURE_NFT_MINTABLE
  | typeof FEATURE_NFT_BATCH_MINTABLE
  | typeof FEATURE_NFT_LAZY_MINTABLE
  | typeof FEATURE_NFT_CLAIM_CUSTOM
  | typeof FEATURE_NFT_CLAIM_ZORA
  | typeof FEATURE_NFT_CLAIM_CONDITIONS_V1
  | typeof FEATURE_NFT_CLAIM_CONDITIONS_V2
  | typeof FEATURE_NFT_CLAIM_PHASES_V1
  | typeof FEATURE_NFT_CLAIM_PHASES_V2
  | typeof FEATURE_NFT_REVEALABLE
  | typeof FEATURE_NFT_SIGNATURE_MINTABLE_V1
  | typeof FEATURE_NFT_SIGNATURE_MINTABLE_V2
  | typeof FEATURE_NFT_BURNABLE
  | typeof FEATURE_NFT_TIERED_DROP
  | typeof FEATURE_NFT_SHARED_METADATA
  | typeof FEATURE_NFT_LOYALTY_CARD
  | typeof FEATURE_NFT_UPDATABLE_METADATA
  | typeof FEATURE_EDITION
  | typeof FEATURE_EDITION_ENUMERABLE
  | typeof FEATURE_EDITION_MINTABLE
  | typeof FEATURE_EDITION_CLAIM_CUSTOM
  | typeof FEATURE_EDITION_CLAIM_CONDITIONS_V1
  | typeof FEATURE_EDITION_CLAIM_CONDITIONS_V2
  | typeof FEATURE_EDITION_CLAIM_PHASES_V1
  | typeof FEATURE_EDITION_CLAIM_PHASES_V2
  | typeof FEATURE_EDITION_LAZY_MINTABLE_V1
  | typeof FEATURE_EDITION_LAZY_MINTABLE_V2
  | typeof FEATURE_EDITION_REVEALABLE
  | typeof FEATURE_EDITION_BATCH_MINTABLE
  | typeof FEATURE_EDITION_BURNABLE
  | typeof FEATURE_EDITION_SIGNATURE_MINTABLE
  | typeof FEATURE_EDITION_UPDATABLE_METADATA
  | typeof FEATURE_EDITION_SUPPLY
  | typeof FEATURE_ROYALTY
  | typeof FEATURE_PLATFORM_FEE
  | typeof FEATURE_PRIMARY_SALE
  | typeof FEATURE_PERMISSIONS
  | typeof FEATURE_PERMISSIONS_ENUMERABLE
  | typeof FEATURE_METADATA
  | typeof FEATURE_APPURI
  | typeof FEATURE_OWNER
  | typeof FEATURE_GASLESS
  | typeof FEATURE_PACK_VRF
  | typeof FEATURE_PLUGIN_ROUTER
  | typeof FEATURE_MODULAR_CORE
  | typeof FEATURE_MODULAR_HOOK
  | typeof FEATURE_DYNAMIC_CONTRACT
  | typeof FEATURE_DIRECT_LISTINGS
  | typeof FEATURE_ENGLISH_AUCTIONS
  | typeof FEATURE_OFFERS
  | typeof FEATURE_AIRDROP_ERC20
  | typeof FEATURE_AIRDROP_ERC721
  | typeof FEATURE_AIRDROP_ERC1155
  | typeof FEATURE_ACCOUNT
  | typeof FEATURE_ACCOUNT_PERMISSIONS
  | typeof FEATURE_ACCOUNT_PERMISSIONS_V1
  | typeof FEATURE_ACCOUNT_FACTORY
  | typeof FEATURE_FALLBACK;

export type Extension = Feature;

/**
 * @internal
 */
export type FeatureName = Feature["name"];
export type ExtensionName = Feature["name"];
/**
 * @internal
 */
export type FeatureWithEnabled = Feature & {
  features: Record<string, FeatureWithEnabled>;
  enabled: boolean;
};
export type ExtensionWithEnabled = Extension & {
  extensions: Record<string, FeatureWithEnabled>;
  enabled: boolean;
};

/**
 * @internal
 */
export const SUPPORTED_FEATURES: Record<string, Feature> = /* @__PURE__ */ {
  [FEATURE_TOKEN.name]: FEATURE_TOKEN,
  [FEATURE_NFT.name]: FEATURE_NFT,
  [FEATURE_EDITION.name]: FEATURE_EDITION,
  [FEATURE_ROYALTY.name]: FEATURE_ROYALTY,
  [FEATURE_PLATFORM_FEE.name]: FEATURE_PLATFORM_FEE,
  [FEATURE_PRIMARY_SALE.name]: FEATURE_PRIMARY_SALE,
  [FEATURE_PERMISSIONS.name]: FEATURE_PERMISSIONS,
  [FEATURE_METADATA.name]: FEATURE_METADATA,
  [FEATURE_APPURI.name]: FEATURE_APPURI,
  [FEATURE_OWNER.name]: FEATURE_OWNER,
  [FEATURE_GASLESS.name]: FEATURE_GASLESS,
  [FEATURE_PACK_VRF.name]: FEATURE_PACK_VRF,
  [FEATURE_PLUGIN_ROUTER.name]: FEATURE_PLUGIN_ROUTER,
  [FEATURE_DYNAMIC_CONTRACT.name]: FEATURE_DYNAMIC_CONTRACT,
  [FEATURE_MODULAR_CORE.name]: FEATURE_MODULAR_CORE,
  [FEATURE_MODULAR_HOOK.name]: FEATURE_MODULAR_HOOK,
  [FEATURE_DIRECT_LISTINGS.name]: FEATURE_DIRECT_LISTINGS,
  [FEATURE_ENGLISH_AUCTIONS.name]: FEATURE_ENGLISH_AUCTIONS,
  [FEATURE_OFFERS.name]: FEATURE_OFFERS,
  [FEATURE_AIRDROP_ERC20.name]: FEATURE_AIRDROP_ERC20,
  [FEATURE_AIRDROP_ERC721.name]: FEATURE_AIRDROP_ERC721,
  [FEATURE_AIRDROP_ERC1155.name]: FEATURE_AIRDROP_ERC1155,
  [FEATURE_ACCOUNT_FACTORY.name]: FEATURE_ACCOUNT_FACTORY,
  [FEATURE_ACCOUNT.name]: FEATURE_ACCOUNT,
  [FEATURE_NFT_LOYALTY_CARD.name]: FEATURE_NFT_LOYALTY_CARD,
  [FEATURE_NFT_UPDATABLE_METADATA.name]: FEATURE_NFT_UPDATABLE_METADATA,
  [FEATURE_FALLBACK.name]: FEATURE_FALLBACK,
};
