// @generated
// This file is automatically generated by Kanel. Do not modify manually.

import { addressId, type AddressId } from './Address.js';
import { z } from 'zod';

/** Identifier type for customer */
export type CustomerId = number & { __flavor?: 'CustomerId' };

/** Represents the table public.customer */
export default interface Customer {
  /** Database type: pg_catalog.int4 */
  customer_id: CustomerId;

  /** Database type: pg_catalog.int2 */
  store_id: number;

  /** Database type: pg_catalog.varchar */
  first_name: string;

  /** Database type: pg_catalog.varchar */
  last_name: string;

  /** Database type: pg_catalog.varchar */
  email: string | null;

  /** Database type: pg_catalog.int2 */
  address_id: AddressId;

  /** Database type: pg_catalog.bool */
  activebool: boolean;

  /** Database type: pg_catalog.date */
  create_date: Date;

  /** Database type: pg_catalog.timestamp */
  last_update: Date | null;

  /** Database type: pg_catalog.int4 */
  active: number | null;
}

/** Represents the initializer for the table public.customer */
export interface CustomerInitializer {
  /**
   * Database type: pg_catalog.int4
   * Default value: nextval('customer_customer_id_seq'::regclass)
   */
  customer_id?: CustomerId;

  /** Database type: pg_catalog.int2 */
  store_id: number;

  /** Database type: pg_catalog.varchar */
  first_name: string;

  /** Database type: pg_catalog.varchar */
  last_name: string;

  /** Database type: pg_catalog.varchar */
  email?: string | null;

  /** Database type: pg_catalog.int2 */
  address_id: AddressId;

  /**
   * Database type: pg_catalog.bool
   * Default value: true
   */
  activebool?: boolean;

  /**
   * Database type: pg_catalog.date
   * Default value: ('now'::text)::date
   */
  create_date?: Date;

  /**
   * Database type: pg_catalog.timestamp
   * Default value: now()
   */
  last_update?: Date | null;

  /** Database type: pg_catalog.int4 */
  active?: number | null;
}

/** Represents the mutator for the table public.customer */
export interface CustomerMutator {
  /** Database type: pg_catalog.int4 */
  customer_id?: CustomerId;

  /** Database type: pg_catalog.int2 */
  store_id?: number;

  /** Database type: pg_catalog.varchar */
  first_name?: string;

  /** Database type: pg_catalog.varchar */
  last_name?: string;

  /** Database type: pg_catalog.varchar */
  email?: string | null;

  /** Database type: pg_catalog.int2 */
  address_id?: AddressId;

  /** Database type: pg_catalog.bool */
  activebool?: boolean;

  /** Database type: pg_catalog.date */
  create_date?: Date;

  /** Database type: pg_catalog.timestamp */
  last_update?: Date | null;

  /** Database type: pg_catalog.int4 */
  active?: number | null;
}

export const customerId = z.number() as unknown as z.Schema<CustomerId>;

export const customer = z.object({
  customer_id: customerId,
  store_id: z.number(),
  first_name: z.string(),
  last_name: z.string(),
  email: z.string().nullable(),
  address_id: addressId,
  activebool: z.boolean(),
  create_date: z.date(),
  last_update: z.date().nullable(),
  active: z.number().nullable(),
}) as unknown as z.Schema<Customer>;

export const customerInitializer = z.object({
  customer_id: customerId.optional(),
  store_id: z.number(),
  first_name: z.string(),
  last_name: z.string(),
  email: z.string().optional().nullable(),
  address_id: addressId,
  activebool: z.boolean().optional(),
  create_date: z.date().optional(),
  last_update: z.date().optional().nullable(),
  active: z.number().optional().nullable(),
}) as unknown as z.Schema<CustomerInitializer>;

export const customerMutator = z.object({
  customer_id: customerId.optional(),
  store_id: z.number().optional(),
  first_name: z.string().optional(),
  last_name: z.string().optional(),
  email: z.string().optional().nullable(),
  address_id: addressId.optional(),
  activebool: z.boolean().optional(),
  create_date: z.date().optional(),
  last_update: z.date().optional().nullable(),
  active: z.number().optional().nullable(),
}) as unknown as z.Schema<CustomerMutator>;
