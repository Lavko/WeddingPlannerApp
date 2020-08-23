/* tslint:disable */
import { ServiceType } from './service-type';
export interface ServiceProviderDto {
  address: string;
  email?: string;
  id: number;
  name: string;
  phoneNumber: string;
  serviceType: ServiceType;
}
