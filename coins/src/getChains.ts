import chainToCoingeckoId from "../../common/chainToCoingeckoId";
import { successResponse, wrap, IResponse } from "./utils/shared";
const adaptersRepoChainsJson: string[] = [
  "acala",
  "algorand",
  "aptos",
  "arbitrum",
  "arbitrum_nova",
  "astar",
  "aurora",
  "avax",
  "base",
  "bifrost",
  "binance",
  "bitcoin",
  "bitcoincash",
  "bitgert",
  "bitindi",
  "bittorrent",
  "boba",
  "boba_avax",
  "boba_bnb",
  "borrowed",
  "bone",
  "bsc",
  "bytomsidechain",
  "callisto",
  "candle",
  "canto",
  "carbon",
  "cardano",
  "celo",
  "chihuahua",
  "clover",
  "clv",
  "comdex",
  "concordium",
  "conflux",
  "core",
  "cosmos",
  "coti",
  "crab",
  "crescent",
  "cronos",
  "csc",
  "cube",
  "curio",
  "defichain",
  "dexit",
  "dfk",
  "doge",
  "dogechain",
  "echelon",
  "elastos",
  "elrond",
  "empire",
  "energi",
  "energyweb",
  "enuls",
  "eos",
  "eos_evm",
  "equilibrium",
  "era",
  "ergo",
  "ethereum",
  "ethereumclassic",
  "ethpow",
  "everscale",
  "evmos",
  "europa",
  "fantom",
  "findora",
  "filecoin",
  "flare",
  "flow",
  "functionx",
  "fuse",
  "fusion",
  "genshiro",
  "gochain",
  "godwoken",
  "godwoken_v1",
  "goerli",
  "gravitybridge",
  "grove",
  "harmony",
  "heco",
  "hedera",
  "heiko",
  "hoo",
  "hpb",
  "hydra",
  "icon",
  "icp",
  "injective",
  "interlay",
  "iotex",
  "juno",
  "kadena",
  "kardia",
  "karura",
  "kava",
  "kcc",
  "kekchain",
  "kintsugi",
  "klaytn",
  "kujira",
  "kusama",
  "lachain",
  "lamden",
  "lbry",
  "libre",
  "linea",
  "liquidchain",
  "litecoin",
  "loop",
  "lukso",
  "lung",
  "mantle",
  "map",
  "meta",
  "meter",
  "metis",
  "migaloo",
  "milkomeda",
  "milkomeda_a1",
  "mixin",
  "moonbeam",
  "moonriver",
  "multivac",
  "muuchain",
  "nahmii",
  "near",
  "neo",
  "neo3",
  "neon_evm",
  "neutron",
  "nova",
  "nuls",
  "oasis",
  "oas",
  "obyte",
  "okexchain",
  "omax",
  "ontology",
  "ontology_evm",
  "onus",
  "optimism",
  "ore",
  "orai",
  "osmosis",
  "ozone",
  "palette",
  "palm",
  "parallel",
  "persistence",
  "pgn",
  "pokt",
  "polis",
  "polkadot",
  "polygon",
  "polygon_zkevm",
  "pool2",
  "posi",
  "proton",
  "pulse",
  "quicksilver",
  "quasar",
  "reef",
  "regen",
  "rei",
  "reichain",
  "ripple",
  "rollux",
  "ronin",
  "rsk",
  "rvn",
  "rpg",
  "secret",
  "shiden",
  "sifchain",
  "smartbch",
  "solana",
  "songbird",
  "sora",
  "stacks",
  "stafi",
  "staking",
  "starcoin",
  "stargaze",
  "starknet",
  "stellar",
  "step",
  "stride",
  "sui",
  "sx",
  "syscoin",
  "telos",
  "tenet",
  "terra",
  "terra2",
  "tezos",
  "theta",
  "thorchain",
  "thundercore",
  "tlchain",
  "tombchain",
  "tomochain",
  "ton",
  "tron",
  "ubiq",
  "ultra",
  "ultron",
  "umee",
  "vechain",
  "velas",
  "vision",
  "vite",
  "vive",
  "wan",
  "waves",
  "wax",
  "wemix",
  "xdai",
  "xdc",
  "xpla",
  "zeniq",
  "zilliqa",
  "zksync",
  "zyx",
];
export const handler = async (): Promise<IResponse> => {
  const allChains = [
    ...new Set([...adaptersRepoChainsJson, ...Object.keys(chainToCoingeckoId)]),
  ];
  return successResponse(allChains, 3600);
};
export default wrap(handler);
