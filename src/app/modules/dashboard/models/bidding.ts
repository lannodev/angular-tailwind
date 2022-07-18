export interface Bidding {
  id: number;
  title: string;
  last_bid?: number;
  price: number;
  creator?: string;
  instant_price?: number;
  ending_in?: string;
  image: string;
}