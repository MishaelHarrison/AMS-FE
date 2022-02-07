export interface CustomerExtendedInfo {
  citizenId: string;
  address: string;
  userId: number;
  email: string;
  name: string;
  pan: number;
  dob: Date;
  accounts: {
    id: number;
    balance: number;
    transactions: {
      amount: number;
    }[];
  }[];
}
