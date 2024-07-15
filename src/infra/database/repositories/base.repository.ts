import {IBaseRepository} from "@entities/iBase.repository";
import {TColumn, TDatabaseSource, TModel, TSelectColumn, TWhereFilter} from "@shared/types/database.type";

import {DatabaseService} from "@infraDatabase/database.service";

export class BaseRepository<Model extends TModel, Column extends TColumn, Entity extends object>
    implements IBaseRepository<Model, Column, Entity>
{
    private db: TDatabaseSource;
    private readonly model: Model;

    constructor(
        readonly databaseService: DatabaseService,
        model: Model
    ) {
        this.db = databaseService.getDatabase();
        this.model = model;
    }

    async create(props: {entity: Entity}) {
        return await this.db.insert(this.model).values(props.entity);
    }
    async fetchOne(props?: {selectColumns?: TSelectColumn<Model, Column>; whereFilters?: TWhereFilter}) {
        return await this.db
            .select(props && "selectColumns" in props ? props.selectColumns : {})
            .from(this.model)
            .where(props && props.whereFilters)
            .limit(1);
    }

    async fetchAll(props?: {selectColumns?: TSelectColumn<Model, Column>; whereFilters?: TWhereFilter}) {
        return await this.db
            .select(props && "selectColumns" in props ? props.selectColumns : {})
            .from(this.model)
            .where(props && props.whereFilters);
    }
}
