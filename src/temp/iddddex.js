import { default as logger } from "../utils/logger";
var idex = {
  ETH: {
    name: "Ether",
    decimals: 18,
    address: "0x0000000000000000000000000000000000000000"
  },
  PLU: {
    name: "Pluton",
    decimals: 18,
    address: "0xd8912c10681d8b21fd3742244f44658dba12264e",
    slug: "pluton"
  },
  "1ST": {
    name: "FirstBlood",
    decimals: 18,
    address: "0xaf30d2a7e90d7dc361c8c4585e9bb7d2f6f15bc7",
    slug: "firstblood"
  },
  SNGLS: {
    name: "SingularDTV",
    decimals: 0,
    address: "0xaec2e87e0a235266d9c5adc9deb4b2e29b54d009",
    slug: "singulardtv"
  },
  DGD: {
    name: "Digix DAO",
    decimals: 9,
    address: "0xe0b7927c4af23765cb51314a0e0521a9645f0e2a",
    slug: "digixdao"
  },
  DCN: {
    name: "Dentacoin",
    decimals: 0,
    address: "0x08d32b0da63e2c3bcf8019c9c5d849d7a9d791e6",
    slug: "dentacoin"
  },
  RLC: {
    name: "iExec",
    decimals: 9,
    address: "0x607f4c5bb672230e8672085532f7e901544a7375",
    slug: "rlc"
  },
  TRST: {
    name: "Trustcoin",
    decimals: 6,
    address: "0xcb94be6f13a1182e4a4b6140cb7bf2025d28e41b",
    slug: "trust"
  },
  GNO: {
    name: "Gnosis",
    decimals: 18,
    address: "0x6810e776880c02933d47db1b9fc05908e5386b96",
    slug: "gnosis-gno"
  },
  WINGS: {
    name: "WINGS",
    decimals: 18,
    address: "0x667088b212ce3d06a1b553a7221e1fd19000d9af",
    slug: "wings"
  },
  TKN: {
    name: "Monolith",
    decimals: 8,
    address: "0xaaaf91d9b90df800df4f55c205fd6989c977e73a",
    slug: "tokencard"
  },
  HMQ: {
    name: "Humaniq",
    decimals: 8,
    address: "0xcbcc0f036ed4788f63fc0fee32873d6a7487b908",
    slug: "humaniq"
  },
  ANT: {
    name: "Aragon",
    decimals: 18,
    address: "0x960b236a07cf122663c4303350609a66a7b288c0",
    slug: "aragon"
  },
  BAT: {
    name: "Basic Attention Token",
    decimals: 18,
    address: "0x0d8775f648430679a709e98d2b0cb6250d2887ef",
    slug: "basic-attention-token"
  },
  MYST: {
    name: "Mysterium",
    decimals: 8,
    address: "0xa645264c5603e96c3b0b078cdab68733794b0a71",
    slug: "mysterium"
  },
  BNT: {
    name: "Bancor",
    decimals: 18,
    address: "0x1f573d6fb3f13d689ff844b4ce37794d79a7ff1c",
    slug: "bancor"
  },
  SNT: {
    name: "Status",
    decimals: 18,
    address: "0x744d70fdbe2ba4cf95131626614a1763df805b9e",
    slug: "status"
  },
  SNM: {
    name: "SONM",
    decimals: 18,
    address: "0x983f6d60db79ea8ca4eb9968c6aff8cfa04b3c63",
    slug: "sonm"
  },
  NMR: {
    name: "Numeraire",
    decimals: 18,
    address: "0x1776e1f26f98b1a5df9cd347953a26dd3cb46671",
    slug: "numeraire"
  },
  PAY: {
    name: "TenX",
    decimals: 18,
    address: "0xb97048628db6b661d4c2aa833e95dbe1a905b280",
    slug: "tenx"
  },
  PPT: {
    name: "Populous",
    decimals: 8,
    address: "0xd4fa1460f537bb9085d22c7bccb5dd450ef28e3a",
    slug: "populous"
  },
  FUN: {
    name: "FunFair",
    decimals: 8,
    address: "0x419d0d8bdd9af5e606ae2232ed285aff190e711b",
    slug: "funfair"
  },
  ADT: {
    name: "AdToken",
    decimals: 9,
    address: "0xd0d6d6c5fe4a677d343cc433536bb717bae167dd",
    slug: "adtoken"
  },
  STORJ: {
    name: "StorjToken",
    decimals: 8,
    address: "0xb64ef51c888972c908cfacf59b47c1afbc0ab8ac",
    slug: "storj"
  },
  ADX: {
    name: "AdEx",
    decimals: 4,
    address: "0x4470bb87d77b963a013db939be332f927f2b992e",
    slug: "adx-net"
  },
  MTL: {
    name: "Metal",
    decimals: 8,
    address: "0xf433089366899d83a9f26a773d59ec7ecf30355e",
    slug: "metal"
  },
  PLR: {
    name: "PILLAR",
    decimals: 18,
    address: "0xe3818504c1b32bf1557b16c238b2e01fd3149c17",
    slug: "pillar"
  },
  CVC: {
    name: "Civic",
    decimals: 8,
    address: "0x41e5560054824ea6b0732e656e3ad64e20e94e45",
    slug: "civic"
  },
  IXT: {
    name: "iXledger",
    decimals: 8,
    address: "0xfca47962d45adfdfd1ab2d972315db4ce7ccf094",
    slug: "ixledger"
  },
  DNT: {
    name: "district0x",
    decimals: 18,
    address: "0x0abdace70d3790235af448c88547603b945604ea",
    slug: "district0x"
  },
  ETHOS: {
    name: "Ethos",
    decimals: 8,
    address: "0x5af2be193a6abca9c8817001f45744777db30756",
    slug: "ethos"
  },
  STX: {
    name: "Stox",
    decimals: 18,
    address: "0x006bea43baa3f7a6f765f14f10a1a1b08334ef45",
    slug: "stox"
  },
  DENT: {
    name: "DENT",
    decimals: 8,
    address: "0x3597bfd533a99c9aa083587b074434e61eb0a258",
    slug: "dent"
  },
  SAN: {
    name: "SANtiment",
    decimals: 18,
    address: "0x7c5a0ce9267ed19b22f8cae653f198e3e8daf098",
    slug: "santiment"
  },
  ZRX: {
    name: "0x",
    decimals: 18,
    address: "0xe41d2489571d322189246dafa5ebde1f4699f498",
    slug: "0x"
  },
  MCO: {
    name: "crypto.com",
    decimals: 8,
    address: "0xb63b606ac810a52cca15e44bb630fd42d8d1d83d",
    slug: "crypto-com"
  },
  POE: {
    name: "Poet",
    decimals: 8,
    address: "0x0e0989b1f9b8a38983c2ba8053269ca62ec9b195",
    slug: "poet"
  },
  WTT: {
    name: "Cryptonomos",
    decimals: 0,
    address: "0x84119cb33e8f590d75c2d6ea4e6b0741a7494eda"
  },
  SCL: {
    name: "SOCIAL",
    decimals: 8,
    address: "0xd7631787b4dcc87b1254cfd1e5ce48e96823dee8",
    slug: "sociall"
  },
  RVT: {
    name: "RvT",
    decimals: 18,
    address: "0x3d1ba9be9f66b8ee101911bc36d3fb562eac2244",
    slug: "rivetz"
  },
  TNT: {
    name: "Tierion",
    decimals: 8,
    address: "0x08f5a9235b08173b7569f83645d2c7fb55e8ccd8",
    slug: "tierion"
  },
  REX: {
    name: "imbrex",
    decimals: 18,
    address: "0xf05a9382a4c3f29e2784502754293d88b835109c",
    slug: "imbrex"
  },
  MANA: {
    name: "Decentraland",
    decimals: 18,
    address: "0x0f5d2fb29fb7d3cfee444a200298f468908cc942",
    slug: "decentraland"
  },
  KICK: {
    name: "KickCoin",
    decimals: 8,
    address: "0x27695e09149adc738a978e9a678f99e4c39e9eb9",
    slug: "kickico"
  },
  MTH: {
    name: "Monetha",
    decimals: 5,
    address: "0xaf4dce16da2877f8c9e00544c93b62ac40631f16",
    slug: "monetha"
  },
  WTC: {
    name: "Walton",
    decimals: 18,
    address: "0xb7cb1c96db6b22b0d3d9536e0108d062bd488f74",
    slug: "waltonchain"
  },
  ELIX: {
    name: "elixir",
    decimals: 18,
    address: "0xc8c6a31a4a806d3710a7b38b7b296d2fabccdba8",
    slug: "elixir"
  },
  UMC: {
    name: "UmbrellaCoin",
    decimals: 6,
    address: "0x190fb342aa6a15eb82903323ae78066ff8616746"
  },
  ART: {
    name: "Maecenas",
    decimals: 18,
    address: "0xfec0cf7fe078a500abf15f1284958f22049c2c7e",
    slug: "maecenas"
  },
  PRO2: {
    name: "Propy",
    decimals: 8,
    address: "0x226bb599a12c826476e3a771454697ea52e9e220",
    slug: "propy"
  },
  HBT: {
    name: "Hubiits",
    decimals: 15,
    address: "0xdd6c68bb32462e01705011a4e2ad1a60740f217f",
    slug: "hubii-network"
  },
  KNC: {
    name: "Kyber",
    decimals: 18,
    address: "0xdd974d5c2e2928dea5f71b9825b8b646686bd200",
    slug: "kyber-network"
  },
  RLX: {
    name: "Relex",
    decimals: 18,
    address: "0x4a42d2c580f83dce404acad18dab26db11a1750e",
    slug: "relex"
  },
  LINK: {
    name: "ChainLink",
    decimals: 18,
    address: "0x514910771af9ca656af840dff83e8264ecf986ca",
    slug: "chainlink"
  },
  TFT: {
    name: "Travelling",
    decimals: 8,
    address: "0x13ea82d5e1a811f55bda9c86fdd6195a6bd23aed"
  },
  RPL: {
    name: "Rocket Pool",
    decimals: 18,
    address: "0xb4efd85c19999d84251304bda99e90b92300bd93",
    slug: "rocket-pool"
  },
  CND: {
    name: "Cindicator",
    decimals: 18,
    address: "0xd4c435f5b09f855c3317c8524cb1f586e42795fa",
    slug: "cindicator"
  },
  BTM: {
    name: "Bytom",
    decimals: 8,
    address: "0xcb97e65f07da24d46bcdd078ebebd7c6e6e3d750"
  },
  SALT: {
    name: "SALT Lending",
    decimals: 8,
    address: "0x4156d3342d5c385a87d264f90653733592000581",
    slug: "salt"
  },
  HVN: {
    name: "Hive",
    decimals: 8,
    address: "0xc0eb85285d83217cd7c891702bcbc0fc401e2d9d",
    slug: "hiveterminal-token"
  },
  EVX: {
    name: "Everex",
    decimals: 4,
    address: "0xf3db5fa2c66b7af3eb0c0b782510816cbe4813b8",
    slug: "everex"
  },
  ENG: {
    name: "Enigma",
    decimals: 8,
    address: "0xf0ee6b27b759c9893ce4f094b49ad28fd15a23e4",
    slug: "enigma"
  },
  AST: {
    name: "AirSwap",
    decimals: 4,
    address: "0x27054b13b1b798b345b591a4d22e6562d47ea75a",
    slug: "airswap"
  },
  REQ: {
    name: "Request Network",
    decimals: 18,
    address: "0x8f8221afbb33998d8584a2b05749ba73c37a938a",
    slug: "request"
  },
  ENJ: {
    name: "EnjinCoin",
    decimals: 18,
    address: "0xf629cbd94d3791c9250152bd8dfbdf380e2a3b9c",
    slug: "enjin-coin"
  },
  DATA: {
    name: "Streamr",
    decimals: 18,
    address: "0x0cf0ee63788a0849fe5297f3407f701e122cc023",
    slug: "streamr-datacoin"
  },
  ALIS: {
    name: "ALIS Media",
    decimals: 18,
    address: "0xea610b1153477720748dc13ed378003941d84fab",
    slug: "alis"
  },
  VIB: {
    name: "Viberate",
    decimals: 18,
    address: "0x2c974b2d0ba1716e644c1fc59982a89ddd2ff724",
    slug: "viberate"
  },
  RCN: {
    name: "Ripio",
    decimals: 18,
    address: "0xf970b8e36e23f7fc3fd752eea86f8be8d83375a6",
    slug: "ripio-credit-network"
  },
  EDO: {
    name: "Eidoo",
    decimals: 18,
    address: "0xced4e93198734ddaff8492d525bd258d49eb388e",
    slug: "eidoo"
  },
  BLUE: {
    name: "Ethereum Blue",
    decimals: 8,
    address: "0x539efe69bcdd21a83efd9122571a64cc25e0282b",
    slug: "ethereum-blue"
  },
  ACC: {
    name: "Accelerator",
    decimals: 18,
    address: "0x13f1b7fdfbe1fc66676d56483e21b1ecb40b58e2"
  },
  ARN: {
    name: "Aeron",
    decimals: 8,
    address: "0xba5f11b16b155792cf3b2e6880e8706859a8aeb6",
    slug: "aeron"
  },
  LIFE: {
    name: "LIFE Token",
    decimals: 18,
    address: "0xff18dbc487b4c2e3222d115952babfda8ba52f5f",
    slug: "life"
  },
  EPY: {
    name: "Emphy",
    decimals: 8,
    address: "0x50ee674689d75c0f88e8f83cfe8c4b69e8fd590d",
    slug: "emphy"
  },
  SWM: {
    name: "Swarm Fund Token",
    decimals: 18,
    address: "0x9e88613418cf03dca54d6a2cf6ad934a78c7a17a",
    slug: "swarm-fund"
  },
  EXMR: {
    name: "EXMR",
    decimals: 8,
    address: "0xc98e0639c6d2ec037a615341c369666b110e80e5",
    slug: "exmr"
  },
  RDN: {
    name: "Raiden",
    decimals: 18,
    address: "0x255aa6df07540cb5d3d297f0d0d4d84cb52bc8e6",
    slug: "raiden-network-token"
  },
  GRID: {
    name: "Grid+",
    decimals: 12,
    address: "0x12b19d3e2ccc14da04fae33e63652ce469b3f2fd",
    slug: "grid"
  },
  UKG: {
    name: "Unikoin Gold",
    decimals: 18,
    address: "0x24692791bc444c5cd0b81e3cbcaba4b04acd1f3b",
    slug: "unikoin-gold"
  },
  GVT: {
    name: "Genesis Vision",
    decimals: 18,
    address: "0x103c3a209da59d3e7c4a89307e66521e081cfdf0",
    slug: "genesis-vision"
  },
  ASTRO: {
    name: "AstroTokens",
    decimals: 4,
    address: "0x7b22938ca841aa392c93dbb7f4c42178e3d65e88"
  },
  DNA: {
    name: "Gene-Chain Coin",
    decimals: 18,
    address: "0x82b0e50478eeafde392d45d1259ed1071b6fda81",
    slug: "encrypgen"
  },
  COV: {
    name: "Covesting",
    decimals: 18,
    address: "0xe2fb6529ef566a080e6d23de0bd351311087d567",
    slug: "covesting"
  },
  LEND: {
    name: "ETHLend",
    decimals: 18,
    address: "0x80fb784b7ed66730e8b1dbd9820afd29931aab03",
    slug: "ethlend"
  },
  PKT: {
    name: "PlayKey Token",
    decimals: 18,
    address: "0x2604fa406be957e542beb89e6754fcde6815e83f",
    slug: "playkey"
  },
  ITT: {
    name: "ITT",
    decimals: 8,
    address: "0x0aef06dcccc531e581f0440059e6ffcc206039ee",
    slug: "intelligent-trading-foundation"
  },
  DRGN: {
    name: "Dragonchain",
    decimals: 18,
    address: "0x419c4db4b9e25d6db2ad9691ccb832c8d9fda05e",
    slug: "dragonchain"
  },
  NIO: {
    name: "Autonio",
    decimals: 0,
    address: "0x5554e04e76533e1d14c52f05beef6c9d329e1e30",
    slug: "autonio"
  },
  GET: {
    name: "GUTS",
    decimals: 18,
    address: "0x8a854288a5976036a725879164ca3e91d30c6a1b",
    slug: "get-protocol"
  },
  BNTY: {
    name: "Bounty0x",
    decimals: 18,
    address: "0xd2d6158683aee4cc838067727209a0aaf4359de3",
    slug: "bounty0x"
  },
  CAJ: {
    name: "Cajutel",
    decimals: 18,
    address: "0x3c6a7ab47b5f058be0e7c7fe1a4b7925b8aca40e",
    slug: "cajutel"
  },
  SPANK: {
    name: "SpankChain",
    decimals: 18,
    address: "0x42d6622dece394b54999fbd73d108123806f6a18",
    slug: "spankchain"
  },
  BKX: {
    name: "BANKEX",
    decimals: 18,
    address: "0x45245bc59219eeaaf6cd3f382e078a461ff9de7b",
    slug: "bankex"
  },
  BLT: {
    name: "Bloom",
    decimals: 18,
    address: "0x107c4504cd79c5d2696ea0030a8dd4e92601b82e",
    slug: "bloomtoken"
  },
  EXRN: {
    name: "EXRNchain",
    decimals: 0,
    address: "0xe469c4473af82217b30cf17b10bcdb6c8c796e75",
    slug: "exrnchain"
  },
  WAX: {
    name: "Worldwide Asset eXchange",
    decimals: 8,
    address: "0x39bb259f66e1c59d5abef88375979b4d20d98022",
    slug: "wax"
  },
  AIX: {
    name: "Aigang",
    decimals: 18,
    address: "0x1063ce524265d5a3a624f4914acd573dd89ce988",
    slug: "aigang"
  },
  DAI: {
    name: "Maker DAI",
    decimals: 18,
    address: "0x89d24a6b4ccb1b6faa2625fe562bdd9a23260359"
  },
  GIM: {
    name: "Gimli",
    decimals: 8,
    address: "0xae4f56f072c34c0a65b3ae3e4db797d831439d93"
  },
  CAT2: {
    name: "BitClave",
    decimals: 18,
    address: "0x1234567461d3f8db7496581774bd869c83d51c93",
    slug: "bitclave"
  },
  CAT: {
    name: "BlockCAT",
    decimals: 18,
    address: "0x56ba2ee7890461f463f7be02aac3099f6d5811a8",
    slug: "blockcat"
  },
  MKR: {
    name: "Maker",
    decimals: 18,
    address: "0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2",
    slug: "maker"
  },
  DMT: {
    name: "DMarket",
    decimals: 8,
    address: "0x2ccbff3a042c68716ed2a2cb0c544a9f1d1935e1",
    slug: "dmarket"
  },
  TAU: {
    name: "Lamden",
    decimals: 18,
    address: "0xc27a2f05fa577a83ba0fdb4c38443c0718356501",
    slug: "lamden"
  },
  CRED: {
    name: "Verify",
    decimals: 18,
    address: "0x672a1ad4f667fb18a333af13667aa0af1f5b5bdd",
    slug: "verify"
  },
  VEE: {
    name: "blockv",
    decimals: 18,
    address: "0x340d2bde5eb28c1eed91b2f790723e3b160613b7",
    slug: "blockv"
  },
  UFR: {
    name: "upfiring",
    decimals: 18,
    address: "0xea097a2b1db00627b2fa17460ad260c016016977",
    slug: "upfiring"
  },
  SXUT: {
    name: "Spectre U-Token",
    decimals: 18,
    address: "0x2c82c73d5b34aa015989462b2948cd616a37641f",
    slug: "spectre-utility"
  },
  WABI: {
    name: "WaBi",
    decimals: 18,
    address: "0x286bda1413a2df81731d4930ce2f862a35a609fe",
    slug: "tael"
  },
  APPC: {
    name: "AppCoins",
    decimals: 18,
    address: "0x1a7a8bd9106f2b8d977e08582dc7d24c723ab0db",
    slug: "appcoins"
  },
  BDG: {
    name: "Bitdegree",
    decimals: 18,
    address: "0x1961b3331969ed52770751fc718ef530838b6dee",
    slug: "bitdegree"
  },
  WAND: {
    name: "WANDX",
    decimals: 18,
    address: "0x27f610bf36eca0939093343ac28b1534a721dbb4",
    slug: "wandx"
  },
  LEV: {
    name: "LeverJ",
    decimals: 9,
    address: "0x0f4ca92660efad97a9a70cb0fe969c755439772c",
    slug: "leverj"
  },
  REF: {
    name: "RefToken",
    decimals: 8,
    address: "0x89303500a7abfb178b274fd89f2469c264951e1f",
    slug: "reftoken"
  },
  TEL: {
    name: "Telcoin",
    decimals: 2,
    address: "0x85e076361cc813a908ff672f9bad1541474402b2",
    slug: "telcoin"
  },
  INS: {
    name: "INS Ecosystem",
    decimals: 10,
    address: "0x5b2e4a700dfbc560061e957edec8f6eeeb74a320",
    slug: "insolar"
  },
  NEU: {
    name: "Neumark",
    decimals: 18,
    address: "0xa823e6722006afe99e91c30ff5295052fe6b8e32",
    slug: "neumark"
  },
  HQX: {
    name: "Hoqu",
    decimals: 18,
    address: "0x1b957dc4aefeed3b4a2351a6a6d5cbfbba0cecfa",
    slug: "hoqu"
  },
  POWR: {
    name: "Power Ledger",
    decimals: 6,
    address: "0x595832f8fc6bf59c85c527fec3740a1b7a361269",
    slug: "power-ledger"
  },
  KEY: {
    name: "SelfKey",
    decimals: 18,
    address: "0x4cc19356f2d37338b9802aa8e8fc58b0373296e7",
    slug: "selfkey"
  },
  PRFT: {
    name: "Proof",
    decimals: 18,
    address: "0xc5cea8292e514405967d958c2325106f2f48da77"
  },
  H2O: {
    name: "Hydrominer",
    decimals: 18,
    address: "0xfeed1a53bd53ffe453d265fc6e70dd85f8e993b6"
  },
  STK: {
    name: "STACK",
    decimals: 18,
    address: "0xae73b38d1c9a8b274127ec30160a4927c4d71824",
    slug: "stk"
  },
  ARY: {
    name: "Blockarray",
    decimals: 18,
    address: "0xa5f8fc0921880cb7342368bd128eb8050442b1a1",
    slug: "block-array"
  },
  CRPT: {
    name: "Crypterium",
    decimals: 18,
    address: "0x80a7e048f37a50500351c204cb407766fa3bae7f",
    slug: "crpt"
  },
  SAL: {
    name: "SALPay",
    decimals: 18,
    address: "0x75c5ee419331b6150879530d06f9ba054755f1da",
    slug: "salpay"
  },
  ELF: {
    name: "Aelf",
    decimals: 18,
    address: "0xbf2179859fc6d5bee9bf9158632dc51678a4100e",
    slug: "aelf"
  },
  QSP: {
    name: "Quantstamp",
    decimals: 18,
    address: "0x99ea4db9ee77acd40b119bd1dc4e33e1c070b80d",
    slug: "quantstamp"
  },
  CBT: {
    name: "CommerceBlock",
    decimals: 18,
    address: "0x076c97e1c869072ee22f8c91978c99b4bcb02591",
    slug: "commerceblock"
  },
  INXT: {
    name: "Internxt",
    decimals: 8,
    address: "0xa8006c4ca56f24d6836727d106349320db7fef82",
    slug: "internxt"
  },
  PRO: {
    name: "ProChain",
    decimals: 18,
    address: "0x9041fe5b3fdea0f5e4afdc17e75180738d877a01",
    slug: "prochain"
  },
  IDXM: {
    name: "IDEX Membership",
    decimals: 8,
    address: "0xcc13fc627effd6e35d2d2706ea3c4d7396c610ea",
    slug: "idex-membership"
  },
  REAL: {
    name: "Real.Markets",
    decimals: 18,
    address: "0x9214ec02cb71cba0ada6896b8da260736a67ab10",
    slug: "real"
  },
  AGI: {
    name: "Singularity.net",
    decimals: 8,
    address: "0x8eb24319393716668d768dcec29356ae9cffe285",
    slug: "singularitynet"
  },
  MIRO: {
    name: "Mirocana",
    decimals: 8,
    address: "0x0168703872fa06741ecaa9dff7803168e83f7ae0"
  },
  SKR: {
    name: "Skrilla",
    decimals: 6,
    address: "0x4c382f8e09615ac86e08ce58266cc227e7d4d913"
  },
  STORM: {
    name: "Storm Market",
    decimals: 18,
    address: "0xd0a4b8946cb52f0661273bfbc6fd0e0c75fc6433",
    slug: "storm"
  },
  BTO: {
    name: "Bottos",
    decimals: 18,
    address: "0x36905fc93280f52362a1cbab151f25dc46742fb5",
    slug: "bottos"
  },
  JNT: {
    name: "Jibrel Network Token",
    decimals: 18,
    address: "0xa5fd1a791c4dfcaacc963d4f73c6ae5824149ea7",
    slug: "jibrel-network"
  },
  EQC: {
    name: "Qchain",
    decimals: 8,
    address: "0xc438b4c0dfbb1593be6dee03bbd1a84bb3aa6213"
  },
  SRN: {
    name: "SIRIN LABS",
    decimals: 18,
    address: "0x68d57c9a1c35f63e2c83ee8e49a64e9d70528d25",
    slug: "sirin-labs-token"
  },
  DAT: {
    name: "Datum",
    decimals: 18,
    address: "0x81c9151de0c8bafcd325a57e3db5a5df1cebf79c",
    slug: "datum"
  },
  IDH: {
    name: "INDAHASH COIN",
    decimals: 6,
    address: "0x5136c98a80811c3f46bdda8b5c4555cfd9f812f0",
    slug: "indahash"
  },
  LOCI: {
    name: "LOCIcoin",
    decimals: 18,
    address: "0x9c23d67aea7b95d80942e3836bcdf7e708a747c2",
    slug: "locicoin"
  },
  ESZ: {
    name: "ESZCoin",
    decimals: 18,
    address: "0xe8a1df958be379045e2b46a31a98b93a2ecdfded",
    slug: "ethersportz"
  },
  SETH: {
    name: "Sether",
    decimals: 18,
    address: "0x78b039921e84e726eb72e7b1212bb35504c645ca",
    slug: "sether"
  },
  BCDT: {
    name: "BCDiploma",
    decimals: 18,
    address: "0xacfa209fb73bf3dd5bbfb1101b9bc999c49062a5",
    slug: "blockchain-certified-data-token"
  },
  TTT: {
    name: "Tap Coin",
    decimals: 18,
    address: "0x9f599410d207f3d2828a8712e5e543ac2e040382"
  },
  CXO: {
    name: "CargoX",
    decimals: 18,
    address: "0xb6ee9668771a79be7967ee29a63d4184f8097143",
    slug: "cargox"
  },
  WISH: {
    name: "MyWish",
    decimals: 18,
    address: "0x1b22c32cd936cb97c28c5690a0695a82abf688e6",
    slug: "mywish"
  },
  EVE: {
    name: "Devery",
    decimals: 18,
    address: "0x923108a439c4e8c2315c4f6521e5ce95b44e9b4c",
    slug: "devery"
  },
  NEXT: {
    name: "NEXT.exchange",
    decimals: 18,
    address: "0x4e005a760e00e17c4912a8070eec047cfecbabbb",
    slug: "next-exchange"
  },
  CV: {
    name: "CarVertical",
    decimals: 18,
    address: "0xda6cb58a0d0c01610a29c5a65c303e13e885887c",
    slug: "carvertical"
  },
  TRAC: {
    name: "Origin Trail",
    decimals: 18,
    address: "0xaa7a9ca87d3694b5755f213b5d04094b8d0f0a6f",
    slug: "origintrail"
  },
  QASH: {
    name: "QASH",
    decimals: 6,
    address: "0x618e75ac90b12c6049ba3b27f5d5f8651b0037f6",
    slug: "qash"
  },
  PARETO: {
    name: "Pareto Network",
    decimals: 18,
    address: "0xea5f88e54d982cbb0c441cde4e79bc305e5b43bc",
    slug: "pareto-rewards"
  },
  IOST: {
    name: "IOS",
    decimals: 18,
    address: "0xfa1a856cfa3409cfa145fa4e20eb270df3eb21ab",
    slug: "iostoken"
  },
  DTA: {
    name: "DATA",
    decimals: 18,
    address: "0x69b148395ce0015c13e36bffbad63f49ef874e03",
    slug: "data"
  },
  COFI: {
    name: "CoinFI",
    decimals: 18,
    address: "0x3136ef851592acf49ca4c825131e364170fa32b3",
    slug: "coinfi"
  },
  CHSB: {
    name: "SwissBorg",
    decimals: 8,
    address: "0xba9d4199fab4f26efe3551d490e3821486f135ba",
    slug: "swissborg"
  },
  FOTA: {
    name: "Fortuna",
    decimals: 18,
    address: "0x4270bb238f6dd8b1c3ca01f96ca65b2647c06d3c",
    slug: "fortuna"
  },
  CPC: {
    name: "CPChain",
    decimals: 18,
    address: "0xfae4ee59cdd86e3be9e8b90b53aa866327d7c090",
    slug: "cpchain"
  },
  ADB: {
    name: "Adbank",
    decimals: 18,
    address: "0x2baac9330cf9ac479d819195794d79ad0c7616e3",
    slug: "adbank"
  },
  ING: {
    name: "Iungo",
    decimals: 18,
    address: "0x24ddff6d8b8a42d835af3b440de91f3386554aa4",
    slug: "iungo"
  },
  STAR: {
    name: "Starbase",
    decimals: 18,
    address: "0xf70a642bd387f94380ffb90451c2c81d4eb82cbc",
    slug: "starbase"
  },
  POLY: {
    name: "Polymath",
    decimals: 18,
    address: "0x9992ec3cf6a55b00978cddf2b27bc6882d88d1ec",
    slug: "polymath-network"
  },
  MTN: {
    name: "MedToken",
    decimals: 18,
    address: "0x41dbecc1cdc5517c6f76f6a6e836adbee2754de3",
    slug: "medical-chain"
  },
  BEE: {
    name: "Bee Token",
    decimals: 18,
    address: "0x4d8fc1453a0f359e99c9675954e656d80d996fbf",
    slug: "bee-token"
  },
  BLZ: {
    name: "Bluzelle",
    decimals: 18,
    address: "0x5732046a883704404f284ce41ffadd5b007fd668",
    slug: "bluzelle"
  },
  MWAT: {
    name: "RED MWAT",
    decimals: 18,
    address: "0x6425c6be902d692ae2db752b3c268afadb099d3b",
    slug: "restart-energy-mwat"
  },
  WPR: {
    name: "WePower Token",
    decimals: 18,
    address: "0x4cf488387f035ff08c371515562cba712f9015d4",
    slug: "wepower"
  },
  SIG: {
    name: "Spectiv Signal",
    decimals: 18,
    address: "0x6888a16ea9792c15a4dcf2f6c623d055c8ede792",
    slug: "signal-token"
  },
  REN: {
    name: "Republic Token",
    decimals: 18,
    address: "0x408e41876cccdc0f92210600ef50372656052a38",
    slug: "ren"
  },
  DADI: {
    name: "DADI",
    decimals: 18,
    address: "0xfb2f26f266fb2805a387230f2aa0a331b4d96fba",
    slug: "dadi"
  },
  LHCOIN: {
    name: "LHCoin",
    decimals: 8,
    address: "0x0778cc2e8bbad3d483e82371606d100cc8604522"
  },
  OPT: {
    name: "OPUS",
    decimals: 18,
    address: "0x4355fc160f74328f9b383df2ec589bb3dfd82ba0",
    slug: "opus"
  },
  REM: {
    name: "REMME",
    decimals: 4,
    address: "0x83984d6142934bb535793a82adb0a46ef0f66b6d",
    slug: "remme"
  },
  DXT: {
    name: "DataWallet Token",
    decimals: 8,
    address: "0x8db54ca569d3019a2ba126d03c37c44b5ef81ef6",
    slug: "datawallet"
  },
  DAN: {
    name: "DAN Token",
    decimals: 10,
    address: "0x9b70740e708a083c6ff38df52297020f5dfaa5ee",
    slug: "daneel"
  },
  TKT: {
    name: "CryptoTickets COIN",
    decimals: 18,
    address: "0x233cea452c8b2e46f54d3772592edfeb8edbb763"
  },
  CRC: {
    name: "Crycash",
    decimals: 18,
    address: "0xf41e5fbc2f6aac200dd8619e121ce1f05d150077",
    slug: "crycash"
  },
  HKN: {
    name: "HACKEN",
    decimals: 8,
    address: "0x9e6b2b11542f2bc52f3029077ace37e8fd838d7f",
    slug: "hacken"
  },
  FSN: {
    name: "Fusion Token",
    decimals: 18,
    address: "0xd0352a019e9ab9d757776f532377aaebd36fd541",
    slug: "fusion"
  },
  DTH: {
    name: "Dether",
    decimals: 18,
    address: "0x5adc961d6ac3f7062d2ea45fefb8d8167d44b190",
    slug: "dether"
  },
  X8X: {
    name: "X8X Token",
    decimals: 18,
    address: "0x910dfc18d6ea3d6a7124a6f8b5458f281060fa4c",
    slug: "x8x-token"
  },
  MTRC: {
    name: "ModulTrade",
    decimals: 18,
    address: "0x1e49ff77c355a3e38d6651ce8404af0e48c5395f",
    slug: "modultrade"
  },
  ITC: {
    name: "IoT Chain",
    decimals: 18,
    address: "0x5e6b6d9abad9093fdc861ea1600eba1b355cd940",
    slug: "iot-chain"
  },
  RFR: {
    name: "Refereum",
    decimals: 4,
    address: "0xd0929d411954c47438dc1d871dd6081f5c5e149c",
    slug: "refereum"
  },
  FND: {
    name: "FundRequest",
    decimals: 18,
    address: "0x4df47b4969b2911c966506e3592c41389493953b",
    slug: "fundrequest"
  },
  AUN: {
    name: "Authoreon",
    decimals: 18,
    address: "0x5b7093fe2491dfb058c94bcd62a1cd4d822f884c"
  },
  NTK: {
    name: "NeuroToken",
    decimals: 18,
    address: "0x69beab403438253f13b6e92db91f7fb849258263",
    slug: "neurotoken"
  },
  GEM: {
    name: "Gems",
    decimals: 18,
    address: "0xc7bba5b765581efb2cdd2679db5bea9ee79b201f",
    slug: "gems-protocol"
  },
  CS: {
    name: "CREDITS",
    decimals: 6,
    address: "0x46b9ad944d1059450da1163511069c718f699d31",
    slug: "credits"
  },
  DRG: {
    name: "DRAGON",
    decimals: 8,
    address: "0x814f67fa286f7572b041d041b1d99b432c9155ee",
    slug: "dragon-coins"
  },
  NGC: {
    name: "NAGA",
    decimals: 18,
    address: "0x72dd4b6bd852a3aa172be4d6c5a6dbec588cf131",
    slug: "naga"
  },
  MNTP: {
    name: "Goldmint",
    decimals: 18,
    address: "0x83cee9e086a77e492ee0bb93c2b0437ad6fdeccc"
  },
  LION: {
    name: "CoinLion",
    decimals: 18,
    address: "0x2167fb82309cf76513e83b25123f8b0559d6b48f",
    slug: "coin-lion"
  },
  LIF: {
    name: "Lif",
    decimals: 18,
    address: "0xeb9951021698b42e4399f9cbb6267aa35f82d59d",
    slug: "winding-tree"
  },
  FKX: {
    name: "KnoxsterToken",
    decimals: 18,
    address: "0x009e864923b49263c7f10d19b7f8ab7a9a5aad33",
    slug: "knoxstertoken"
  },
  STQ: {
    name: "Storiqa",
    decimals: 18,
    address: "0x5c3a228510d246b78a3765c20221cbf3082b44a4",
    slug: "storiqa"
  },
  UTK: {
    name: "UTRUST",
    decimals: 18,
    address: "0x70a72833d6bf7f508c8224ce59ea1ef3d0ea3a38",
    slug: "utrust"
  },
  PRIX: {
    name: "Privatix",
    decimals: 8,
    address: "0x3adfc4999f77d04c8341bac5f3a76f58dff5b37a",
    slug: "privatix"
  },
  SENT: {
    name: "Sentinel",
    decimals: 8,
    address: "0xa44e5137293e855b1b7bc7e2c6f8cd796ffcb037",
    slug: "sentinel"
  },
  EXY: {
    name: "Experty",
    decimals: 18,
    address: "0x5c743a35e903f6c584514ec617acee0611cf44f3",
    slug: "experty"
  },
  XNK: {
    name: "Ink Protocol",
    decimals: 18,
    address: "0xbc86727e770de68b1060c91f6bb6945c73e10388",
    slug: "ink-protocol"
  },
  DOCK: {
    name: "Dock Token",
    decimals: 18,
    address: "0xe5dada80aa6477e85d09747f2842f7993d0df71c",
    slug: "dock"
  },
  FT: {
    name: "Fabric Token",
    decimals: 18,
    address: "0x78a73b6cbc5d183ce56e786f6e905cadec63547b",
    slug: "fabric-token"
  },
  FDZ: {
    name: "Friendz Coin",
    decimals: 18,
    address: "0x23352036e911a22cfc692b5e2e196692658aded9",
    slug: "friends"
  },
  SCT: {
    name: "Soma Community Token",
    decimals: 18,
    address: "0x63b992e6246d88f07fc35a056d2c365e6d441a3d",
    slug: "soma"
  },
  LALA: {
    name: "LALA",
    decimals: 18,
    address: "0xfd107b473ab90e8fbd89872144a3dc92c40fa8c9",
    slug: "lala-world"
  },
  ELEC: {
    name: "ElectrifyAsia",
    decimals: 18,
    address: "0xd49ff13661451313ca1553fd6954bd1d9b6e02b9",
    slug: "electrifyasia"
  },
  NCT: {
    name: "Nectar",
    decimals: 18,
    address: "0x9e46a38f5daabe8683e10793b06749eef7d733d1",
    slug: "polyswarm"
  },
  LNC: {
    name: "Lancer Token",
    decimals: 18,
    address: "0x63e634330a20150dbb61b15648bc73855d6ccf07",
    slug: "blocklancer"
  },
  J8T: {
    name: "JET8 Token",
    decimals: 8,
    address: "0x0d262e5dc4a06a0f1c90ce79c7a60c09dfc884e4",
    slug: "jet8"
  },
  BANCA: {
    name: "BANCA Token",
    decimals: 18,
    address: "0x998b3b82bc9dba173990be7afb772788b5acb8bd",
    slug: "banca"
  },
  SENSE: {
    name: "SENSE",
    decimals: 8,
    address: "0x6745fab6801e376cd24f03572b9c9b0d4edddccf",
    slug: "sense"
  },
  SHIP: {
    name: "ShipChain",
    decimals: 18,
    address: "0xe25b0bba01dc5630312b6a21927e578061a13f55",
    slug: "shipchain"
  },
  TFD: {
    name: "TE-FOOD",
    decimals: 18,
    address: "0xe5f166c0d8872b68790061317bb6cca04582c912",
    slug: "te-food"
  },
  AMB: {
    name: "Amber Token",
    decimals: 18,
    address: "0x4dc3643dbc642b72c158e7f3d2ff232df61cb6ce",
    slug: "amber"
  },
  BAX: {
    name: "BABB",
    decimals: 18,
    address: "0x9a0242b7a33dacbe40edb927834f96eb39f8fbcb",
    slug: "babb"
  },
  NPX: {
    name: "NapoleonX",
    decimals: 2,
    address: "0x28b5e12cce51f15594b0b91d5b5adaa70f684a02",
    slug: "napoleonx"
  },
  VST: {
    name: "Vestarin",
    decimals: 18,
    address: "0x552ed8253f341fb770e8badff5a0e0ee2fd57b43"
  },
  LOC: {
    name: "LockChain",
    decimals: 18,
    address: "0x5e3346444010135322268a4630d2ed5f8d09446c",
    slug: "lockchain"
  },
  BMH: {
    name: "BlockMesh",
    decimals: 18,
    address: "0xf03045a4c8077e38f3b8e2ed33b8aee69edf869f",
    slug: "blockmesh"
  },
  NCASH: {
    name: "Nucleus Vision",
    decimals: 18,
    address: "0x809826cceab68c387726af962713b64cb5cb3cca",
    slug: "nucleus-vision"
  },
  IGNX: {
    name: "Ignite",
    decimals: 18,
    address: "0xafd8f91c4d7c2e3240f4154a1c596048035eb63c"
  },
  AMN: {
    name: "Amon",
    decimals: 18,
    address: "0x737f98ac8ca59f2c68ad658e3c3d8c8963e40a4c",
    slug: "amon"
  },
  YUP: {
    name: "Crowdholding",
    decimals: 18,
    address: "0xd9a12cde03a86e800496469858de8581d3a5353d",
    slug: "crowdholding"
  },
  SENC: {
    name: "Sentinel Chain",
    decimals: 18,
    address: "0xa13f0743951b4f6e3e3aa039f682e17279f52bc3",
    slug: "sentinel-chain"
  },
  LST: {
    name: "Lendroid",
    decimals: 18,
    address: "0x4de2573e27e648607b50e1cfff921a33e4a34405",
    slug: "lendroid-support-token"
  },
  BUBO: {
    name: "Bubo",
    decimals: 18,
    address: "0xccbf21ba6ef00802ab06637896b799f7101f54a2",
    slug: "budbo"
  },
  ABX: {
    name: "ABX Token",
    decimals: 18,
    address: "0x9a794dc1939f1d78fa48613b89b8f9d0a20da00e",
    slug: "arbidex"
  },
  SKRP: {
    name: "Skraps",
    decimals: 18,
    address: "0xfdfe8b7ab6cf1bd1e3d14538ef40686296c42052"
  },
  LOOM: {
    name: "Loom",
    decimals: 18,
    address: "0xa4e8c3ec456107ea67d3075bf9e3df3a75823db0",
    slug: "loom-network"
  },
  CCO: {
    name: "Ccore Token",
    decimals: 18,
    address: "0x679badc551626e01b23ceecefbc9b877ea18fc46",
    slug: "ccore"
  },
  DAXT: {
    name: "BlockEx",
    decimals: 18,
    address: "0x61725f3db4004afe014745b21dab1e1677cc328b",
    slug: "digital-asset-exchange-token"
  },
  BBC: {
    name: "B2B Coin",
    decimals: 18,
    address: "0xe7d3e4413e29ae35b0893140f4500965c74365e5",
    slug: "b2bcoin"
  },
  FSBT: {
    name: "FSBT Tech",
    decimals: 18,
    address: "0x1ed7ae1f0e2fa4276dd7ddc786334a3df81d50c0",
    slug: "fsbt-api-token"
  },
  BBN: {
    name: "Banyan",
    decimals: 18,
    address: "0x35a69642857083ba2f30bfab735dacc7f0bac969",
    slug: "banyan-network"
  },
  ANN: {
    name: "Agent Not Needed",
    decimals: 18,
    address: "0xe0e73e8fc3a0fa161695be1d75e1bc3e558957c4"
  },
  XBP: {
    name: "BlitzPredict",
    decimals: 18,
    address: "0x28dee01d53fed0edf5f6e310bf8ef9311513ae40",
    slug: "blitzpredict"
  },
  SEN: {
    name: "Consensus Token",
    decimals: 18,
    address: "0xd53370acf66044910bb49cbcfe8f3cd020337f60",
    slug: "consensus"
  },
  CAPP: {
    name: "Cappasity",
    decimals: 2,
    address: "0x04f2e7221fdb1b52a68169b25793e51478ff0329",
    slug: "cappasity"
  },
  IPSX: {
    name: "IP Exchange",
    decimals: 18,
    address: "0x001f0aa5da15585e5b2305dbab2bac425ea71007",
    slug: "ip-exchange"
  },
  VIEW: {
    name: "Viewly",
    decimals: 18,
    address: "0xf03f8d65bafa598611c3495124093c56e8f638f0",
    slug: "view"
  },
  OCN: {
    name: "OCoin",
    decimals: 18,
    address: "0x4092678e4e78230f46a1534c0fbc8fa39780892b",
    slug: "odyssey"
  },
  DROP: {
    name: "Dropil",
    decimals: 18,
    address: "0x4672bad527107471cb5067a887f4656d585a8a31",
    slug: "dropil"
  },
  VIT: {
    name: "Vice Industry Token",
    decimals: 18,
    address: "0x23b75bc7aaf28e2d6628c3f424b3882f8f072a3c",
    slug: "vision-industry-token"
  },
  ADH: {
    name: "ADHIVE",
    decimals: 18,
    address: "0xe69a353b3152dd7b706ff7dd40fe1d18b7802d31",
    slug: "adhive"
  },
  XDCE: {
    name: "XDCE",
    decimals: 18,
    address: "0x41ab1b6fcbb2fa9dced81acbdec13ea6315f2bf2",
    slug: "xinfin-network"
  },
  BERRY: {
    name: "Rentberry",
    decimals: 14,
    address: "0x6aeb95f06cda84ca345c2de0f3b7f96923a44f4c",
    slug: "rentberry"
  },
  MTC: {
    name: "Medical Token Currency",
    decimals: 18,
    address: "0x905e337c6c8645263d3521205aa37bf4d034e745",
    slug: "doc-com-token"
  },
  NAVI: {
    name: "Navi Token",
    decimals: 18,
    address: "0x588047365df5ba589f923604aac23d673555c623",
    slug: "naviaddress"
  },
  MRK: {
    name: "Mark Space",
    decimals: 8,
    address: "0xf453b5b9d4e0b5c62ffb256bb2378cc2bc8e8a89",
    slug: "mark-space"
  },
  GBX: {
    name: "Globitex Token",
    decimals: 8,
    address: "0x12fcd6463e66974cf7bbc24ffc4d40d6be458283"
  },
  LCD: {
    name: "Lucyd",
    decimals: 18,
    address: "0x9a4059c1cf329a017e0ee1337c503137fd9463b2"
  },
  MFG: {
    name: "SyncFab",
    decimals: 18,
    address: "0x6710c63432a2de02954fc0f851db07146a6c0312",
    slug: "syncfab"
  },
  ADI: {
    name: "Aditus",
    decimals: 18,
    address: "0x8810c63470d38639954c6b41aac545848c46484a",
    slug: "aditus"
  },
  CMS: {
    name: "COMSA",
    decimals: 6,
    address: "0xf83301c5cd1ccbb86f466a6b3c53316ed2f8465a",
    slug: "comsa-eth"
  },
  SMT3: {
    name: "Sun Money Token",
    decimals: 18,
    address: "0xc761c8dc05ae52a8a785665e528ddbb00c098ad1"
  },
  ORI: {
    name: "Origami Network",
    decimals: 18,
    address: "0xd2fa8f92ea72abb35dbd6deca57173d22db2ba49",
    slug: "origami"
  },
  MITX: {
    name: "Morpheus Labs Token",
    decimals: 18,
    address: "0x4a527d8fc13c5203ab24ba0944f4cb14658d1db6",
    slug: "morpheus-labs"
  },
  LND: {
    name: "LendingBlock",
    decimals: 18,
    address: "0x0947b0e6d821378805c9598291385ce7c791a6b2",
    slug: "lendingblock"
  },
  AUC: {
    name: "Auctus Token",
    decimals: 18,
    address: "0xc12d099be31567add4e4e4d0d45691c3f58f5663",
    slug: "auctus"
  },
  IVY: {
    name: "IvyKoin",
    decimals: 18,
    address: "0xa4ea687a2a7f29cf2dc66b39c68e4411c0d00c49",
    slug: "ivy"
  },
  GET2: {
    name: "Themis network",
    decimals: 18,
    address: "0x60c68a87be1e8a84144b543aacfa77199cd3d024",
    slug: "themis"
  },
  UQC: {
    name: "Uquid Coin",
    decimals: 18,
    address: "0xd01db73e047855efb414e6202098c4be4cd2423b",
    slug: "uquid-coin"
  },
  ABYSS: {
    name: "ABYSS",
    decimals: 18,
    address: "0x0e8d6b471e332f140e7d9dbb99e5e3822f728da6",
    slug: "abyss-token"
  },
  PAR: {
    name: "Parachute",
    decimals: 18,
    address: "0x1beef31946fbbb40b877a72e4ae04a8d1a5cee06",
    slug: "parachute"
  },
  FTX: {
    name: "FintruX Network",
    decimals: 18,
    address: "0xd559f20296ff4895da39b5bd9add54b442596a61",
    slug: "fintrux-network"
  },
  ABT: {
    name: "ArcBlock",
    decimals: 18,
    address: "0xb98d4c97425d9908e66e53a6fdf673acca0be986",
    slug: "arcblock"
  },
  CEL: {
    name: "Celsius",
    decimals: 4,
    address: "0xaaaebe6fe48e54f431b0c390cfaf0b017d09d42d",
    slug: "celsius"
  },
  NODE: {
    name: "NODE",
    decimals: 2,
    address: "0xac956c72c262e5405a84dac655d5f3bea7ae9534"
  },
  IHT: {
    name: "I HOUSE TOKEN",
    decimals: 18,
    address: "0xeda8b016efa8b1161208cf041cd86972eee0f31e",
    slug: "iht-real-estate-protocol"
  },
  VLD: {
    name: "VETRI",
    decimals: 18,
    address: "0x922ac473a3cc241fd3a0049ed14536452d58d73c",
    slug: "vetri"
  },
  SS: {
    name: "Sharder Chain",
    decimals: 18,
    address: "0xbbff862d906e348e9946bfb2132ecb157da3d4b4",
    slug: "sharder"
  },
  HBZ: {
    name: "Helbiz",
    decimals: 18,
    address: "0xe34e1944e776f39b9252790a0527ebda647ae668",
    slug: "hbz-coin"
  },
  SKCH: {
    name: "Skychain Global Token",
    decimals: 6,
    address: "0x70c621f949b6556c4545707a2d5d73a776b98359",
    slug: "skychain"
  },
  ZCO: {
    name: "Zebi Coin",
    decimals: 8,
    address: "0x2008e3057bd734e10ad13c9eae45ff132abc1722",
    slug: "zebi"
  },
  SHPING: {
    name: "SHPING",
    decimals: 18,
    address: "0x7c84e62859d0715eb77d1b1c4154ecd6abb21bec",
    slug: "shping"
  },
  HOT: {
    name: "HoloToken",
    decimals: 18,
    address: "0x6c6ee5e31d828de241282b9606c8e98ea48526e2",
    slug: "holo"
  },
  DML: {
    name: "DecentralizedML",
    decimals: 18,
    address: "0xbcdfe338d55c061c084d81fd793ded00a27f226d",
    slug: "decentralized-machine-learning"
  },
  APIS: {
    name: "APIS",
    decimals: 18,
    address: "0x4c0fbe1bb46612915e7967d2c3213cd4d87257ad",
    slug: "apis"
  },
  NBAI: {
    name: "Nebula AI Token",
    decimals: 18,
    address: "0x17f8afb63dfcdcc90ebe6e84f060cc306a98257d",
    slug: "nebula-ai"
  },
  XES: {
    name: "PROXEUS",
    decimals: 18,
    address: "0xa017ac5fac5941f95010b12570b812c974469c2c",
    slug: "proxeus"
  },
  GEN: {
    name: "DAOstack",
    decimals: 18,
    address: "0x543ff227f64aa17ea132bf9886cab5db55dcaddf",
    slug: "daostack"
  },
  KRL: {
    name: "Kryll",
    decimals: 18,
    address: "0x464ebe77c293e473b48cfe96ddcf88fcf7bfdac0",
    slug: "kryll"
  },
  TUSD: {
    name: "True USD",
    decimals: 18,
    address: "0x8dd5fbce2f6a956c3022ba3663759011dd51e73e"
  },
  BZNT: {
    name: "Bezant",
    decimals: 18,
    address: "0xe1aee98495365fc179699c1bb3e761fa716bee62",
    slug: "bezant"
  },
  WZI: {
    name: "Wizzle Infinity Token",
    decimals: 18,
    address: "0xb8327f32127afe37a544c52b628653e222a93bad"
  },
  XTRD: {
    name: "XTRD",
    decimals: 18,
    address: "0x9c794f933b4dd8b49031a79b0f924d68bef43992",
    slug: "xtrd"
  },
  TKA: {
    name: "Tokia Token",
    decimals: 18,
    address: "0xdae1baf249964bc4b6ac98c3122f0e3e785fd279",
    slug: "tokia"
  },
  UBT: {
    name: "Unibright",
    decimals: 8,
    address: "0x8400d94a5cb0fa0d041a3788e395285d61c9ee5e",
    slug: "unibright"
  },
  EXRT: {
    name: "EXRT",
    decimals: 8,
    address: "0xb20043f149817bff5322f1b928e89abfc65a9925"
  },
  CNN: {
    name: "CNN Token",
    decimals: 18,
    address: "0x8713d26637cf49e1b6b4a7ce57106aabc9325343",
    slug: "content-neutrality-network"
  },
  POA20: {
    name: "POA Network",
    decimals: 18,
    address: "0x6758b7d441a9739b98552b373703d8d3d14f9e62"
  },
  SNTR: {
    name: "SilentNotary",
    decimals: 4,
    address: "0x2859021ee7f2cb10162e67f33af2d22764b31aff",
    slug: "silent-notary"
  },
  FXT: {
    name: "Fuzex",
    decimals: 18,
    address: "0x1829aa045e21e0d59580024a951db48096e01782",
    slug: "fuzex"
  },
  BBK: {
    name: "Brickblock Token",
    decimals: 18,
    address: "0x4a6058666cf1057eac3cd3a5a614620547559fc9",
    slug: "brickblock"
  },
  WYS: {
    name: "wys Token",
    decimals: 18,
    address: "0xd8950fdeaa10304b7a7fd03a2fc66bc39f3c711a",
    slug: "wys-token"
  },
  SGN: {
    name: "Signals Network Token",
    decimals: 9,
    address: "0xb2135ab9695a7678dd590b1a996cb0f37bcb0718",
    slug: "signals-network"
  },
  CLN: {
    name: "Colu Local Network",
    decimals: 18,
    address: "0x4162178b78d6985480a308b2190ee5517460406d",
    slug: "colu-local-network"
  },
  LBA: {
    name: "Libra Credit",
    decimals: 18,
    address: "0xfe5f141bf94fe84bc28ded0ab966c16b17490657",
    slug: "libra-credit"
  },
  CEDEX: {
    name: "CEDEX Token",
    decimals: 18,
    address: "0xf4065e4477e91c177ded71a7a6fb5ee07dc46bc9",
    slug: "cedex-coin"
  },
  HER: {
    name: "HeroNode Token",
    decimals: 18,
    address: "0x491c9a23db85623eed455a8efdd6aba9b911c5df",
    slug: "heronode"
  },
  ELI: {
    name: "EligmaToken",
    decimals: 18,
    address: "0xc7c03b8a3fc5719066e185ea616e87b88eba44a3",
    slug: "eligma-token"
  },
  SNOV: {
    name: "Snovio",
    decimals: 18,
    address: "0xbdc5bac39dbe132b1e030e898ae3830017d7d969",
    slug: "snov"
  },
  HYDRO: {
    name: "HYDRO",
    decimals: 18,
    address: "0xebbdf302c940c6bfd49c6b165f457fdb324649bc",
    slug: "hydrogen"
  },
  IPL: {
    name: "InsurePal",
    decimals: 18,
    address: "0x64cdf819d3e75ac8ec217b3496d7ce167be42e80",
    slug: "insurepal"
  },
  FACE: {
    name: "Faceter Token",
    decimals: 18,
    address: "0x1ccaa0f2a7210d76e1fdec740d5f323e2e1b1672",
    slug: "faceter"
  },
  LUC: {
    name: "Play2live",
    decimals: 18,
    address: "0x5dbe296f97b23c4a6aa6183d73e574d02ba5c719",
    slug: "level-up"
  },
  TTV: {
    name: "Token for Television",
    decimals: 18,
    address: "0xa838be6e4b760e6061d4732d6b9f11bf578f9a76",
    slug: "tv-two"
  },
  XYO: {
    name: "XY Oracle",
    decimals: 18,
    address: "0x55296f69f40ea6d20e478533c15a6b08b654e758",
    slug: "xyo"
  },
  BTT: {
    name: "Blocktrade",
    decimals: 18,
    address: "0xfa456cf55250a839088b27ee32a424d7dacb54ff",
    slug: "blocktrade-token"
  },
  BBO: {
    name: "Bigbom",
    decimals: 18,
    address: "0x84f7c44b6fed1080f647e354d552595be2cc602f",
    slug: "bigbom"
  },
  PRYZ: {
    name: "Pryze",
    decimals: 18,
    address: "0x6b834f43b7f5a1644e0c81caa0246969da23105e"
  },
  DTRC: {
    name: "Datarius Credit",
    decimals: 18,
    address: "0xc20464e0c373486d2b3335576e83a218b1618a5e",
    slug: "datarius-credit"
  },
  IOTX: {
    name: "IoTeX Network",
    decimals: 18,
    address: "0x6fb3e0a217407efff7ca062d46c26e5d60a14d69",
    slug: "iotex"
  },
  RTE: {
    name: "Rate3",
    decimals: 18,
    address: "0x436f0f3a982074c4a05084485d421466a994fe53",
    slug: "rate3"
  },
  ETK: {
    name: "EnergiToken",
    decimals: 2,
    address: "0x3c4a3ffd813a107febd57b2f01bc344264d90fde",
    slug: "energitoken"
  },
  SEELE: {
    name: "Seele",
    decimals: 18,
    address: "0xb1eef147028e9f480dbc5ccaa3277d417d1b85f0",
    slug: "seele"
  },
  IND: {
    name: "Indorse",
    decimals: 18,
    address: "0xf8e386eda857484f5a12e4b5daa9984e06e73705",
    slug: "indorse-token"
  },
  OMX: {
    name: "Omix",
    decimals: 8,
    address: "0xb5dbc6d3cf380079df3b27135664b6bcf45d1869",
    slug: "shivom"
  },
  WEB: {
    name: "Webcoin",
    decimals: 18,
    address: "0x840fe75abfadc0f2d54037829571b2782e919ce4",
    slug: "webcoin"
  },
  IQN: {
    name: "IQeon",
    decimals: 18,
    address: "0x0db8d8b76bc361bacbb72e2c491e06085a97ab31",
    slug: "iqeon"
  },
  XCD: {
    name: "Capdax",
    decimals: 18,
    address: "0xca00bc15f67ebea4b20dfaaa847cace113cc5501",
    slug: "capdaxtoken"
  },
  EDR: {
    name: "Endor Protocol Token",
    decimals: 18,
    address: "0xc528c28fec0a90c083328bc45f587ee215760a0f",
    slug: "endor-protocol"
  },
  PI: {
    name: "PCHAIN",
    decimals: 18,
    address: "0xb9bb08ab7e9fa0a1356bd4a39ec0ca267e03b0b3",
    slug: "pchain"
  },
  BETEX: {
    name: "BETEX",
    decimals: 18,
    address: "0xbd270f9a96ed49a1c82055a22ad9b8eec564097f"
  },
  VME: {
    name: "VeriME",
    decimals: 18,
    address: "0xc343f099d3e41aa5c1b59470450e21e92e2d840b",
    slug: "verime"
  },
  ECOM: {
    name: "Omnitude",
    decimals: 18,
    address: "0x171d750d42d661b62c277a6b486adb82348c3eca",
    slug: "omnitude"
  },
  MRP: {
    name: "MoneyRebel",
    decimals: 18,
    address: "0x21f0f0fd3141ee9e11b3d7f13a1028cd515f459c"
  },
  BKRX: {
    name: "BlockRx Digital Token",
    decimals: 18,
    address: "0x3cf9e0c385a5abec9fd2a71790aa344c4e8e3570"
  },
  CEEK: {
    name: "CEEK",
    decimals: 18,
    address: "0xb056c38f6b7dc4064367403e26424cd2c60655e1",
    slug: "ceek-vr"
  },
  ICNQ: {
    name: "Iconiq Lab Token",
    decimals: 18,
    address: "0xb3e2cb7cccfe139f8ff84013823bf22da6b6390a",
    slug: "iconiq-lab-token"
  },
  COU: {
    name: "Couchain",
    decimals: 18,
    address: "0xf091cf09c51811819db705710e9634b8bf18f164",
    slug: "couchain"
  },
  ZCN: {
    name: "0chain",
    decimals: 10,
    address: "0xb9ef770b6a5e12e45983c5d80545258aa38f3b78",
    slug: "0chain"
  },
  BIT: {
    name: "Bitrewards",
    decimals: 18,
    address: "0x47da42696a866cdc61a4c809a515500a242909c1",
    slug: "bitrewards"
  },
  "0XBTC": {
    name: "0xBitcoin",
    decimals: 8,
    address: "0xb6ed7644c69416d67b522e20bc294a9a9b405b31",
    slug: "0xbtc"
  },
  QKC: {
    name: "QuarkChain Token",
    decimals: 18,
    address: "0xea26c4ac16d4a5a106820bc8aee85fd0b7b2b664",
    slug: "quarkchain"
  },
  BITCAR: {
    name: "BitCar",
    decimals: 8,
    address: "0x08b4c866ae9d1be56a06e0c302054b4ffe067b43"
  },
  LAN: {
    name: "FreelancerCoin",
    decimals: 18,
    address: "0x64ff248ddd36430e3640fbea76999941a8bccbd7"
  },
  MVL: {
    name: "Mass Vehicle Ledger",
    decimals: 18,
    address: "0xa849eaae994fb86afa73382e9bd88c2b6b18dc71",
    slug: "mvl"
  },
  METM: {
    name: "MetaMorph",
    decimals: 18,
    address: "0xfef3884b603c33ef8ed4183346e093a173c94da6",
    slug: "metamorph"
  },
  GMR: {
    name: "GIMMER",
    decimals: 18,
    address: "0x9b8d5f3402f74c7a61d9f09c32d3ca07b45c1466"
  },
  PCO: {
    name: "Pecunio",
    decimals: 8,
    address: "0xf5b815344641412401d8e868790dbd125e6761ca",
    slug: "pecunio"
  },
  OMG: {
    name: "OmiseGO",
    decimals: 18,
    address: "0xd26114cd6ee289accf82350c8d8487fedb8a0c07",
    slug: "omisego"
  },
  FMF: {
    name: "Formosa Financial",
    decimals: 18,
    address: "0xb4d0fdfc8497aef97d3c2892ae682ee06064a2bc",
    slug: "formosa-financial"
  },
  WT: {
    name: "WeToken",
    decimals: 18,
    address: "0xaae81c0194d6459f320b70ca0cedf88e11a242ce",
    slug: "wetoken"
  },
  CUZ: {
    name: "Cool Cousin",
    decimals: 18,
    address: "0xf832484f0c9f6b7cd5c945488899035467508a5d"
  },
  MYB: {
    name: "MyBit",
    decimals: 18,
    address: "0x5d60d8d7ef6d37e16ebabc324de3be57f135e0bc",
    slug: "mybit"
  },
  RMESH: {
    name: "RightMesh",
    decimals: 18,
    address: "0x8d5682941ce456900b12d47ac06a88b47c764ce1",
    slug: "rightmesh"
  },
  CBC: {
    name: "CashBetCoin",
    decimals: 8,
    address: "0x26db5439f651caf491a87d48799da81f191bdb6b",
    slug: "cashbet-coin"
  },
  OWN: {
    name: "OwnData",
    decimals: 8,
    address: "0x170b275ced089fffaebfe927f445a350ed9160dc",
    slug: "owndata"
  },
  CFTY: {
    name: "Crafty",
    decimals: 8,
    address: "0x6956983f8b3ce173b4ab84361aa0ad52f38d936f"
  },
  SPN: {
    name: "Sapien Network",
    decimals: 6,
    address: "0x20f7a3ddf244dc9299975b4da1c39f8d5d75f05a",
    slug: "sapien"
  },
  HOLD: {
    name: "HOLD",
    decimals: 18,
    address: "0xd6e1401a079922469e9b965cb090ea6ff64c6839",
    slug: "hold"
  },
  WBT: {
    name: "Whalesburg Token",
    decimals: 18,
    address: "0xe2ee1ac57b2e5564522b2de064a47b3f98b0e9c9"
  },
  MOT: {
    name: "Mount Olympus Token",
    decimals: 18,
    address: "0x263c618480dbe35c300d8d5ecda19bbb986acaed",
    slug: "olympus-labs"
  },
  ATMI: {
    name: "Atonomi",
    decimals: 18,
    address: "0x97aeb5066e1a590e868b511457beb6fe99d329f5",
    slug: "atonomi"
  },
  MVP: {
    name: "Merculet",
    decimals: 18,
    address: "0x8a77e40936bbc27e80e9a3f526368c967869c86d",
    slug: "merculet"
  },
  "000": {
    name: "Not a real coin",
    decimals: 8,
    address: "0xadc46ff5434910bd17b24ffb429e585223287d7f"
  },
  KYT: {
    name: "Keyrpto Token",
    decimals: 18,
    address: "0x532843f66375d5257ea34f723c6c2723ccf7b7a2"
  },
  UPP: {
    name: "Sentinel Protocol",
    decimals: 18,
    address: "0xc86d054809623432210c107af2e3f619dcfbf652",
    slug: "sentinel-protocol"
  },
  SNX: {
    name: "Synthetix Network",
    decimals: 18,
    address: "0xc011a72400e58ecd99ee497cf89e3775d4bd732f",
    slug: "synthetix-network-token"
  },
  DGX: {
    name: "Digix Gold",
    decimals: 9,
    address: "0x4f3afec4e5a3f2a6a1a411def7d7dfe50ee057bf",
    slug: "digix-gold-token"
  },
  PST: {
    name: "Primas",
    decimals: 18,
    address: "0x5d4abc77b8405ad177d8ac6682d584ecbfd46cec",
    slug: "primas"
  },
  TEN: {
    name: "TOKENOMY",
    decimals: 18,
    address: "0xdd16ec0f66e54d453e6756713e533355989040e4",
    slug: "tokenomy"
  },
  AUTO: {
    name: "CUBE",
    decimals: 18,
    address: "0x622dffcc4e83c64ba959530a5a5580687a57581b",
    slug: "cube"
  },
  THRT: {
    name: "Thrive",
    decimals: 18,
    address: "0x4f27053f32eda8af84956437bc00e5ffa7003287",
    slug: "thrive-token"
  },
  TGAME: {
    name: "Truegame",
    decimals: 18,
    address: "0xf8e06e4e4a80287fdca5b02dccecaa9d0954840f",
    slug: "tgame"
  },
  LIKE: {
    name: "LikeCoin",
    decimals: 18,
    address: "0x02f61fd266da6e8b102d4121f5ce7b992640cf98",
    slug: "likecoin"
  },
  DAG: {
    name: "Constellation",
    decimals: 8,
    address: "0xa8258abc8f2811dd48eccd209db68f25e3e34667",
    slug: "constellation"
  },
  LCK: {
    name: "LuckCash",
    decimals: 18,
    address: "0x82adce3b6a226f9286af99841410b04a075b54d5"
  },
  PMA: {
    name: "PumaPay",
    decimals: 18,
    address: "0x846c66cf71c43f80403b51fe3906b3599d63336f",
    slug: "pumapay"
  },
  ZINC: {
    name: "Zinc",
    decimals: 18,
    address: "0x4aac461c86abfa71e9d00d9a2cde8d74e4e1aeea",
    slug: "zinc"
  },
  DAV: {
    name: "DAV Network",
    decimals: 18,
    address: "0xd82df0abd3f51425eb15ef7580fda55727875f14",
    slug: "dav-coin"
  },
  OLT: {
    name: "OneLedger",
    decimals: 18,
    address: "0x64a60493d888728cf42616e034a0dfeae38efcf0",
    slug: "oneledger"
  },
  MEDX: {
    name: "MediBloc",
    decimals: 8,
    address: "0xfd1e80508f243e64ce234ea88a5fd2827c71d4b7",
    slug: "medx"
  },
  VITE: {
    name: "VITE",
    decimals: 18,
    address: "0x1b793e49237758dbd8b752afc9eb4b329d5da016",
    slug: "vite"
  },
  MET: {
    name: "Metronome",
    decimals: 18,
    address: "0xa3d58c4e56fedcae3a7c43a725aee9a71f0ece4e",
    slug: "metronome"
  },
  QNT: {
    name: "Quant",
    decimals: 18,
    address: "0x4a220e6096b25eadb88358cb44068a3248254675",
    slug: "quant"
  },
  C8: {
    name: "Carboneum",
    decimals: 18,
    address: "0xd42debe4edc92bd5a3fbb4243e1eccf6d63a4a5d",
    slug: "carboneum-c8-token"
  },
  DIW: {
    name: "DIW Token",
    decimals: 18,
    address: "0xa253be28580ae23548a4182d95bf8201c28369a8"
  },
  TTC: {
    name: "TTC Protocol",
    decimals: 18,
    address: "0x9389434852b94bbad4c8afed5b7bdbc5ff0c2275",
    slug: "ttc-protocol"
  },
  BOB: {
    name: "Bobs Repair",
    decimals: 18,
    address: "0xdf347911910b6c9a4286ba8e2ee5ea4a39eb2134",
    slug: "bobs-repair"
  },
  EGT: {
    name: "Egretia",
    decimals: 18,
    address: "0x8e1b448ec7adfc7fa35fc2e885678bd323176e34",
    slug: "egretia"
  },
  ELY: {
    name: "Elysian",
    decimals: 18,
    address: "0xa95592dcffa3c080b4b40e459c5f5692f67db7f8",
    slug: "elysian"
  },
  PITCH: {
    name: "PITCH",
    decimals: 9,
    address: "0x87f56ee356b434187105b40f96b230f5283c0ab4"
  },
  MRPH: {
    name: "Morpheus Network",
    decimals: 4,
    address: "0x7b0c06043468469967dba22d1af33d77d44056c8",
    slug: "morpheus-network"
  },
  AIC: {
    name: "Akaiito",
    decimals: 18,
    address: "0x7ca936344d234034cf6936472d6bedbe8ae6667f"
  },
  BST: {
    name: "Blocksquare Token",
    decimals: 18,
    address: "0x509a38b7a1cc0dcd83aa9d06214663d9ec7c7f4a"
  },
  GOT: {
    name: "GoToken",
    decimals: 18,
    address: "0x423b5f62b328d0d6d44870f4eee316befa0b2df5",
    slug: "gonetwork"
  },
  VAI: {
    name: "VIOLET",
    decimals: 18,
    address: "0xd4078bdb652610ad5383a747d130cbe905911102"
  },
  MFT: {
    name: "Mainframe",
    decimals: 18,
    address: "0xdf2c7238198ad8b389666574f2d8bc411a4b7428",
    slug: "mainframe"
  },
  ZXC: {
    name: "0xcert Protocol",
    decimals: 18,
    address: "0x83e2be8d114f9661221384b3a50d24b96a5653f5",
    slug: "0xcert"
  },
  ESS: {
    name: "ESSENTIA",
    decimals: 18,
    address: "0xfc05987bd2be489accf0f509e44b0145d68240f7",
    slug: "essentia"
  },
  BITX: {
    name: "BitScreenerToken",
    decimals: 18,
    address: "0xff2b3353c3015e9f1fbf95b9bda23f58aa7ce007",
    slug: "bitscreener-token"
  },
  REP: {
    name: "Augur",
    decimals: 18,
    address: "0x1985365e9f78359a9b6ad760e32412f4a445e862",
    slug: "augur"
  },
  ZIPT: {
    name: "Zippie",
    decimals: 18,
    address: "0xedd7c94fd7b4971b916d15067bc454b9e1bad980",
    slug: "zippie"
  },
  EBC: {
    name: "EBCoin",
    decimals: 18,
    address: "0x31f3d9d1bece0c033ff78fa6da60a6048f3e13c5",
    slug: "ebcoin"
  },
  BOX: {
    name: "ContentBox Token",
    decimals: 18,
    address: "0x63f584fa56e60e4d0fe8802b27c7e6e3b33e007f",
    slug: "contentbox"
  },
  PNK: {
    name: "Kleros",
    decimals: 18,
    address: "0x93ed3fbe21207ec2e8f2d3c3de6e058cb73bc04d",
    slug: "kleros"
  },
  R: {
    name: "Revain",
    decimals: 0,
    address: "0x48f775efbe4f5ece6e0df2f7b5932df56823b990",
    slug: "revain"
  },
  NCC: {
    name: "NeuroChain",
    decimals: 18,
    address: "0x5d48f293baed247a2d0189058ba37aa238bd4725",
    slug: "neurochain"
  },
  HYB: {
    name: "Hybrid Block",
    decimals: 18,
    address: "0x6059f55751603ead7dc6d280ad83a7b33d837c90",
    slug: "hybrid-block"
  },
  ALTX: {
    name: "Alttex",
    decimals: 8,
    address: "0xb1ed41dc1fe9b723a31137afdd1201d17917fe91",
    slug: "alttex"
  },
  INCX: {
    name: "InternationalCryptoX",
    decimals: 18,
    address: "0xa984a92731c088f1ea4d53b71a2565a399f7d8d5",
    slug: "internationalcryptox"
  },
  AXPR: {
    name: "aXpire",
    decimals: 18,
    address: "0xc39e626a04c5971d770e319760d7926502975e47",
    slug: "axpire"
  },
  GARD: {
    name: "Hashgard",
    decimals: 18,
    address: "0x5c64031c62061865e5fd0f53d3cdaef80f72e99d",
    slug: "hashgard"
  },
  SEAL: {
    name: "Seal Network",
    decimals: 18,
    address: "0xd7b3669c7d3e38ab5a441383d41f25e003e02148",
    slug: "seal-network"
  },
  VIKKY: {
    name: "Vikky",
    decimals: 8,
    address: "0xd2946be786f35c3cc402c29b323647abda799071",
    slug: "vikkytoken"
  },
  SNR: {
    name: "Sonder",
    decimals: 18,
    address: "0x47d1a59cbdd19aee060c859c0009277e245328ae",
    slug: "sonder"
  },
  DACC: {
    name: "DACC",
    decimals: 6,
    address: "0xf8c595d070d104377f58715ce2e6c93e49a87f3c",
    slug: "dacc"
  },
  SAT: {
    name: "Satisfaction Token",
    decimals: 18,
    address: "0x92736b3bff1bbd72a72478d78f18a6ab9b68b791"
  },
  CONTRACTIUM: {
    name: "CTU",
    decimals: 18,
    address: "0x943aca8ed65fbf188a7d369cfc2bee0ae435ee1b"
  },
  PDX: {
    name: "PDX",
    decimals: 18,
    address: "0x5f33d158ca7275848f70a3f149b421190df85b32"
  },
  T2T: {
    name: "Traceto",
    decimals: 18,
    address: "0xe6824483e279d967ea6f8472ace7585862fa1185"
  },
  NTK2: {
    name: "Netkoin",
    decimals: 18,
    address: "0x5d4d57cd06fa7fe99e26fdc481b468f77f05073c",
    slug: "netkoin"
  },
  SET: {
    name: "Swytch Energy",
    decimals: 18,
    address: "0xfa75b65e52a6cbc5503f45f4abba2c5df4688875"
  },
  PKG: {
    name: "PKG Token",
    decimals: 18,
    address: "0x02f2d4a04e6e01ace88bd2cd632875543b2ef577",
    slug: "pkg-token"
  },
  ACAD: {
    name: "Academy",
    decimals: 18,
    address: "0x1efc4dfd580df95426a0f04848870bd8cb5a338e"
  },
  XD: {
    name: "Data Transaction Token",
    decimals: 18,
    address: "0x24dcc881e7dd730546834452f21872d5cb4b5293",
    slug: "data-transaction-token"
  },
  ONG: {
    name: "onG.social",
    decimals: 18,
    address: "0xd341d1680eeee3255b8c4c75bcce7eb57f144dae",
    slug: "ongsocial"
  },
  EMTV: {
    name: "Multiversum",
    decimals: 18,
    address: "0x07a7ed332c595b53a317afcee50733af571475e7"
  },
  BNC: {
    name: "Bionic",
    decimals: 8,
    address: "0xef51c9377feb29856e61625caf9390bd0b67ea18",
    slug: "bionic"
  },
  MFTU: {
    name: "MFTU",
    decimals: 18,
    address: "0x05d412ce18f24040bb3fa45cf2c69e506586d8e8",
    slug: "mainstream-for-the-underground"
  },
  ROX: {
    name: "Robotina",
    decimals: 18,
    address: "0x574f84108a98c575794f75483d801d1d5dc861a5",
    slug: "robotina"
  },
  DX: {
    name: "DXChain",
    decimals: 18,
    address: "0x973e52691176d36453868d9d86572788d27041a9",
    slug: "dxchain-token"
  },
  IG: {
    name: "IG",
    decimals: 18,
    address: "0x8a88f04e0c905054d2f33b26bb3a46d7091a039a",
    slug: "igtoken"
  },
  AVINOC: {
    name: "AVINOC",
    decimals: 18,
    address: "0xf1ca9cb74685755965c7458528a36934df52a3ef",
    slug: "avinoc"
  },
  VXV: {
    name: "Vectorspace AI",
    decimals: 18,
    address: "0x7d29a64504629172a429e64183d6673b9dacbfce"
  },
  TALAO: {
    name: "TALAO",
    decimals: 18,
    address: "0x1d4ccc31dab6ea20f461d329a0562c1c58412515",
    slug: "talao"
  },
  KIND: {
    name: "Kind Ads",
    decimals: 8,
    address: "0x4618519de4c304f3444ffa7f812dddc2971cc688",
    slug: "kind-ads-token"
  },
  SVD: {
    name: "savedroid",
    decimals: 18,
    address: "0xbdeb4b83251fb146687fa19d1c660f99411eefe3",
    slug: "savedroid"
  },
  BNN: {
    name: "BrokerNekoNetwork",
    decimals: 8,
    address: "0xda80b20038bdf968c7307bb5907a469482cf6251",
    slug: "brokernekonetwork"
  },
  FTT: {
    name: "Farmatrust",
    decimals: 18,
    address: "0x2aec18c5500f21359ce1bea5dc1777344df4c0dc",
    slug: "farmatrust"
  },
  ABL: {
    name: "Airbloc",
    decimals: 18,
    address: "0xf8b358b3397a8ea5464f8cc753645d42e14b79ea",
    slug: "airbloc"
  },
  ABLX: {
    name: "ABLE",
    decimals: 18,
    address: "0x865bfd8232778f00cae81315bf75ef1fe6e30cdd"
  },
  BEAT: {
    name: "BEAT",
    decimals: 18,
    address: "0x2fb12bccf6f5dd338b76be784a93ade072425690",
    slug: "beat"
  },
  CDT: {
    name: "Blox",
    decimals: 18,
    address: "0x177d39ac676ed1c67a2b268ad7f1e58826e5b0af",
    slug: "blox"
  },
  OIO: {
    name: "online.io",
    decimals: 18,
    address: "0xa3efef1a1e3d1ad72b9d0f4253e7c9c084c2c08b",
    slug: "online"
  },
  MUXE: {
    name: "MUXE",
    decimals: 18,
    address: "0x515669d308f887fd83a471c7764f5d084886d34d"
  },
  DIP: {
    name: "Etherisc",
    decimals: 18,
    address: "0xc719d010b63e5bbf2c0551872cd5316ed26acd83"
  },
  FTEC: {
    name: "FTEC",
    decimals: 18,
    address: "0x6bec54e4fea5d541fb14de96993b8e11d81159b2"
  },
  UBEX: {
    name: "UBEX",
    decimals: 18,
    address: "0x6704b673c70de9bf74c8fba4b4bd748f0e2190e1",
    slug: "ubex"
  },
  CST: {
    name: "CryptosolarTech",
    decimals: 18,
    address: "0xbb49a51ee5a66ca3a8cbe529379ba44ba67e6771",
    slug: "cryptosolartech"
  },
  HAND: {
    name: "SHOWHAND",
    decimals: 0,
    address: "0x48c1b2f3efa85fbafb2ab951bf4ba860a08cdbb7",
    slug: "showhand"
  },
  GENE: {
    name: "GeneSourceCodeChain",
    decimals: 18,
    address: "0x884181554dfa9e578d36379919c05c25dc4a15bb",
    slug: "gene-source-code-chain"
  },
  FTXT: {
    name: "FUTURAX",
    decimals: 8,
    address: "0x41875c2332b0877cdfaa699b641402b7d4642c32",
    slug: "futurax"
  },
  UUU: {
    name: "UNetworkToken",
    decimals: 18,
    address: "0x3543638ed4a9006e4840b105944271bcea15605d",
    slug: "u-network"
  },
  DIT: {
    name: "Inmediate",
    decimals: 8,
    address: "0xf14922001a2fb8541a433905437ae954419c2439",
    slug: "digital-insurance-token"
  },
  BKU: {
    name: "Blocktek University",
    decimals: 18,
    address: "0x60b5aa3334185d72eed79ac5ffc9870e98f502eb"
  },
  TILE: {
    name: "Loomia Tile",
    decimals: 18,
    address: "0x25f735b108b4273fb0aceb87599ed8bba10065de"
  },
  UBC: {
    name: "Ubcoin",
    decimals: 18,
    address: "0x2d3e7d4870a51b918919e7b851fe19983e4c38d5",
    slug: "ubcoin-market"
  },
  SKYFT: {
    name: "SKYFchain",
    decimals: 18,
    address: "0x5dd0815a4cf119ad91ba045bbbf879f3f7de3c68"
  },
  USE: {
    name: "UseChain Token",
    decimals: 18,
    address: "0xd9485499499d66b175cf5ed54c0a19f1a6bcb61a",
    slug: "usechain-token"
  },
  KIT: {
    name: "KitToken",
    decimals: 18,
    address: "0x080eb7238031f97ff011e273d6cad5ad0c2de532"
  },
  ARCONA: {
    name: "ARCONA",
    decimals: 18,
    address: "0x0f71b8de197a1c84d31de0f1fa7926c365f052b3"
  },
  SURE: {
    name: "Surety Token",
    decimals: 6,
    address: "0x95382ac82e886a367bac9e1e23beabe569bcfed8",
    slug: "surety"
  },
  TIP: {
    name: "TIP",
    decimals: 18,
    address: "0x59ae863232238a8bd7953bdfc1b4796f8e9a5b4e"
  },
  HAVY: {
    name: "Havy",
    decimals: 8,
    address: "0x7c2e5b7ec572199d3841f6a38f7d4868bd0798f1",
    slug: "havy"
  },
  EEE: {
    name: "Elementh token",
    decimals: 18,
    address: "0x4c567c3363cc42c5a42c6d8bf01503fd1d0b91cd"
  },
  CARD: {
    name: "Cardstack",
    decimals: 18,
    address: "0x954b890704693af242613edef1b603825afcd708",
    slug: "cardstack"
  },
  NPXS: {
    name: "Pundi X",
    decimals: 18,
    address: "0xa15c7ebe1f07caf6bff097d8a589fb8ac49ae5b3",
    slug: "pundi-x"
  },
  EDN: {
    name: "EdenCoin",
    decimals: 18,
    address: "0x05860d453c7974cbf46508c06cba14e211c629ce",
    slug: "eden"
  },
  IHF: {
    name: "Invictus Hyperion",
    decimals: 18,
    address: "0xaf1250fa68d7decd34fd75de8742bc03b29bd58e",
    slug: "invictus-hyperion-fund"
  },
  "3DES": {
    name: "3DES Token",
    decimals: 18,
    address: "0x115e7b7ecdd9792d6995cb426b2ef4d6119682a7"
  },
  UBBEY: {
    name: "UBBEY",
    decimals: 18,
    address: "0x6cb1c2b61e24ad08bf5fff4d2b13ea987d211a88"
  },
  TBE: {
    name: "TowerBee",
    decimals: 18,
    address: "0xb3c61539af156438951ea6cd48756d22a48fce62"
  },
  UCN: {
    name: "UChain Token",
    decimals: 18,
    address: "0xaaf37055188feee4869de63464937e683d61b2a1",
    slug: "uchain"
  },
  MAS: {
    name: "Midas Protocol",
    decimals: 18,
    address: "0x23ccc43365d9dd3882eab88f43d515208f832430",
    slug: "midasprotocol"
  },
  DEC: {
    name: "Darico Ecosystem Coin",
    decimals: 18,
    address: "0x89c6c856a6db3e46107163d0cda7a7ff211bd655",
    slug: "darcio-ecosystem-coin"
  },
  TXN: {
    name: "Traxion",
    decimals: 18,
    address: "0xaaf099a16cb37dfdaffc1a169f6e99f41aaaf75c"
  },
  USDC: {
    name: "USD//Coin",
    decimals: 6,
    address: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48"
  },
  BIO: {
    name: "BioCrypt",
    decimals: 8,
    address: "0xf18432ef894ef4b2a5726f933718f5a8cf9ff831"
  },
  S: {
    name: "Sharpay",
    decimals: 18,
    address: "0x96b0bf939d9460095c15251f71fda11e41dcbddb",
    slug: "sharpay"
  },
  TOL: {
    name: "Tolar ",
    decimals: 18,
    address: "0xd07d9fe2d2cc067015e2b4917d24933804f42cfa",
    slug: "tolar"
  },
  ODEM: {
    name: "ODEM",
    decimals: 18,
    address: "0xbf52f2ab39e26e0951d2a02b49b7702abe30406a",
    slug: "odem"
  },
  XMOO: {
    name: "MOO Token",
    decimals: 18,
    address: "0x221535cbced4c264e53373d81b73c29d010832a5"
  },
  MTCN: {
    name: "Multicoin",
    decimals: 18,
    address: "0xf6117cc92d7247f605f11d4c942f0feda3399cb5"
  },
  PEP: {
    name: "Peptoken",
    decimals: 18,
    address: "0xbb0ef9e617faddf54b8d16e29046f72b4d3ec77f"
  },
  UAC: {
    name: "Ubiatar Coin",
    decimals: 18,
    address: "0x4297a285db467eb779fcc45f69a169bd8dccd0e9"
  },
  ONE: {
    name: "Menlo Token",
    decimals: 18,
    address: "0x4d807509aece24c0fa5a102b6a3b059ec6e14392",
    slug: "menlo-one"
  },
  ALT: {
    name: "Alt.Estate Token",
    decimals: 18,
    address: "0x419b8ed155180a8c9c64145e76dad49c0a4efb97",
    slug: "alt-estate-token"
  },
  JSE: {
    name: "JSECOIN",
    decimals: 18,
    address: "0x2d184014b5658c453443aa87c8e9c4d57285620b",
    slug: "jsecoin"
  },
  AMO: {
    name: "AMO Coin",
    decimals: 18,
    address: "0x38c87aa89b2b8cd9b95b736e1fa7b612ea972169",
    slug: "amo-coin"
  },
  TYPE: {
    name: "Typerium",
    decimals: 4,
    address: "0xeaf61fc150cd5c3bea75744e830d916e60ea5a9f",
    slug: "typerium"
  },
  VOCO: {
    name: "VOCO",
    decimals: 18,
    address: "0xb5ca46cf1da09248126682a7bd72401fd7a6b151",
    slug: "provoco-token"
  },
  FTM: {
    name: "Fantom",
    decimals: 18,
    address: "0x4e15361fd6b4bb609fa63c81a2be19d873717870",
    slug: "fantom"
  },
  LQD: {
    name: "Liquid",
    decimals: 18,
    address: "0xd29f0b5b3f50b07fe9a9511f7d86f4f4bac3f8c4",
    slug: "liquidity-network"
  },
  PSK: {
    name: "Pool of Stake Token",
    decimals: 18,
    address: "0x1c5f43710a1776b0ea7191b7ead75d4b98d69858"
  },
  POR: {
    name: "Proof of Review Token",
    decimals: 18,
    address: "0x08c507046e12cd1538741d067d28411f2b922062"
  },
  WORK: {
    name: "Aworker Token",
    decimals: 8,
    address: "0xa686514faf7d54289266f483d1e4852c99e13ec7"
  },
  VIU: {
    name: "Viuly Token",
    decimals: 18,
    address: "0x464baddce9bd32581a7d59d9bb8350c7c7764668",
    slug: "viuly"
  },
  COIN: {
    name: "Coinvest",
    decimals: 18,
    address: "0xeb547ed1d8a3ff1461abaa7f0022fed4836e00a4"
  },
  PEG: {
    name: "Peg Network Token",
    decimals: 18,
    address: "0x8ae56a6850a7cbeac3c3ab2cb311e7620167eac8"
  },
  WCT: {
    name: "Wealth Chain Token",
    decimals: 18,
    address: "0xff2ce8a8589e5de40ecb564604714025f3d1819d"
  },
  REDC: {
    name: "RedCab",
    decimals: 18,
    address: "0xb563300a3bac79fc09b93b6f84ce0d4465a2ac27"
  },
  TVND: {
    name: "TrueVND",
    decimals: 18,
    address: "0x3dc0501c32bee0cc1e629d590302a4b909797474"
  },
  ZEON: {
    name: "ZEON",
    decimals: 18,
    address: "0xe5b826ca2ca02f09c1725e9bd98d9a8874c30532",
    slug: "zeon"
  },
  HEAL: {
    name: "Etheal Token",
    decimals: 18,
    address: "0x6bd26bb09c992e09d2156b48f723e56e52eead9c"
  },
  AWC: {
    name: "Atomic Wallet Token",
    decimals: 8,
    address: "0xad22f63404f7305e4713ccbd4f296f34770513f4",
    slug: "atomic-wallet-coin"
  },
  MBT: {
    name: "Metabase",
    decimals: 18,
    address: "0x599c49b932f08707888791a9b55949e385a00aeb"
  },
  KWH: {
    name: "KWHCoin",
    decimals: 18,
    address: "0xb8ddc930c2bab6c71610a2be639036e829f9c10b",
    slug: "kwhcoin"
  },
  FOAM: {
    name: "FOAM Token",
    decimals: 18,
    address: "0x4946fcea7c692606e8908002e55a582af44ac121",
    slug: "foam"
  },
  MXC: {
    name: "MXC Token",
    decimals: 18,
    address: "0x5ca381bbfb58f0092df149bd3d243b08b9a8386e",
    slug: "machine-xchange-coin"
  },
  LPT: {
    name: "LivePeer Token",
    decimals: 18,
    address: "0x58b6a8a3302369daec383334672404ee733ab239",
    slug: "livepeer"
  },
  CMCT: {
    name: "Crowd Machine Compute Token",
    decimals: 8,
    address: "0x47bc01597798dcd7506dcca36ac4302fc93a8cfb",
    slug: "crowd-machine"
  },
  FXP: {
    name: "FXPay",
    decimals: 8,
    address: "0x14ddda446688b73161aa1382f4e4343353af6fc8"
  },
  EXO: {
    name: "EXOLOVER",
    decimals: 18,
    address: "0xe58e751aba3b9406367b5f3cbc39c2fa9b519789"
  },
  ECHT: {
    name: "ECHAT TOKEN",
    decimals: 18,
    address: "0x1a2277c83930b7a64c3e3d5544eaa8c4f946b1b7",
    slug: "e-chat"
  },
  KAT: {
    name: "Kambria Token",
    decimals: 18,
    address: "0xa858bc1b71a895ee83b92f149616f9b3f6afa0fb",
    slug: "kambria"
  },
  TDP: {
    name: "TrueDeck",
    decimals: 18,
    address: "0x5b11aacb6bddb9ffab908fdce739bf4aed554327",
    slug: "truedeck"
  },
  TDT: {
    name: "Trident",
    decimals: 18,
    address: "0x4eea6844a4dc5bf3127decf034b3f4a7211ef2e7"
  },
  DBLK: {
    name: "DataOnBlock",
    decimals: 18,
    address: "0x526ccc90191a9472299323816bd2c784c0a1bcde"
  },
  UTS: {
    name: "Utemis",
    decimals: 18,
    address: "0x979ebc09e55ea0ab563cf7175e4c4b1a03afc19a",
    slug: "utemis"
  },
  BOUNCY: {
    name: "BouncyCoinToken",
    decimals: 18,
    address: "0xe9f9547c17fc9539df99a42dcb6ec38165994c45"
  },
  ATF: {
    name: "AgroTechFarm",
    decimals: 18,
    address: "0x014e42ae89b24738591e2f695e1ef6d95bd38619"
  },
  GMB: {
    name: "GAMB",
    decimals: 18,
    address: "0xa0008f510fe9ee696e7e320c9e5cbf61e27791ee",
    slug: "gamb"
  },
  HBX: {
    name: "Hyperbridge Token",
    decimals: 18,
    address: "0x2793a23341012e0970cf478bab08606b56504c3e"
  },
  LIQUID: {
    name: "Netkoin Liquid",
    decimals: 18,
    address: "0xac2385e183d9301dd5e2bb08da932cbf9800dc9c"
  },
  XCHF: {
    name: "CryptoFranc",
    decimals: 18,
    address: "0xb4272071ecadd69d933adcd19ca99fe80664fc08",
    slug: "cryptofranc"
  },
  BNFT: {
    name: "Benefits Coin",
    decimals: 9,
    address: "0xda2c424fc98c741c2d4ef2f42897cefed897ca75"
  },
  NKN: {
    name: "NKN",
    decimals: 18,
    address: "0x5cf04716ba20127f1e2297addcf4b5035000c9eb",
    slug: "nkn"
  },
  TVNT: {
    name: "TravelNote",
    decimals: 8,
    address: "0x5635ddeabf9cdda686995fe90beb5411831563fc",
    slug: "travelnote"
  },
  COVA: {
    name: "Covalent Token",
    decimals: 18,
    address: "0xb37a769b37224449d92aac57de379e1267cd3b00",
    slug: "cova"
  },
  LTO: {
    name: "LTO Network Token",
    decimals: 8,
    address: "0x3db6ba6ab6f95efed1a6e794cad492faaabf294d",
    slug: "lto-network"
  },
  FRECNX: {
    name: "FreldoCoinX",
    decimals: 18,
    address: "0xd8b8e1eca89da014e67fdbc2014eaa8e171079bf"
  },
  STASH: {
    name: "BitStash",
    decimals: 18,
    address: "0x965f109d31ccb77005858defae0ebaf7b4381652",
    slug: "bitstash"
  },
  FOXT: {
    name: "Fox Trading",
    decimals: 18,
    address: "0xfbe878ced08132bd8396988671b450793c44bc12",
    slug: "fox-trading"
  },
  EVR: {
    name: "Everus",
    decimals: 8,
    address: "0x3137619705b5fc22a3048989f983905e456b59ab",
    slug: "everus"
  },
  WBTC: {
    name: "Bitcoin",
    decimals: 8,
    address: "0x2260fac5e5542a773aa44fbcfedf7c193bc2c599",
    slug: "wrapped-bitcoin"
  },
  XLG: {
    name: "Ledgerium",
    decimals: 8,
    address: "0x598c9a4f069dc076984868873c01e78a905d50e6"
  },
  BETHER: {
    name: "Bethereum",
    decimals: 18,
    address: "0x14c926f2290044b647e1bf2072e67b495eff1905",
    slug: "bethereum"
  },
  SPRING: {
    name: "Spring Token",
    decimals: 18,
    address: "0xfb0bdc444c8ae7e9b5beea5e4d1e8de93879e487"
  },
  ZCC: {
    name: "ZeroCarbon",
    decimals: 18,
    address: "0x6737fe98389ffb356f64ebb726aa1a92390d94fb"
  },
  WMB: {
    name: "WatermelonBloc Tokens",
    decimals: 6,
    address: "0x7a18919f0b05fa5e91f3ef43afe8a72105c9d4b8"
  },
  CCC: {
    name: "Container Crypto Coin",
    decimals: 18,
    address: "0x9e3359f862b6c7f5c660cfd6d1aa6909b1d9504d"
  },
  VNT: {
    name: "Vanta Token",
    decimals: 18,
    address: "0xdcc27bbaa14cafd8a6aeb847e1b01c5dffb70935",
    slug: "vanta-network"
  },
  COT: {
    name: "CoTrader",
    decimals: 18,
    address: "0x5c872500c00565505f3624ab435c222e558e9ff8",
    slug: "cotrader"
  },
  HXRO: {
    name: "Hxro",
    decimals: 18,
    address: "0x4bd70556ae3f8a6ec6c4080a0c327b24325438f3",
    slug: "hxro"
  },
  PFR: {
    name: "PayFair Token",
    decimals: 8,
    address: "0xb41422d5a1d5d5c73c229686935b40f881502785",
    slug: "payfair"
  },
  INNBCL: {
    name: "InnovativeBioresearchClassic",
    decimals: 10,
    address: "0x8cc3e2bdc17682c622eb789eda23fbd6988c84da",
    slug: "innovative-bioresearch-classic"
  },
  BIRD: {
    name: "BirdCoin",
    decimals: 18,
    address: "0x026e62dded1a6ad07d93d39f96b9eabd59665e0d"
  },
  FXC: {
    name: "Flexacoin",
    decimals: 18,
    address: "0x4a57e687b9126435a9b19e4a802113e266adebde",
    slug: "flexacoin"
  },
  UGAS: {
    name: "UltrainGas",
    decimals: 18,
    address: "0x8716fc5da009d3a208f0178b637a50f4ef42400f",
    slug: "ugas"
  },
  ARR: {
    name: "ARROUND",
    decimals: 18,
    address: "0xcb089b8ae76b5df461d40e957603f7a59aea9e0d"
  },
  NRP: {
    name: "Neural Protocol",
    decimals: 8,
    address: "0x3918c42f14f2eb1168365f911f63e540e5a306b5",
    slug: "neural-protocol"
  },
  PLA: {
    name: "PlayChip",
    decimals: 18,
    address: "0x0198f46f520f33cd4329bd4be380a25a90536cd5",
    slug: "playchip"
  },
  IMT: {
    name: "Money Token",
    decimals: 18,
    address: "0x13119e34e140097a507b07a5564bde1bc375d9e6",
    slug: "moneytoken"
  },
  CCN: {
    name: "CustomContractNetwork",
    decimals: 18,
    address: "0x17b26400621695c2d8c2d8869f6259e82d7544c4",
    slug: "customcontractnetwork"
  },
  FET: {
    name: "Fetch",
    decimals: 18,
    address: "0x1d287cc25dad7ccaf76a26bc660c5f7c8e2a05bd",
    slug: "fetch"
  },
  TASH: {
    name: "TripCash",
    decimals: 18,
    address: "0x002f06abe6995fd0ea4be011c53bfc989fa53ce0"
  },
  WBBC: {
    name: "Wibcoin",
    decimals: 18,
    address: "0x195a179bbfe539bb8a485d944ac60d3a0329f0ec"
  },
  DAGT: {
    name: "DAGT",
    decimals: 18,
    address: "0x56d1ae30c97288da4b58bc39f026091778e4e316",
    slug: "digital-asset-guarantee-token"
  },
  IMPCN: {
    name: "IMPERIVMCoin",
    decimals: 6,
    address: "0x1d2aee5eaf5e4352965b710293513a5ad99796ff"
  },
  PCL: {
    name: "Peculium",
    decimals: 8,
    address: "0x0f02e27745e3b6e9e1310d19469e2b5d7b5ec99a",
    slug: "peculium"
  },
  HUDDL: {
    name: "Huddl",
    decimals: 18,
    address: "0x5137a403dd25e48de528912a4af62881e625d801",
    slug: "huddl"
  },
  ANKR: {
    name: "Ankr Network",
    decimals: 18,
    address: "0x8290333cef9e6d528dd5618fb97a76f268f3edd4",
    slug: "ankr"
  },
  LED: {
    name: "Terrawatt",
    decimals: 18,
    address: "0x93c9291523cb95c0eb0bc379b0483f4d7fc05072"
  },
  VIDT: {
    name: "V-ID Token",
    decimals: 18,
    address: "0x445f51299ef3307dbd75036dd896565f5b4bf7a5",
    slug: "v-id"
  },
  SHK: {
    name: "Shook",
    decimals: 18,
    address: "0xebe4a49df7885d015329c919bf43e6460a858f1e"
  },
  MESG: {
    name: "MESG",
    decimals: 18,
    address: "0x420167d87d35c3a249b32ef6225872fbd9ab85d2",
    slug: "mesg"
  },
  PMNT: {
    name: "Paymon",
    decimals: 9,
    address: "0x81b4d08645da11374a03749ab170836e4e539767",
    slug: "paymon"
  },
  UND: {
    name: "United Network Distribution",
    decimals: 18,
    address: "0xbe6ac6b50f577205c9d107f37b6e205aa6acc5d4",
    slug: "unification"
  },
  CRO: {
    name: "Crypto.com Chain",
    decimals: 8,
    address: "0xa0b73e1ff0b80914ab6fe0444e65848c4c34450b",
    slug: "crypto-com-chain"
  },
  BEZ: {
    name: "Bezop",
    decimals: 18,
    address: "0x8a1e3930fde1f151471c368fdbb39f3f63a65b55",
    slug: "bezop"
  },
  AERGO: {
    name: "AERGO",
    decimals: 18,
    address: "0xae31b85bfe62747d0836b82608b4830361a3d37a",
    slug: "aergo"
  },
  BTMX: {
    name: "BitMax Token",
    decimals: 18,
    address: "0x1c289a12a8552b314d0d153d6991fd27a54aa640",
    slug: "bitmax-token"
  },
  USDS: {
    name: "StableUSD",
    decimals: 6,
    address: "0xa4bdb11dc0a2bec88d24a3aa1e6bb17201112ebe"
  },
  PAX: {
    name: "Paxos Standard Token",
    decimals: 18,
    address: "0x8e870d67f660d95d5be530380d0ec0bd388289e1"
  },
  CSP: {
    name: "Caspian",
    decimals: 18,
    address: "0xa6446d655a0c34bc4f05042ee88170d056cbaf45",
    slug: "caspian"
  },
  ZAP: {
    name: "ZAP",
    decimals: 18,
    address: "0x6781a0f84c7e9e846dcb84a9a5bd49333067b104",
    slug: "zap"
  },
  CYFM: {
    name: "CYBERFM",
    decimals: 18,
    address: "0x3f06b5d78406cd97bdf10f5c420b241d32759c80",
    slug: "cyberfm"
  },
  W12: {
    name: "W12.io",
    decimals: 18,
    address: "0xbf799a2f71d020a4a8c10e7406e2bf970b3d734b"
  },
  UDOO: {
    name: "Howdoo",
    decimals: 18,
    address: "0x0df721639ca2f7ff0e1f618b918a65ffb199ac4e",
    slug: "howdoo"
  },
  TGBP: {
    name: "TrueGBP",
    decimals: 18,
    address: "0x00000000441378008ea67f4284a57932b1c000a5"
  },
  NFC: {
    name: "NoFakeCoin",
    decimals: 18,
    address: "0xb0866289e870d2efc282406cf4123df6e5bcb652"
  },
  WETC: {
    name: "WETC",
    decimals: 18,
    address: "0x86aabcc646f290b9fc9bd05ce17c3858d1511da1"
  },
  WHEN: {
    name: "WHEN Token",
    decimals: 18,
    address: "0xf4fe95603881d0e07954fd7605e0e9a916e42c44",
    slug: "when-token"
  },
  BLOC: {
    name: "Blockcloud",
    decimals: 18,
    address: "0x6f919d67967a97ea36195a2346d9244e60fe0ddb",
    slug: "blockcloud"
  },
  LIT: {
    name: "LITION",
    decimals: 18,
    address: "0x763fa6806e1acf68130d2d0f0df754c93cc546b2",
    slug: "lition"
  },
  HGO: {
    name: "HireGo",
    decimals: 18,
    address: "0xaaa89105dab822dbc9a6de64a23d045d99d5fd36"
  },
  BUD: {
    name: "BUDDY",
    decimals: 18,
    address: "0x57652fc91f522f9eff0b38cdf1d51f5fb5764215",
    slug: "buddy"
  },
  MOVI: {
    name: "MoviToken",
    decimals: 6,
    address: "0x06f979e4f04ec565ae8d7479a94c60def8846832"
  },
  SNTVT: {
    name: "Sentivate",
    decimals: 18,
    address: "0x7865af71cf0b288b4e7f654f4f7851eb46a2b7f8",
    slug: "sentivate"
  },
  XBASE: {
    name: "Eterbase Coin",
    decimals: 18,
    address: "0x4d13d624a87baa278733c068a174412afa9ca6c8",
    slug: "eterbase-coin"
  },
  NOW: {
    name: "ChangeNOW",
    decimals: 8,
    address: "0xe9a95d175a5f4c9369f3b74222402eb1b837693b",
    slug: "now-token"
  },
  CUSD: {
    name: "Carbon",
    decimals: 18,
    address: "0x1410d4ec3d276c0ebbf16ccbe88a4383ae734ed0"
  },
  ORBS: {
    name: "Orbs",
    decimals: 18,
    address: "0xff56cc6b1e6ded347aa0b7676c85ab0b3d08b0fa",
    slug: "orbs"
  },
  RC20: {
    name: "RoboCalls",
    decimals: 18,
    address: "0x61b2d3ea9f1c6b387c985c73d40e8fbfb284e5c7",
    slug: "robocalls"
  },
  AER: {
    name: "Aeryus Token",
    decimals: 18,
    address: "0xac4d22e40bf0b8ef4750a99ed4e935b99a42685e"
  },
  ORME: {
    name: "Ormeus Coin",
    decimals: 8,
    address: "0xc96df921009b790dffca412375251ed1a2b75c60",
    slug: "ormeus-coin"
  },
  MATIC: {
    name: "Matic Token",
    decimals: 18,
    address: "0x7d1afa7b718fb893db30a3abc0cfc608aacfebb0",
    slug: "matic-network"
  },
  RC: {
    name: "ReceiptCoin",
    decimals: 9,
    address: "0xd6e49800decb64c0e195f791348c1e87a5864fd7"
  },
  ZNT: {
    name: "Zenswap Network Token",
    decimals: 18,
    address: "0x4fa000df40c06fc8c7d9179661535846b7cd4f87"
  },
  IDEX: {
    name: "IDEX Token",
    decimals: 18,
    address: "0xb705268213d593b8fd88d3fdeff93aff5cbdcfae",
    slug: "idex"
  },
  EURS: {
    name: "STASIS EURS",
    decimals: 2,
    address: "0xdb25f211ab05b1c97d595516f45794528a807ad8"
  },
  MBL: {
    name: "MovieBloc",
    decimals: 18,
    address: "0xb879da8b24c9b8685de8526cf492e954f165d74b",
    slug: "moviebloc"
  },
  CRE: {
    name: "Carry Token",
    decimals: 18,
    address: "0x115ec79f1de567ec68b7ae7eda501b406626478e",
    slug: "carry"
  },
  RSR: {
    name: "Reserve Rights",
    decimals: 18,
    address: "0x8762db106b2c2a0bccb3a80d1ed41273552616e8",
    slug: "reserve-rights"
  },
  SSN: {
    name: "SuperSkyNet",
    decimals: 18,
    address: "0xa5b46ff9a887180c8fb2d97146398ddfc5fef1cd"
  },
  BQQQ: {
    name: "BITSDAQ",
    decimals: 18,
    address: "0x1b80eeeadcc590f305945bcc258cfa770bbe1890",
    slug: "bitsdaq"
  },
  SMT: {
    name: "Smathium",
    decimals: 18,
    address: "0x4b4787aace23eb70da046bcc0ccfe28d4e4fb899"
  },
  XNS: {
    name: "Xeonbit Token",
    decimals: 18,
    address: "0x79c71d3436f39ce382d0f58f1b011d88100b9d91"
  },
  CHR: {
    name: "CHROMA",
    decimals: 6,
    address: "0x915044526758533dfb918eceb6e44bc21632060d",
    slug: "chromia"
  },
  STPT: {
    name: "Standard Tokenization Protocol",
    decimals: 18,
    address: "0xde7d85157d9714eadf595045cc12ca4a5f3e2adb",
    slug: "stpt"
  },
  VNC: {
    name: "Vincoin Cash",
    decimals: 8,
    address: "0xdf413690fb785e56895551cc21086a15b6e90386"
  },
  JAR: {
    name: "Jarvis+ Coins",
    decimals: 18,
    address: "0xa249de6948022783765fee4850d7b85e43118fcc",
    slug: "jarvis"
  },
  AQU: {
    name: "Aquest Token",
    decimals: 18,
    address: "0x7756edf05ef3c2b321a85d77b5cbf7c8a9a7c247"
  },
  CHZ: {
    name: "chiliZ",
    decimals: 18,
    address: "0x3506424f91fd33084466f402d5d97f05f8e3b4af",
    slug: "chiliz"
  },
  ESH: {
    name: "Switch",
    decimals: 18,
    address: "0xdf329603bd378021698f9833cd5205b52f9e370e"
  },
  EQUAD: {
    name: "Quadrant Protocol",
    decimals: 18,
    address: "0xc28e931814725bbeb9e670676fabbcb694fe7df2",
    slug: "quadrantprotocol"
  },
  TFB: {
    name: "TrueFeedBack",
    decimals: 18,
    address: "0x79cdfa04e3c4eb58c4f49dae78b322e5b0d38788"
  },
  COTI: {
    name: "COTI Token",
    decimals: 18,
    address: "0xddb3422497e61e13543bea06989c0789117555c5"
  },
  XCT: {
    name: "xCrypt Token",
    decimals: 18,
    address: "0xd2bb16cf38ca086cab5128d5c25de9477ebd596b"
  },
  URAC: {
    name: "Uranus",
    decimals: 18,
    address: "0xff8be4b22cedc440591dcb1e641eb2a0dd9d25a5",
    slug: "uranus"
  },
  ENK: {
    name: "Enkronos Token",
    decimals: 18,
    address: "0x92b914f1ddcbb1d117a718e83c9ed7eb32fc44d1"
  },
  EUULA: {
    name: "Uulala",
    decimals: 2,
    address: "0x26de40bffafe73ff4e37089b2c71e35fd02eb1a7"
  },
  POLL: {
    name: "ClearPoll",
    decimals: 18,
    address: "0x705ee96c1c160842c92c1aecfcffccc9c412e3d9",
    slug: "clearpoll"
  },
  LGO: {
    name: "LGO Token",
    decimals: 8,
    address: "0x0a50c93c762fdd6e56d86215c24aaad43ab629aa"
  },
  "1UP": {
    name: "Uptrennd",
    decimals: 18,
    address: "0x07597255910a51509ca469568b048f2597e72504"
  }
};

function print(obj) {
  for (let [key, value] of Object.entries(obj)) {
    logger.info({
      symbol: key,
      name: value.name,
      address: value.address,
      decimals: value.decimals
    });
  }
}

import { default as id } from "../constants/idex";
import { default as uniswap } from "./uniswap";

async function findInt() {
  let _id = await id.filter(function(n) {
    for (var i = 0; i < uniswap.length; i++) {
      if (n.symbol == uniswap[i].symbol) {
        return true;
      }
    }
    return false;
  });

  logger.info(JSON.stringify(_id));
  logger.info(_id.length);
}

findInt();
