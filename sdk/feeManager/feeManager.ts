import { feeManagerAbi } from "@/abi/FeeManager";
import type { Account, Address, Hash, PublicClient, WalletClient, WriteContractParameters } from "viem";
import { type FeeConfig } from "@/Deposit";

export class FeeManager {
  private readonly wallet: WalletClient;
  private readonly public: PublicClient;
  private readonly account: Account;
  private feeManagerEscrow: Address;

  constructor(walletClient: WalletClient, publicClient: PublicClient, account: Account, feeManagerEscrow: Address) {
    this.wallet = walletClient;
    this.public = publicClient;
    this.account = account;
    this.feeManagerEscrow = feeManagerEscrow;
  }
  async updateDefaultFees(coverageFee: number, claimFee: number): Promise<void> {
    const { request } = await this.public.simulateContract({
      address: this.feeManagerEscrow,
      abi: feeManagerAbi,
      account: this.account,
      args: [coverageFee, claimFee],
      functionName: "updateDefaultFees",
    });
    await this.send(request);
  }

  async setSpecialFees(accountAddress: Address, coverageFee: number, claimFee: number): Promise<void> {
    const { request } = await this.public.simulateContract({
      address: this.feeManagerEscrow,
      abi: feeManagerAbi,
      account: this.account,
      args: [accountAddress, coverageFee, claimFee],
      functionName: "setSpecialFees",
    });
    await this.send(request);
  }

  async computeDepositAmountAndFee(amount: bigint, configFee: FeeConfig = 1) {
    const result = await this.public.readContract({
      address: this.feeManagerEscrow,
      abi: feeManagerAbi,
      account: this.account,
      args: [this.account.address, amount, configFee],
      functionName: "computeDepositAmountAndFee",
    });
    return {
      totalDepositAmount: Number(result[0]),
      feeApplied: Number(result[1]),
    };
  }

  private async send(input: WriteContractParameters): Promise<Hash> {
    return this.wallet.writeContract(input);
  }
}
