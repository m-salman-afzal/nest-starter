import {TColumn, TModel, TSelectColumn, TWhereFilter} from "@shared/types/database.type";

// TODO fix types here
export interface IBaseRepository<Model extends TModel, Column extends TColumn, Entity extends object> {
    create(props: {entity: Entity});

    update(props: {entity: Entity; whereFilters: TWhereFilter});

    delete(props: {whereFilters: TWhereFilter});

    fetchOne(props?: {selectColumns?: TSelectColumn<Model, Column>; whereFilters: TWhereFilter});

    fetchAll(props: {selectColumns?: TSelectColumn<Model, Column>; whereFilters: TWhereFilter});
}
