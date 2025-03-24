import { type Abi, type Address } from "viem";
import type { PartialRecord } from "@/common";
import { NotSupportError } from "@/Error";
import { fixedPriceAbiBeta, fixedPriceAbiTest } from "@/abi/EscrowFixedPrice";
import { milestoneAbiBeta, milestoneAbiTest } from "@/abi/EscrowMilestone";
import { hourlyAbiTest } from "@/abi/EscrowHourly";
import { factoryAbiBeta, factoryAbiTest } from "@/abi/EscrowFactory";
import { feeManagerAbiTest } from "@/abi/FeeManager";

export type Environment = "prod" | "beta" | "beta2" | "test";

export type SymbolToken = "USDT" | "USDC" | "DAI" | "MockUSDT" | "MockDAI" | "MockUSDC";

export type DataToken = {
  symbol: SymbolToken;
  address: Address;
  decimals: number;
};

export type TokenList = PartialRecord<SymbolToken, DataToken>;

export function* iterateTokenList(tokenList: TokenList): IterableIterator<DataToken> {
  for (const symbol of Object.keys(tokenList) as SymbolToken[]) {
    const dataToken = tokenList[symbol];
    if (dataToken) {
      yield dataToken;
    }
  }
}

export type ContractList = {
  chainName: ChainNameEnum;
  escrow: { [key: string]: Address | Abi };
  tokenList: TokenList;
};

export enum ChainID {
  Sepolia = 11_155_111,
  BlastSepolia = 168_587_773,
  PolygonAmoy = 80_002,
}

export type ChainList = PartialRecord<ChainID, ContractList>;

export type EnvironmentList = Record<Environment, ChainList>;

export enum ChainNameEnum {
  Localhost = "Localhost",
  Sepolia = "Sepolia",
  BlastSepolia = "BlastSepolia",
  PolygonAmoy = "PolygonAmoy",
  PolygonMainnet = "PolygonMainnet",
}

export const environmentList: EnvironmentList = {
  test: {
    80_002: {
      chainName: ChainNameEnum.PolygonAmoy,
      escrow: {
        ESCROW_FIX_PRICE: "0xB4124e19D482Afc4172740F836200943580C5DD1",
        ESCROW_MILESTONE: "0x75E871c9160519334e712F44C2C4A36FCBAC1C76",
        ESCROW_HOURLY: "0x7D2D6482c8612Fa04406A3BA099F31146D0E447b",
        FACTORY: "0x44BB077F73FD6136187EA408F695f7508E88e236",
        REGISTRY: "0x511576f212FfA4A985e79804de213904B701B095",
        FEE_MANAGER: "0x802603E43D68b5A5C5A1fae8De96ec6caf30EE01",
        ADMIN_MANAGER: "0x2248A2e34FBCd2FC2cD5c436B82ED0B257cf5de3",
        ADMIN: "0x3eAb900aC1E0de25F465c63717cD1044fF69243C",
        MOCK_PAYMENT_TOKEN: "0xD19AC10fE911d913Eb0B731925d3a69c80Bd6643",
        ESCROW_ACCOUNT_RECOVERY: "0xFa29B8D4bFC70c623073F5B46Da35612A3ec300b",
        FIXED_PRICE_ABI: fixedPriceAbiTest,
        MILESTONE_ABI: milestoneAbiTest,
        HOURLY_ABI: hourlyAbiTest,
        FACTORY_ABI: factoryAbiTest,
        FEE_MANAGER_ABI: feeManagerAbiTest,
      },
      tokenList: {
        MockUSDT: {
          symbol: "MockUSDT",
          address: "0xD19AC10fE911d913Eb0B731925d3a69c80Bd6643",
          decimals: 6,
        },
        MockDAI: {
          symbol: "MockDAI",
          address: "0xA0A8Ee7bF502EC4Eb5C670fE5c63092950dbB718",
          decimals: 18,
        },
        MockUSDC: {
          symbol: "MockUSDC",
          address: "0x2AFf4E62eC8A5798798a481258DE66d88fB6bbCb",
          decimals: 6,
        },
      },
    },
  },
  beta: {
    80_002: {
      chainName: ChainNameEnum.PolygonAmoy,
      escrow: {
        ESCROW_FIX_PRICE: "0x8c7F5312f4c5993e5D3766C2E8d0a0A1c455290B",
        ESCROW_MILESTONE: "0xEb9DD15Cc9B33c2D7747bc2500c92d36381E7003",
        ESCROW_HOURLY: "0x4B92D1B0207210f66352615a57Ed11915BBeA0CE",
        FACTORY: "0xE1a67dbA1FB4207c4E5dbB6C0bA9832290a4F98F",
        REGISTRY: "0x5Bb26eF73D0Ce2a1060bEd3f42Ec50F247dFf61B",
        FEE_MANAGER: "0x661855f5f3f6E4536b535d6C325ebb399889556c",
        ADMIN_MANAGER: "0x501cbBCa63ea1f0cc9a490A33B60f08eCD2DAB27",
        ADMIN: "0x3eAb900aC1E0de25F465c63717cD1044fF69243C",
        MOCK_PAYMENT_TOKEN: "0xD19AC10fE911d913Eb0B731925d3a69c80Bd6643",
        FIXED_PRICE_ABI: fixedPriceAbiBeta,
        MILESTONE_ABI: milestoneAbiBeta,
        HOURLY_ABI: hourlyAbiTest,
        FACTORY_ABI: factoryAbiBeta,
        FEE_MANAGER_ABI: feeManagerAbiTest,
      },
      tokenList: {
        MockUSDT: {
          symbol: "MockUSDT",
          address: "0xD19AC10fE911d913Eb0B731925d3a69c80Bd6643",
          decimals: 6,
        },
        MockDAI: {
          symbol: "MockDAI",
          address: "0xA0A8Ee7bF502EC4Eb5C670fE5c63092950dbB718",
          decimals: 18,
        },
        MockUSDC: {
          symbol: "MockUSDC",
          address: "0x2AFf4E62eC8A5798798a481258DE66d88fB6bbCb",
          decimals: 6,
        },
      },
    },
  },
  beta2: {
    80_002: {
      chainName: ChainNameEnum.PolygonAmoy,
      escrow: {
        ESCROW_FIX_PRICE: "0x8c7F5312f4c5993e5D3766C2E8d0a0A1c455290B",
        ESCROW_MILESTONE: "0xEb9DD15Cc9B33c2D7747bc2500c92d36381E7003",
        ESCROW_HOURLY: "0x4B92D1B0207210f66352615a57Ed11915BBeA0CE",
        FACTORY: "0xE1a67dbA1FB4207c4E5dbB6C0bA9832290a4F98F",
        REGISTRY: "0x5Bb26eF73D0Ce2a1060bEd3f42Ec50F247dFf61B",
        FEE_MANAGER: "0x661855f5f3f6E4536b535d6C325ebb399889556c",
        ADMIN_MANAGER: "0x501cbBCa63ea1f0cc9a490A33B60f08eCD2DAB27",
        ADMIN: "0x3eAb900aC1E0de25F465c63717cD1044fF69243C",
        MOCK_PAYMENT_TOKEN: "0xD19AC10fE911d913Eb0B731925d3a69c80Bd6643",
        FIXED_PRICE_ABI: fixedPriceAbiBeta,
        MILESTONE_ABI: milestoneAbiBeta,
        HOURLY_ABI: hourlyAbiTest,
        FACTORY_ABI: factoryAbiBeta,
        FEE_MANAGER_ABI: feeManagerAbiTest,
      },
      tokenList: {
        MockUSDT: {
          symbol: "MockUSDT",
          address: "0xD19AC10fE911d913Eb0B731925d3a69c80Bd6643",
          decimals: 6,
        },
        MockDAI: {
          symbol: "MockDAI",
          address: "0xA0A8Ee7bF502EC4Eb5C670fE5c63092950dbB718",
          decimals: 18,
        },
        MockUSDC: {
          symbol: "MockUSDC",
          address: "0x2AFf4E62eC8A5798798a481258DE66d88fB6bbCb",
          decimals: 6,
        },
      },
    },
  },
  prod: {
    80_002: {
      chainName: ChainNameEnum.PolygonAmoy,
      escrow: {
        ESCROW_FIX_PRICE: "0xF6582D871a9aCcf0Bfc18377b9cb93566194BeCf",
        ESCROW_MILESTONE: "0xa68dF8f729b26b5BAD01b110923c214a243700A3",
        ESCROW_HOURLY: "0xbC8AFFb4e35b5105162AaA48F70bcA44089F1626",
        FACTORY: "0x15e779fa539f531a4b3a60c195f47cbCAE061D11",
        REGISTRY: "0xA0c388fBd55531D2Dda8E2c2DF72aa9f8CEE73e5",
        FEE_MANAGER: "0x378F9F07F704fd5fB3d904Bef8bAe1aF58424c31",
        ADMIN_MANAGER: "0x20fE88728955Dc73d15a5005040d484E97A42e33",
        ADMIN: "0x048253FeF27736A86B42b4F5Ce2874286FC1acaE",
        MOCK_PAYMENT_TOKEN: "0xD19AC10fE911d913Eb0B731925d3a69c80Bd6643",
        FIXED_PRICE_ABI: fixedPriceAbiBeta,
        MILESTONE_ABI: milestoneAbiBeta,
        HOURLY_ABI: hourlyAbiTest,
        FACTORY_ABI: factoryAbiBeta,
        FEE_MANAGER_ABI: feeManagerAbiTest,
      },
      tokenList: {
        USDT: {
          symbol: "USDT",
          address: "0xc2132D05D31c914a87C6611C10748AEb04B58e8F",
          decimals: 6,
        },
        DAI: {
          symbol: "DAI",
          address: "0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063",
          decimals: 18,
        },
        USDC: {
          symbol: "USDC",
          address: "0x3c499c542cEF5E3811e1192ce70d8cC03d5c3359",
          decimals: 6,
        },
      },
    },
  },
};

export function environmentByName(name: Environment): ChainList {
  const environment = environmentList[name];
  if (!environment) {
    throw new NotSupportError(`environment ${name}`);
  }
  return environmentList[name];
}

export function contractList(name: Environment, chainID: ChainID): ContractList {
  const environment = environmentByName(name);
  const chainList = environment[chainID];
  if (!chainList) {
    throw new NotSupportError(`chain id ${chainID}`);
  }
  return chainList;
}
