// @generated
// This file is automatically generated by Kanel. Do not modify manually.

import type { FilmId } from './Film';
import type { ColumnType, Selectable, Insertable, Updateable } from 'kysely';

export type InventoryId = number;

/** Represents the table public.inventory */
export default interface InventoryTable {
  inventory_id: ColumnType<InventoryId, InventoryId | undefined, InventoryId>;

  film_id: ColumnType<FilmId, FilmId, FilmId>;

  store_id: ColumnType<number, number, number>;

  last_update: ColumnType<Date, Date | string | undefined, Date | string>;
}

export type Inventory = Selectable<InventoryTable>;

export type NewInventory = Insertable<InventoryTable>;

export type InventoryUpdate = Updateable<InventoryTable>;
