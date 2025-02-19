export const hourlyAbiTest = [
  { inputs: [], name: "Escrow__AlreadyInitialized", type: "error" },
  { inputs: [], name: "Escrow__AuthorizationExpired", type: "error" },
  { inputs: [], name: "Escrow__BlacklistedAccount", type: "error" },
  { inputs: [], name: "Escrow__ContractIdAlreadyExists", type: "error" },
  { inputs: [], name: "Escrow__ContractorMismatch", type: "error" },
  { inputs: [], name: "Escrow__CreateDisputeNotAllowed", type: "error" },
  { inputs: [], name: "Escrow__DisputeNotActiveForThisDeposit", type: "error" },
  { inputs: [], name: "Escrow__FeeTooHigh", type: "error" },
  { inputs: [], name: "Escrow__InsufficientPrepayment", type: "error" },
  { inputs: [], name: "Escrow__InvalidAmount", type: "error" },
  { inputs: [], name: "Escrow__InvalidContractId", type: "error" },
  { inputs: [], name: "Escrow__InvalidContractorDataHash", type: "error" },
  { inputs: [], name: "Escrow__InvalidFeeConfig", type: "error" },
  { inputs: [], name: "Escrow__InvalidRange", type: "error" },
  { inputs: [], name: "Escrow__InvalidSignature", type: "error" },
  { inputs: [], name: "Escrow__InvalidStatusForApprove", type: "error" },
  { inputs: [], name: "Escrow__InvalidStatusForSubmit", type: "error" },
  { inputs: [], name: "Escrow__InvalidStatusProvided", type: "error" },
  { inputs: [], name: "Escrow__InvalidStatusToClaim", type: "error" },
  { inputs: [], name: "Escrow__InvalidStatusToWithdraw", type: "error" },
  { inputs: [], name: "Escrow__InvalidWeekId", type: "error" },
  { inputs: [], name: "Escrow__InvalidWinnerSpecified", type: "error" },
  { inputs: [], name: "Escrow__NoDepositsProvided", type: "error" },
  { inputs: [], name: "Escrow__NoFundsAvailableForWithdraw", type: "error" },
  { inputs: [], name: "Escrow__NoReturnRequested", type: "error" },
  { inputs: [], name: "Escrow__NotApproved", type: "error" },
  { inputs: [], name: "Escrow__NotEnoughDeposit", type: "error" },
  { inputs: [], name: "Escrow__NotSetFeeManager", type: "error" },
  { inputs: [], name: "Escrow__NotSupportedPaymentToken", type: "error" },
  { inputs: [], name: "Escrow__OutOfRange", type: "error" },
  { inputs: [], name: "Escrow__PaymentTokenMismatch", type: "error" },
  { inputs: [], name: "Escrow__ResolutionExceedsDepositedAmount", type: "error" },
  { inputs: [], name: "Escrow__ReturnNotAllowed", type: "error" },
  {
    inputs: [{ internalType: "address", name: "account", type: "address" }],
    name: "Escrow__UnauthorizedAccount",
    type: "error",
  },
  { inputs: [], name: "Escrow__UnauthorizedReceiver", type: "error" },
  { inputs: [], name: "Escrow__UnauthorizedToApproveDispute", type: "error" },
  { inputs: [], name: "Escrow__UnauthorizedToApproveReturn", type: "error" },
  { inputs: [], name: "Escrow__ZeroAddressProvided", type: "error" },
  { inputs: [], name: "Escrow__ZeroDepositAmount", type: "error" },
  {
    anonymous: false,
    inputs: [{ indexed: false, internalType: "address", name: "adminManager", type: "address" }],
    name: "AdminManagerUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "address", name: "approver", type: "address" },
      { indexed: true, internalType: "uint256", name: "contractId", type: "uint256" },
      { indexed: false, internalType: "uint256", name: "weekId", type: "uint256" },
      { indexed: false, internalType: "uint256", name: "amountApprove", type: "uint256" },
      { indexed: false, internalType: "address", name: "receiver", type: "address" },
    ],
    name: "Approved",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "address", name: "contractor", type: "address" },
      { indexed: true, internalType: "uint256", name: "contractId", type: "uint256" },
      { indexed: false, internalType: "uint256", name: "startWeekId", type: "uint256" },
      { indexed: false, internalType: "uint256", name: "endWeekId", type: "uint256" },
      { indexed: false, internalType: "uint256", name: "totalClaimedAmount", type: "uint256" },
      { indexed: false, internalType: "uint256", name: "totalFeeAmount", type: "uint256" },
      { indexed: false, internalType: "uint256", name: "totalClientFee", type: "uint256" },
      { indexed: true, internalType: "address", name: "client", type: "address" },
    ],
    name: "BulkClaimed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "address", name: "contractor", type: "address" },
      { indexed: true, internalType: "uint256", name: "contractId", type: "uint256" },
      { indexed: false, internalType: "uint256", name: "weekId", type: "uint256" },
      { indexed: false, internalType: "uint256", name: "amount", type: "uint256" },
      { indexed: false, internalType: "uint256", name: "feeAmount", type: "uint256" },
      { indexed: true, internalType: "address", name: "client", type: "address" },
    ],
    name: "Claimed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "address", name: "previousOwner", type: "address" },
      { indexed: true, internalType: "address", name: "newOwner", type: "address" },
    ],
    name: "ClientOwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "uint256", name: "contractId", type: "uint256" },
      { indexed: true, internalType: "address", name: "previousOwner", type: "address" },
      { indexed: true, internalType: "address", name: "newOwner", type: "address" },
    ],
    name: "ContractorOwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "address", name: "sender", type: "address" },
      { indexed: true, internalType: "uint256", name: "contractId", type: "uint256" },
      { indexed: false, internalType: "uint256", name: "weekId", type: "uint256" },
      { indexed: false, internalType: "uint256", name: "totalDepositAmount", type: "uint256" },
      { indexed: true, internalType: "address", name: "contractor", type: "address" },
    ],
    name: "Deposited",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "address", name: "sender", type: "address" },
      { indexed: true, internalType: "uint256", name: "contractId", type: "uint256" },
      { indexed: false, internalType: "uint256", name: "weekId", type: "uint256" },
      { indexed: true, internalType: "address", name: "client", type: "address" },
    ],
    name: "DisputeCreated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "address", name: "approver", type: "address" },
      { indexed: true, internalType: "uint256", name: "contractId", type: "uint256" },
      { indexed: false, internalType: "uint256", name: "weekId", type: "uint256" },
      { indexed: false, internalType: "enum Enums.Winner", name: "winner", type: "uint8" },
      { indexed: false, internalType: "uint256", name: "clientAmount", type: "uint256" },
      { indexed: false, internalType: "uint256", name: "contractorAmount", type: "uint256" },
      { indexed: true, internalType: "address", name: "client", type: "address" },
    ],
    name: "DisputeResolved",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "address", name: "sender", type: "address" },
      { indexed: true, internalType: "uint256", name: "contractId", type: "uint256" },
      { indexed: false, internalType: "uint256", name: "amount", type: "uint256" },
    ],
    name: "RefilledPrepayment",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "address", name: "sender", type: "address" },
      { indexed: true, internalType: "uint256", name: "contractId", type: "uint256" },
      { indexed: false, internalType: "uint256", name: "weekId", type: "uint256" },
      { indexed: false, internalType: "uint256", name: "amount", type: "uint256" },
    ],
    name: "RefilledWeekPayment",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [{ indexed: false, internalType: "address", name: "registry", type: "address" }],
    name: "RegistryUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "address", name: "approver", type: "address" },
      { indexed: true, internalType: "uint256", name: "contractId", type: "uint256" },
      { indexed: true, internalType: "address", name: "client", type: "address" },
    ],
    name: "ReturnApproved",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "address", name: "sender", type: "address" },
      { indexed: true, internalType: "uint256", name: "contractId", type: "uint256" },
    ],
    name: "ReturnCanceled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "address", name: "sender", type: "address" },
      { indexed: true, internalType: "uint256", name: "contractId", type: "uint256" },
    ],
    name: "ReturnRequested",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "address", name: "withdrawer", type: "address" },
      { indexed: true, internalType: "uint256", name: "contractId", type: "uint256" },
      { indexed: false, internalType: "uint256", name: "amount", type: "uint256" },
      { indexed: false, internalType: "uint256", name: "feeAmount", type: "uint256" },
    ],
    name: "Withdrawn",
    type: "event",
  },
  {
    inputs: [
      { internalType: "uint256", name: "_contractId", type: "uint256" },
      { internalType: "uint256", name: "_weekId", type: "uint256" },
      { internalType: "uint256", name: "_amountApprove", type: "uint256" },
      { internalType: "address", name: "_receiver", type: "address" },
      { internalType: "bool", name: "_initializeNewWeek", type: "bool" },
    ],
    name: "adminApprove",
    outputs: [],
    stateMutability: "nonpayable",
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
      { internalType: "uint256", name: "_contractId", type: "uint256" },
      { internalType: "uint256", name: "_weekId", type: "uint256" },
      { internalType: "uint256", name: "_amountApprove", type: "uint256" },
      { internalType: "address", name: "_receiver", type: "address" },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "_contractId", type: "uint256" }],
    name: "approveReturn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "_contractId", type: "uint256" }],
    name: "cancelReturn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "_contractId", type: "uint256" },
      { internalType: "uint256", name: "_weekId", type: "uint256" },
    ],
    name: "claim",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "_contractId", type: "uint256" },
      { internalType: "uint256", name: "_startWeekId", type: "uint256" },
      { internalType: "uint256", name: "_endWeekId", type: "uint256" },
    ],
    name: "claimAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "client",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "contractId", type: "uint256" }],
    name: "contractDetails",
    outputs: [
      { internalType: "address", name: "contractor", type: "address" },
      { internalType: "address", name: "paymentToken", type: "address" },
      { internalType: "uint256", name: "prepaymentAmount", type: "uint256" },
      { internalType: "uint256", name: "amountToWithdraw", type: "uint256" },
      { internalType: "enum Enums.FeeConfig", name: "feeConfig", type: "uint8" },
      { internalType: "enum Enums.Status", name: "status", type: "uint8" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "_contractId", type: "uint256" }],
    name: "contractExists",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "_contractId", type: "uint256" },
      { internalType: "uint256", name: "_weekId", type: "uint256" },
    ],
    name: "createDispute",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          { internalType: "uint256", name: "contractId", type: "uint256" },
          { internalType: "address", name: "contractor", type: "address" },
          { internalType: "address", name: "paymentToken", type: "address" },
          { internalType: "uint256", name: "prepaymentAmount", type: "uint256" },
          { internalType: "uint256", name: "amountToClaim", type: "uint256" },
          { internalType: "enum Enums.FeeConfig", name: "feeConfig", type: "uint8" },
          { internalType: "address", name: "escrow", type: "address" },
          { internalType: "uint256", name: "expiration", type: "uint256" },
          { internalType: "bytes", name: "signature", type: "bytes" },
        ],
        internalType: "struct IEscrowHourly.DepositRequest",
        name: "_deposit",
        type: "tuple",
      },
    ],
    name: "deposit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "_client", type: "address" },
      { internalType: "uint256", name: "_contractId", type: "uint256" },
      { internalType: "address", name: "_contractor", type: "address" },
      { internalType: "address", name: "_paymentToken", type: "address" },
      { internalType: "uint256", name: "_prepaymentAmount", type: "uint256" },
      { internalType: "uint256", name: "_amountToClaim", type: "uint256" },
      { internalType: "enum Enums.FeeConfig", name: "_feeConfig", type: "uint8" },
      { internalType: "uint256", name: "_expiration", type: "uint256" },
    ],
    name: "getDepositHash",
    outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "_contractId", type: "uint256" }],
    name: "getWeeksCount",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "_client", type: "address" },
      { internalType: "address", name: "_adminManager", type: "address" },
      { internalType: "address", name: "_registry", type: "address" },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "initialized",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "bytes32", name: "_hash", type: "bytes32" },
      { internalType: "bytes", name: "_signature", type: "bytes" },
    ],
    name: "isValidSignature",
    outputs: [{ internalType: "bytes4", name: "", type: "bytes4" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "contractId", type: "uint256" }],
    name: "previousStatuses",
    outputs: [{ internalType: "enum Enums.Status", name: "", type: "uint8" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "_contractId", type: "uint256" },
      { internalType: "uint256", name: "_weekId", type: "uint256" },
      { internalType: "uint256", name: "_amount", type: "uint256" },
      { internalType: "enum Enums.RefillType", name: "_type", type: "uint8" },
    ],
    name: "refill",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "registry",
    outputs: [{ internalType: "contract IEscrowRegistry", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "_contractId", type: "uint256" }],
    name: "requestReturn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "_contractId", type: "uint256" },
      { internalType: "uint256", name: "_weekId", type: "uint256" },
      { internalType: "enum Enums.Winner", name: "_winner", type: "uint8" },
      { internalType: "uint256", name: "_clientAmount", type: "uint256" },
      { internalType: "uint256", name: "_contractorAmount", type: "uint256" },
    ],
    name: "resolveDispute",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "_newAccount", type: "address" }],
    name: "transferClientOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "_contractId", type: "uint256" },
      { internalType: "address", name: "_newAccount", type: "address" },
    ],
    name: "transferContractorOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "_adminManager", type: "address" }],
    name: "updateAdminManager",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "_registry", type: "address" }],
    name: "updateRegistry",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "contractId", type: "uint256" },
      { internalType: "uint256", name: "", type: "uint256" },
    ],
    name: "weeklyEntries",
    outputs: [
      { internalType: "uint256", name: "amountToClaim", type: "uint256" },
      { internalType: "enum Enums.Status", name: "weekStatus", type: "uint8" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "_contractId", type: "uint256" }],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export const hourlyAbiBeta = [
  { inputs: [], name: "Escrow__AlreadyInitialized", type: "error" },
  { inputs: [], name: "Escrow__AuthorizationExpired", type: "error" },
  { inputs: [], name: "Escrow__BlacklistedAccount", type: "error" },
  { inputs: [], name: "Escrow__ContractIdAlreadyExists", type: "error" },
  { inputs: [], name: "Escrow__ContractorMismatch", type: "error" },
  { inputs: [], name: "Escrow__CreateDisputeNotAllowed", type: "error" },
  { inputs: [], name: "Escrow__DisputeNotActiveForThisDeposit", type: "error" },
  { inputs: [], name: "Escrow__FeeTooHigh", type: "error" },
  { inputs: [], name: "Escrow__InsufficientPrepayment", type: "error" },
  { inputs: [], name: "Escrow__InvalidAmount", type: "error" },
  { inputs: [], name: "Escrow__InvalidContractId", type: "error" },
  { inputs: [], name: "Escrow__InvalidContractorDataHash", type: "error" },
  { inputs: [], name: "Escrow__InvalidFeeConfig", type: "error" },
  { inputs: [], name: "Escrow__InvalidRange", type: "error" },
  { inputs: [], name: "Escrow__InvalidSignature", type: "error" },
  { inputs: [], name: "Escrow__InvalidStatusForApprove", type: "error" },
  { inputs: [], name: "Escrow__InvalidStatusForSubmit", type: "error" },
  { inputs: [], name: "Escrow__InvalidStatusProvided", type: "error" },
  { inputs: [], name: "Escrow__InvalidStatusToClaim", type: "error" },
  { inputs: [], name: "Escrow__InvalidStatusToWithdraw", type: "error" },
  { inputs: [], name: "Escrow__InvalidWeekId", type: "error" },
  { inputs: [], name: "Escrow__InvalidWinnerSpecified", type: "error" },
  { inputs: [], name: "Escrow__NoDepositsProvided", type: "error" },
  { inputs: [], name: "Escrow__NoFundsAvailableForWithdraw", type: "error" },
  { inputs: [], name: "Escrow__NoReturnRequested", type: "error" },
  { inputs: [], name: "Escrow__NotApproved", type: "error" },
  { inputs: [], name: "Escrow__NotEnoughDeposit", type: "error" },
  { inputs: [], name: "Escrow__NotSetFeeManager", type: "error" },
  { inputs: [], name: "Escrow__NotSupportedPaymentToken", type: "error" },
  { inputs: [], name: "Escrow__OutOfRange", type: "error" },
  { inputs: [], name: "Escrow__PaymentTokenMismatch", type: "error" },
  { inputs: [], name: "Escrow__ResolutionExceedsDepositedAmount", type: "error" },
  { inputs: [], name: "Escrow__ReturnNotAllowed", type: "error" },
  {
    inputs: [{ internalType: "address", name: "account", type: "address" }],
    name: "Escrow__UnauthorizedAccount",
    type: "error",
  },
  { inputs: [], name: "Escrow__UnauthorizedReceiver", type: "error" },
  { inputs: [], name: "Escrow__UnauthorizedToApproveDispute", type: "error" },
  { inputs: [], name: "Escrow__UnauthorizedToApproveReturn", type: "error" },
  { inputs: [], name: "Escrow__ZeroAddressProvided", type: "error" },
  { inputs: [], name: "Escrow__ZeroDepositAmount", type: "error" },
  {
    anonymous: false,
    inputs: [{ indexed: false, internalType: "address", name: "adminManager", type: "address" }],
    name: "AdminManagerUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "address", name: "approver", type: "address" },
      { indexed: true, internalType: "uint256", name: "contractId", type: "uint256" },
      { indexed: false, internalType: "uint256", name: "weekId", type: "uint256" },
      { indexed: false, internalType: "uint256", name: "amountApprove", type: "uint256" },
      { indexed: false, internalType: "address", name: "receiver", type: "address" },
    ],
    name: "Approved",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "address", name: "contractor", type: "address" },
      { indexed: true, internalType: "uint256", name: "contractId", type: "uint256" },
      { indexed: false, internalType: "uint256", name: "startWeekId", type: "uint256" },
      { indexed: false, internalType: "uint256", name: "endWeekId", type: "uint256" },
      { indexed: false, internalType: "uint256", name: "totalClaimedAmount", type: "uint256" },
      { indexed: false, internalType: "uint256", name: "totalFeeAmount", type: "uint256" },
      { indexed: false, internalType: "uint256", name: "totalClientFee", type: "uint256" },
      { indexed: true, internalType: "address", name: "client", type: "address" },
    ],
    name: "BulkClaimed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "address", name: "contractor", type: "address" },
      { indexed: true, internalType: "uint256", name: "contractId", type: "uint256" },
      { indexed: false, internalType: "uint256", name: "weekId", type: "uint256" },
      { indexed: false, internalType: "uint256", name: "amount", type: "uint256" },
      { indexed: false, internalType: "uint256", name: "feeAmount", type: "uint256" },
      { indexed: true, internalType: "address", name: "client", type: "address" },
    ],
    name: "Claimed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "address", name: "previousOwner", type: "address" },
      { indexed: true, internalType: "address", name: "newOwner", type: "address" },
    ],
    name: "ClientOwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "uint256", name: "contractId", type: "uint256" },
      { indexed: true, internalType: "address", name: "previousOwner", type: "address" },
      { indexed: true, internalType: "address", name: "newOwner", type: "address" },
    ],
    name: "ContractorOwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "address", name: "sender", type: "address" },
      { indexed: true, internalType: "uint256", name: "contractId", type: "uint256" },
      { indexed: false, internalType: "uint256", name: "weekId", type: "uint256" },
      { indexed: false, internalType: "uint256", name: "totalDepositAmount", type: "uint256" },
      { indexed: true, internalType: "address", name: "contractor", type: "address" },
    ],
    name: "Deposited",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "address", name: "sender", type: "address" },
      { indexed: true, internalType: "uint256", name: "contractId", type: "uint256" },
      { indexed: false, internalType: "uint256", name: "weekId", type: "uint256" },
      { indexed: true, internalType: "address", name: "client", type: "address" },
    ],
    name: "DisputeCreated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "address", name: "approver", type: "address" },
      { indexed: true, internalType: "uint256", name: "contractId", type: "uint256" },
      { indexed: false, internalType: "uint256", name: "weekId", type: "uint256" },
      { indexed: false, internalType: "enum Enums.Winner", name: "winner", type: "uint8" },
      { indexed: false, internalType: "uint256", name: "clientAmount", type: "uint256" },
      { indexed: false, internalType: "uint256", name: "contractorAmount", type: "uint256" },
      { indexed: true, internalType: "address", name: "client", type: "address" },
    ],
    name: "DisputeResolved",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "address", name: "sender", type: "address" },
      { indexed: true, internalType: "uint256", name: "contractId", type: "uint256" },
      { indexed: false, internalType: "uint256", name: "amount", type: "uint256" },
    ],
    name: "RefilledPrepayment",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "address", name: "sender", type: "address" },
      { indexed: true, internalType: "uint256", name: "contractId", type: "uint256" },
      { indexed: false, internalType: "uint256", name: "weekId", type: "uint256" },
      { indexed: false, internalType: "uint256", name: "amount", type: "uint256" },
    ],
    name: "RefilledWeekPayment",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [{ indexed: false, internalType: "address", name: "registry", type: "address" }],
    name: "RegistryUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "address", name: "approver", type: "address" },
      { indexed: true, internalType: "uint256", name: "contractId", type: "uint256" },
      { indexed: true, internalType: "address", name: "client", type: "address" },
    ],
    name: "ReturnApproved",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "address", name: "sender", type: "address" },
      { indexed: true, internalType: "uint256", name: "contractId", type: "uint256" },
    ],
    name: "ReturnCanceled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "address", name: "sender", type: "address" },
      { indexed: true, internalType: "uint256", name: "contractId", type: "uint256" },
    ],
    name: "ReturnRequested",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "address", name: "withdrawer", type: "address" },
      { indexed: true, internalType: "uint256", name: "contractId", type: "uint256" },
      { indexed: false, internalType: "uint256", name: "amount", type: "uint256" },
      { indexed: false, internalType: "uint256", name: "feeAmount", type: "uint256" },
    ],
    name: "Withdrawn",
    type: "event",
  },
  {
    inputs: [
      { internalType: "uint256", name: "_contractId", type: "uint256" },
      { internalType: "uint256", name: "_weekId", type: "uint256" },
      { internalType: "uint256", name: "_amountApprove", type: "uint256" },
      { internalType: "address", name: "_receiver", type: "address" },
      { internalType: "bool", name: "_initializeNewWeek", type: "bool" },
    ],
    name: "adminApprove",
    outputs: [],
    stateMutability: "nonpayable",
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
      { internalType: "uint256", name: "_contractId", type: "uint256" },
      { internalType: "uint256", name: "_weekId", type: "uint256" },
      { internalType: "uint256", name: "_amountApprove", type: "uint256" },
      { internalType: "address", name: "_receiver", type: "address" },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "_contractId", type: "uint256" }],
    name: "approveReturn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "_contractId", type: "uint256" }],
    name: "cancelReturn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "_contractId", type: "uint256" },
      { internalType: "uint256", name: "_weekId", type: "uint256" },
    ],
    name: "claim",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "_contractId", type: "uint256" },
      { internalType: "uint256", name: "_startWeekId", type: "uint256" },
      { internalType: "uint256", name: "_endWeekId", type: "uint256" },
    ],
    name: "claimAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "client",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "contractId", type: "uint256" }],
    name: "contractDetails",
    outputs: [
      { internalType: "address", name: "contractor", type: "address" },
      { internalType: "address", name: "paymentToken", type: "address" },
      { internalType: "uint256", name: "prepaymentAmount", type: "uint256" },
      { internalType: "uint256", name: "amountToWithdraw", type: "uint256" },
      { internalType: "enum Enums.FeeConfig", name: "feeConfig", type: "uint8" },
      { internalType: "enum Enums.Status", name: "status", type: "uint8" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "_contractId", type: "uint256" }],
    name: "contractExists",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "_contractId", type: "uint256" },
      { internalType: "uint256", name: "_weekId", type: "uint256" },
    ],
    name: "createDispute",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          { internalType: "uint256", name: "contractId", type: "uint256" },
          { internalType: "address", name: "contractor", type: "address" },
          { internalType: "address", name: "paymentToken", type: "address" },
          { internalType: "uint256", name: "prepaymentAmount", type: "uint256" },
          { internalType: "uint256", name: "amountToClaim", type: "uint256" },
          { internalType: "enum Enums.FeeConfig", name: "feeConfig", type: "uint8" },
          { internalType: "address", name: "escrow", type: "address" },
          { internalType: "uint256", name: "expiration", type: "uint256" },
          { internalType: "bytes", name: "signature", type: "bytes" },
        ],
        internalType: "struct IEscrowHourly.DepositRequest",
        name: "_deposit",
        type: "tuple",
      },
    ],
    name: "deposit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "_client", type: "address" },
      { internalType: "uint256", name: "_contractId", type: "uint256" },
      { internalType: "address", name: "_contractor", type: "address" },
      { internalType: "address", name: "_paymentToken", type: "address" },
      { internalType: "uint256", name: "_prepaymentAmount", type: "uint256" },
      { internalType: "uint256", name: "_amountToClaim", type: "uint256" },
      { internalType: "enum Enums.FeeConfig", name: "_feeConfig", type: "uint8" },
      { internalType: "uint256", name: "_expiration", type: "uint256" },
    ],
    name: "getDepositHash",
    outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "_contractId", type: "uint256" }],
    name: "getWeeksCount",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "_client", type: "address" },
      { internalType: "address", name: "_adminManager", type: "address" },
      { internalType: "address", name: "_registry", type: "address" },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "initialized",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "bytes32", name: "_hash", type: "bytes32" },
      { internalType: "bytes", name: "_signature", type: "bytes" },
    ],
    name: "isValidSignature",
    outputs: [{ internalType: "bytes4", name: "", type: "bytes4" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "contractId", type: "uint256" }],
    name: "previousStatuses",
    outputs: [{ internalType: "enum Enums.Status", name: "", type: "uint8" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "_contractId", type: "uint256" },
      { internalType: "uint256", name: "_weekId", type: "uint256" },
      { internalType: "uint256", name: "_amount", type: "uint256" },
      { internalType: "enum Enums.RefillType", name: "_type", type: "uint8" },
    ],
    name: "refill",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "registry",
    outputs: [{ internalType: "contract IEscrowRegistry", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "_contractId", type: "uint256" }],
    name: "requestReturn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "_contractId", type: "uint256" },
      { internalType: "uint256", name: "_weekId", type: "uint256" },
      { internalType: "enum Enums.Winner", name: "_winner", type: "uint8" },
      { internalType: "uint256", name: "_clientAmount", type: "uint256" },
      { internalType: "uint256", name: "_contractorAmount", type: "uint256" },
    ],
    name: "resolveDispute",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "_newAccount", type: "address" }],
    name: "transferClientOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "_contractId", type: "uint256" },
      { internalType: "address", name: "_newAccount", type: "address" },
    ],
    name: "transferContractorOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "_adminManager", type: "address" }],
    name: "updateAdminManager",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "_registry", type: "address" }],
    name: "updateRegistry",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "contractId", type: "uint256" },
      { internalType: "uint256", name: "", type: "uint256" },
    ],
    name: "weeklyEntries",
    outputs: [
      { internalType: "uint256", name: "amountToClaim", type: "uint256" },
      { internalType: "enum Enums.Status", name: "weekStatus", type: "uint8" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "_contractId", type: "uint256" }],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;
