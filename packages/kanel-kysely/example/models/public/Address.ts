// @generated
// This file is automatically generated by Kanel. Do not modify manually.

import type { CityId } from './City';
import type { ColumnType, Selectable, Insertable, Updateable } from 'kysely';

export type AddressId = number;

/** Represents the table public.address */
export default interface AddressTable {
  address_id: ColumnType<AddressId, AddressId | undefined, AddressId>;

  address: ColumnType<string, string, string>;

  address2: ColumnType<string | null, string | null, string | null>;

  district: ColumnType<string, string, string>;

  city_id: ColumnType<CityId, CityId, CityId>;

  postal_code: ColumnType<string | null, string | null, string | null>;

  phone: ColumnType<string, string, string>;

  last_update: ColumnType<Date, Date | string | undefined, Date | string>;
}

export type Address = Selectable<AddressTable>;

export type NewAddress = Insertable<AddressTable>;

export type AddressUpdate = Updateable<AddressTable>;
