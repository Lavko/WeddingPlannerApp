/* tslint:disable */
import { Expense } from './expense';
import { Guest } from './guest';
import { Income } from './income';
export interface Planner {
  ceremonyDate: string;
  ceremonyPlace?: string;
  expenses?: Array<Expense>;
  guests?: Array<Guest>;
  id: number;
  incomes?: Array<Income>;
  weddingDate: string;
  weddingPlace?: string;
}
