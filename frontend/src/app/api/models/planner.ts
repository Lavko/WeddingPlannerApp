/* tslint:disable */
import { Expense } from './expense';
import { Fund } from './fund';
import { Guest } from './guest';
export interface Planner {
  ceremonyDate: string;
  ceremonyPlace?: string;
  expenses?: Array<Expense>;
  funds?: Array<Fund>;
  guests?: Array<Guest>;
  id: number;
  weddingDate: string;
  weddingPlace?: string;
}
