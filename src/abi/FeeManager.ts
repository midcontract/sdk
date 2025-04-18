export const feeManagerAbiTest = [
  {
    inputs: [
      { internalType: "address", name: "_adminManager", type: "address" },
      { internalType: "uint16", name: "_coverage", type: "uint16" },
      { internalType: "uint16", name: "_claim", type: "uint16" },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  { inputs: [], name: "FeeTooHigh", type: "error" },
  { inputs: [], name: "UnauthorizedAccount", type: "error" },
  { inputs: [], name: "UnsupportedFeeConfiguration", type: "error" },
  { inputs: [], name: "ZeroAddressProvided", type: "error" },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "address", name: "instance", type: "address" },
      { indexed: true, internalType: "uint256", name: "contractId", type: "uint256" },
    ],
    name: "ContractSpecificFeesReset",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "address", name: "instance", type: "address" },
      { indexed: true, internalType: "uint256", name: "contractId", type: "uint256" },
      { indexed: false, internalType: "uint16", name: "coverage", type: "uint16" },
      { indexed: false, internalType: "uint16", name: "claim", type: "uint16" },
    ],
    name: "ContractSpecificFeesSet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: false, internalType: "uint16", name: "coverage", type: "uint16" },
      { indexed: false, internalType: "uint16", name: "claim", type: "uint16" },
    ],
    name: "DefaultFeesSet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "address", name: "instance", type: "address" },
      { indexed: false, internalType: "uint16", name: "coverage", type: "uint16" },
      { indexed: false, internalType: "uint16", name: "claim", type: "uint16" },
    ],
    name: "InstanceFeesSet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [{ indexed: true, internalType: "address", name: "instance", type: "address" }],
    name: "InstanceSpecificFeesReset",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [{ indexed: true, internalType: "address", name: "user", type: "address" }],
    name: "UserSpecificFeesReset",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "address", name: "user", type: "address" },
      { indexed: false, internalType: "uint16", name: "coverage", type: "uint16" },
      { indexed: false, internalType: "uint16", name: "claim", type: "uint16" },
    ],
    name: "UserSpecificFeesSet",
    type: "event",
  },
  {
    inputs: [],
    name: "MAX_BPS",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "MAX_FEE_BPS",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "adminManager",
    outputs: [{ internalType: "contract IEscrowAdminManager", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "_instance", type: "address" },
      { internalType: "uint256", name: "_contractId", type: "uint256" },
      { internalType: "address", name: "_contractor", type: "address" },
      { internalType: "uint256", name: "_claimedAmount", type: "uint256" },
      { internalType: "enum Enums.FeeConfig", name: "_feeConfig", type: "uint8" },
    ],
    name: "computeClaimableAmountAndFee",
    outputs: [
      { internalType: "uint256", name: "claimableAmount", type: "uint256" },
      { internalType: "uint256", name: "feeDeducted", type: "uint256" },
      { internalType: "uint256", name: "clientFee", type: "uint256" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "_instance", type: "address" },
      { internalType: "uint256", name: "_contractId", type: "uint256" },
      { internalType: "address", name: "_client", type: "address" },
      { internalType: "uint256", name: "_depositAmount", type: "uint256" },
      { internalType: "enum Enums.FeeConfig", name: "_feeConfig", type: "uint8" },
    ],
    name: "computeDepositAmountAndFee",
    outputs: [
      { internalType: "uint256", name: "totalDepositAmount", type: "uint256" },
      { internalType: "uint256", name: "feeApplied", type: "uint256" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "instance", type: "address" },
      { internalType: "uint256", name: "contractId", type: "uint256" },
    ],
    name: "contractSpecificFees",
    outputs: [
      { internalType: "uint16", name: "coverage", type: "uint16" },
      { internalType: "uint16", name: "claim", type: "uint16" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "defaultFees",
    outputs: [
      { internalType: "uint16", name: "coverage", type: "uint16" },
      { internalType: "uint16", name: "claim", type: "uint16" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "_instance", type: "address" },
      { internalType: "uint256", name: "_contractId", type: "uint256" },
      { internalType: "address", name: "_user", type: "address" },
    ],
    name: "getApplicableFees",
    outputs: [
      {
        components: [
          { internalType: "uint16", name: "coverage", type: "uint16" },
          { internalType: "uint16", name: "claim", type: "uint16" },
        ],
        internalType: "struct IEscrowFeeManager.FeeRates",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "instance", type: "address" }],
    name: "instanceFees",
    outputs: [
      { internalType: "uint16", name: "coverage", type: "uint16" },
      { internalType: "uint16", name: "claim", type: "uint16" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "_instance", type: "address" },
      { internalType: "uint256", name: "_contractId", type: "uint256" },
      { internalType: "address", name: "_user", type: "address" },
    ],
    name: "resetAllToDefault",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "_instance", type: "address" },
      { internalType: "uint256", name: "_contractId", type: "uint256" },
    ],
    name: "resetContractSpecificFees",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "_instance", type: "address" }],
    name: "resetInstanceSpecificFees",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "_user", type: "address" }],
    name: "resetUserSpecificFees",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "_instance", type: "address" },
      { internalType: "uint256", name: "_contractId", type: "uint256" },
      { internalType: "uint16", name: "_coverage", type: "uint16" },
      { internalType: "uint16", name: "_claim", type: "uint16" },
    ],
    name: "setContractSpecificFees",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint16", name: "_coverage", type: "uint16" },
      { internalType: "uint16", name: "_claim", type: "uint16" },
    ],
    name: "setDefaultFees",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "_instance", type: "address" },
      { internalType: "uint16", name: "_coverage", type: "uint16" },
      { internalType: "uint16", name: "_claim", type: "uint16" },
    ],
    name: "setInstanceFees",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "_user", type: "address" },
      { internalType: "uint16", name: "_coverage", type: "uint16" },
      { internalType: "uint16", name: "_claim", type: "uint16" },
    ],
    name: "setUserSpecificFees",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "user", type: "address" }],
    name: "userSpecificFees",
    outputs: [
      { internalType: "uint16", name: "coverage", type: "uint16" },
      { internalType: "uint16", name: "claim", type: "uint16" },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

export const feeManagerAbiBeta = [
  {
    inputs: [
      { internalType: "address", name: "_adminManager", type: "address" },
      { internalType: "uint16", name: "_coverage", type: "uint16" },
      { internalType: "uint16", name: "_claim", type: "uint16" },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  { inputs: [], name: "FeeTooHigh", type: "error" },
  { inputs: [], name: "UnauthorizedAccount", type: "error" },
  { inputs: [], name: "UnsupportedFeeConfiguration", type: "error" },
  { inputs: [], name: "ZeroAddressProvided", type: "error" },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "address", name: "instance", type: "address" },
      { indexed: true, internalType: "uint256", name: "contractId", type: "uint256" },
    ],
    name: "ContractSpecificFeesReset",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "address", name: "instance", type: "address" },
      { indexed: true, internalType: "uint256", name: "contractId", type: "uint256" },
      { indexed: false, internalType: "uint16", name: "coverage", type: "uint16" },
      { indexed: false, internalType: "uint16", name: "claim", type: "uint16" },
    ],
    name: "ContractSpecificFeesSet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: false, internalType: "uint16", name: "coverage", type: "uint16" },
      { indexed: false, internalType: "uint16", name: "claim", type: "uint16" },
    ],
    name: "DefaultFeesSet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "address", name: "instance", type: "address" },
      { indexed: false, internalType: "uint16", name: "coverage", type: "uint16" },
      { indexed: false, internalType: "uint16", name: "claim", type: "uint16" },
    ],
    name: "InstanceFeesSet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [{ indexed: true, internalType: "address", name: "instance", type: "address" }],
    name: "InstanceSpecificFeesReset",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [{ indexed: true, internalType: "address", name: "user", type: "address" }],
    name: "UserSpecificFeesReset",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "address", name: "user", type: "address" },
      { indexed: false, internalType: "uint16", name: "coverage", type: "uint16" },
      { indexed: false, internalType: "uint16", name: "claim", type: "uint16" },
    ],
    name: "UserSpecificFeesSet",
    type: "event",
  },
  {
    inputs: [],
    name: "MAX_BPS",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "MAX_FEE_BPS",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "adminManager",
    outputs: [{ internalType: "contract IEscrowAdminManager", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "_instance", type: "address" },
      { internalType: "uint256", name: "_contractId", type: "uint256" },
      { internalType: "address", name: "_contractor", type: "address" },
      { internalType: "uint256", name: "_claimedAmount", type: "uint256" },
      { internalType: "enum Enums.FeeConfig", name: "_feeConfig", type: "uint8" },
    ],
    name: "computeClaimableAmountAndFee",
    outputs: [
      { internalType: "uint256", name: "claimableAmount", type: "uint256" },
      { internalType: "uint256", name: "feeDeducted", type: "uint256" },
      { internalType: "uint256", name: "clientFee", type: "uint256" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "_instance", type: "address" },
      { internalType: "uint256", name: "_contractId", type: "uint256" },
      { internalType: "address", name: "_client", type: "address" },
      { internalType: "uint256", name: "_depositAmount", type: "uint256" },
      { internalType: "enum Enums.FeeConfig", name: "_feeConfig", type: "uint8" },
    ],
    name: "computeDepositAmountAndFee",
    outputs: [
      { internalType: "uint256", name: "totalDepositAmount", type: "uint256" },
      { internalType: "uint256", name: "feeApplied", type: "uint256" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "instance", type: "address" },
      { internalType: "uint256", name: "contractId", type: "uint256" },
    ],
    name: "contractSpecificFees",
    outputs: [
      { internalType: "uint16", name: "coverage", type: "uint16" },
      { internalType: "uint16", name: "claim", type: "uint16" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "defaultFees",
    outputs: [
      { internalType: "uint16", name: "coverage", type: "uint16" },
      { internalType: "uint16", name: "claim", type: "uint16" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "_instance", type: "address" },
      { internalType: "uint256", name: "_contractId", type: "uint256" },
      { internalType: "address", name: "_user", type: "address" },
    ],
    name: "getApplicableFees",
    outputs: [
      {
        components: [
          { internalType: "uint16", name: "coverage", type: "uint16" },
          { internalType: "uint16", name: "claim", type: "uint16" },
        ],
        internalType: "struct IEscrowFeeManager.FeeRates",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "instance", type: "address" }],
    name: "instanceFees",
    outputs: [
      { internalType: "uint16", name: "coverage", type: "uint16" },
      { internalType: "uint16", name: "claim", type: "uint16" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "_instance", type: "address" },
      { internalType: "uint256", name: "_contractId", type: "uint256" },
      { internalType: "address", name: "_user", type: "address" },
    ],
    name: "resetAllToDefault",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "_instance", type: "address" },
      { internalType: "uint256", name: "_contractId", type: "uint256" },
    ],
    name: "resetContractSpecificFees",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "_instance", type: "address" }],
    name: "resetInstanceSpecificFees",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "_user", type: "address" }],
    name: "resetUserSpecificFees",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "_instance", type: "address" },
      { internalType: "uint256", name: "_contractId", type: "uint256" },
      { internalType: "uint16", name: "_coverage", type: "uint16" },
      { internalType: "uint16", name: "_claim", type: "uint16" },
    ],
    name: "setContractSpecificFees",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint16", name: "_coverage", type: "uint16" },
      { internalType: "uint16", name: "_claim", type: "uint16" },
    ],
    name: "setDefaultFees",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "_instance", type: "address" },
      { internalType: "uint16", name: "_coverage", type: "uint16" },
      { internalType: "uint16", name: "_claim", type: "uint16" },
    ],
    name: "setInstanceFees",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "_user", type: "address" },
      { internalType: "uint16", name: "_coverage", type: "uint16" },
      { internalType: "uint16", name: "_claim", type: "uint16" },
    ],
    name: "setUserSpecificFees",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "user", type: "address" }],
    name: "userSpecificFees",
    outputs: [
      { internalType: "uint16", name: "coverage", type: "uint16" },
      { internalType: "uint16", name: "claim", type: "uint16" },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

export const feeManagerAbiProd = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_adminManager",
        type: "address",
      },
      { internalType: "uint16", name: "_coverage", type: "uint16" },
      {
        internalType: "uint16",
        name: "_claim",
        type: "uint16",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  { inputs: [], name: "FeeTooHigh", type: "error" },
  {
    inputs: [],
    name: "UnauthorizedAccount",
    type: "error",
  },
  { inputs: [], name: "UnsupportedFeeConfiguration", type: "error" },
  {
    inputs: [],
    name: "ZeroAddressProvided",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "address", name: "instance", type: "address" },
      {
        indexed: true,
        internalType: "uint256",
        name: "contractId",
        type: "uint256",
      },
    ],
    name: "ContractSpecificFeesReset",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "address", name: "instance", type: "address" },
      {
        indexed: true,
        internalType: "uint256",
        name: "contractId",
        type: "uint256",
      },
      { indexed: false, internalType: "uint16", name: "coverage", type: "uint16" },
      {
        indexed: false,
        internalType: "uint16",
        name: "claim",
        type: "uint16",
      },
    ],
    name: "ContractSpecificFeesSet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: false, internalType: "uint16", name: "coverage", type: "uint16" },
      {
        indexed: false,
        internalType: "uint16",
        name: "claim",
        type: "uint16",
      },
    ],
    name: "DefaultFeesSet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "address", name: "instance", type: "address" },
      {
        indexed: false,
        internalType: "uint16",
        name: "coverage",
        type: "uint16",
      },
      { indexed: false, internalType: "uint16", name: "claim", type: "uint16" },
    ],
    name: "InstanceFeesSet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [{ indexed: true, internalType: "address", name: "instance", type: "address" }],
    name: "InstanceSpecificFeesReset",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [{ indexed: true, internalType: "address", name: "user", type: "address" }],
    name: "UserSpecificFeesReset",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "address", name: "user", type: "address" },
      {
        indexed: false,
        internalType: "uint16",
        name: "coverage",
        type: "uint16",
      },
      { indexed: false, internalType: "uint16", name: "claim", type: "uint16" },
    ],
    name: "UserSpecificFeesSet",
    type: "event",
  },
  {
    inputs: [],
    name: "MAX_BPS",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "MAX_FEE_BPS",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "adminManager",
    outputs: [{ internalType: "contract IEscrowAdminManager", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "_instance", type: "address" },
      {
        internalType: "uint256",
        name: "_contractId",
        type: "uint256",
      },
      { internalType: "address", name: "_contractor", type: "address" },
      {
        internalType: "uint256",
        name: "_claimedAmount",
        type: "uint256",
      },
      { internalType: "enum Enums.FeeConfig", name: "_feeConfig", type: "uint8" },
    ],
    name: "computeClaimableAmountAndFee",
    outputs: [
      { internalType: "uint256", name: "claimableAmount", type: "uint256" },
      {
        internalType: "uint256",
        name: "feeDeducted",
        type: "uint256",
      },
      { internalType: "uint256", name: "clientFee", type: "uint256" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "_instance", type: "address" },
      {
        internalType: "uint256",
        name: "_contractId",
        type: "uint256",
      },
      { internalType: "address", name: "_client", type: "address" },
      {
        internalType: "uint256",
        name: "_depositAmount",
        type: "uint256",
      },
      { internalType: "enum Enums.FeeConfig", name: "_feeConfig", type: "uint8" },
    ],
    name: "computeDepositAmountAndFee",
    outputs: [
      {
        internalType: "uint256",
        name: "totalDepositAmount",
        type: "uint256",
      },
      { internalType: "uint256", name: "feeApplied", type: "uint256" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "instance", type: "address" },
      {
        internalType: "uint256",
        name: "contractId",
        type: "uint256",
      },
    ],
    name: "contractSpecificFees",
    outputs: [
      { internalType: "uint16", name: "coverage", type: "uint16" },
      {
        internalType: "uint16",
        name: "claim",
        type: "uint16",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "defaultFees",
    outputs: [
      { internalType: "uint16", name: "coverage", type: "uint16" },
      {
        internalType: "uint16",
        name: "claim",
        type: "uint16",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "_instance", type: "address" },
      {
        internalType: "uint256",
        name: "_contractId",
        type: "uint256",
      },
      { internalType: "address", name: "_user", type: "address" },
    ],
    name: "getApplicableFees",
    outputs: [
      {
        components: [
          {
            internalType: "uint16",
            name: "coverage",
            type: "uint16",
          },
          { internalType: "uint16", name: "claim", type: "uint16" },
        ],
        internalType: "struct IEscrowFeeManager.FeeRates",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "instance", type: "address" }],
    name: "instanceFees",
    outputs: [
      { internalType: "uint16", name: "coverage", type: "uint16" },
      {
        internalType: "uint16",
        name: "claim",
        type: "uint16",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "_instance", type: "address" },
      {
        internalType: "uint256",
        name: "_contractId",
        type: "uint256",
      },
      { internalType: "address", name: "_user", type: "address" },
    ],
    name: "resetAllToDefault",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "_instance", type: "address" },
      {
        internalType: "uint256",
        name: "_contractId",
        type: "uint256",
      },
    ],
    name: "resetContractSpecificFees",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "_instance", type: "address" }],
    name: "resetInstanceSpecificFees",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "_user", type: "address" }],
    name: "resetUserSpecificFees",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "_instance", type: "address" },
      {
        internalType: "uint256",
        name: "_contractId",
        type: "uint256",
      },
      { internalType: "uint16", name: "_coverage", type: "uint16" },
      {
        internalType: "uint16",
        name: "_claim",
        type: "uint16",
      },
    ],
    name: "setContractSpecificFees",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint16", name: "_coverage", type: "uint16" },
      {
        internalType: "uint16",
        name: "_claim",
        type: "uint16",
      },
    ],
    name: "setDefaultFees",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "_instance", type: "address" },
      {
        internalType: "uint16",
        name: "_coverage",
        type: "uint16",
      },
      { internalType: "uint16", name: "_claim", type: "uint16" },
    ],
    name: "setInstanceFees",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "_user", type: "address" },
      {
        internalType: "uint16",
        name: "_coverage",
        type: "uint16",
      },
      { internalType: "uint16", name: "_claim", type: "uint16" },
    ],
    name: "setUserSpecificFees",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "user", type: "address" }],
    name: "userSpecificFees",
    outputs: [
      { internalType: "uint16", name: "coverage", type: "uint16" },
      {
        internalType: "uint16",
        name: "claim",
        type: "uint16",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;
