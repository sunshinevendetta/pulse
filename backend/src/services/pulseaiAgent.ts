import { Coinbase, Wallet, TransfersApi, ContractInvocationsApi } from "@coinbase/coinbase-sdk";
import 'dotenv/config';

// Load API Keys & Contract Addresses
const apiKeyPath = process.env.CDP_API_KEY_PATH!;
const uberAccessToken = process.env.UBER_ACCESS_TOKEN!;
const membershipContract = process.env.MEMBERSHIP_CONTRACT!;
const drinkContract = process.env.DRINK_CONTRACT!;
const merchContract = process.env.MERCH_CONTRACT!;

const coinbase = Coinbase.configureFromJson({ filePath: apiKeyPath });

async function authenticate() {
  try {
    const wallet = await Wallet.create({ networkId: Coinbase.networks.EthereumMainnet });
    console.log("✅ Wallet created successfully");
    return wallet;
  } catch (error) {
    console.error("❌ Authentication failed", error);
  }
}

async function buyMembership(wallet: any, recipientAddress: string, tokenId: string) {
  try {
    const transferApi = new TransfersApi();
    const transfer = await transferApi.createTransfer({
      walletId: wallet.id,
      addressId: recipientAddress,
      createTransferRequest: { to: recipientAddress, tokenId, value: "1" },
    });
    await transferApi.broadcastTransfer(wallet.id, recipientAddress, transfer.id, { signed_payload: transfer.signedPayload });
    console.log("🎟️ Membership purchased successfully");
  } catch (error) {
    console.error("❌ Error purchasing membership", error);
  }
}

async function buyItem(wallet: any, contractAddress: string, itemId: string, method: string) {
  try {
    const contractApi = new ContractInvocationsApi();
    const invocation = await contractApi.createContractInvocation({
      walletId: wallet.id,
      addressId: wallet.defaultAddress.id,
      createContractInvocationRequest: {
        contractAddress,
        method,
        args: { id: itemId },
      },
    });
    await contractApi.broadcastContractInvocation(wallet.id, wallet.defaultAddress.id, invocation.id, { signed_payload: invocation.signedPayload });
    console.log(`✅ ${method} purchased successfully`);
  } catch (error) {
    console.error(`❌ Error purchasing ${method}`, error);
  }
}

async function bookUberRide(pickup: string, dropoff: string) {
  try {
    const [startLat, startLng] = pickup.split(",");
    const [endLat, endLng] = dropoff.split(",");

    const response = await fetch("https://api.uber.com/v1.2/requests", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${uberAccessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        start_latitude: startLat,
        start_longitude: startLng,
        end_latitude: endLat,
        end_longitude: endLng,
      }),
    });

    const data = await response.json();
    console.log("🚗 Uber ride booked successfully", data);
  } catch (error) {
    console.error("❌ Error booking Uber ride", error);
  }
}

export { authenticate, buyMembership, buyItem, bookUberRide, membershipContract, drinkContract, merchContract };
