import {SelectedFields} from "drizzle-orm";
import {NodePgDatabase} from "drizzle-orm/node-postgres";
import {PgColumn, PgTable} from "drizzle-orm/pg-core";

import * as models from "@infraDatabase/drizzle/models";

import {TValueOf} from "./util.type";

export type TDatabaseSource = NodePgDatabase<typeof models>;

export type TModel = PgTable;

export type TColumn = PgColumn;

export type TSelectColumn<Model extends TModel, Column extends TColumn> = SelectedFields<Column, Model>;

export type TModelColumn<Model extends TModel> = TValueOf<{
    [K in keyof Model["_"]["columns"]]: Model["_"]["columns"][K];
}>;
