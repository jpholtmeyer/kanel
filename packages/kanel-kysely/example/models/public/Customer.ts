// @generated
// This file is automatically generated by Kanel. Do not modify manually.

import type { AddressId } from './Address';
import type { ColumnType, Selectable, Insertable, Updateable } from 'kysely';

export type CustomerId = number;

/** Represents the table public.customer */
export default interface CustomerTable {
  customer_id: ColumnType<CustomerId, CustomerId | undefined, CustomerId>;

  store_id: ColumnType<number, number, number>;

  first_name: ColumnType<string, string, string>;

  last_name: ColumnType<string, string, string>;

  email: ColumnType<string | null, string | null, string | null>;

  address_id: ColumnType<AddressId, AddressId, AddressId>;

  activebool: ColumnType<boolean, boolean | undefined, boolean>;

  create_date: ColumnType<Date, Date | string | undefined, Date | string>;

  last_update: ColumnType<Date | null, Date | string | null, Date | string | null>;

  active: ColumnType<number | null, number | null, number | null>;
}

export type Customer = Selectable<CustomerTable>;

export type NewCustomer = Insertable<CustomerTable>;

export type CustomerUpdate = Updateable<CustomerTable>;
