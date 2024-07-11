import {TColumn, TDatabaseSource, TModel, TSelectColumn} from "@shared/types/database.type";

import {DatabaseService} from "@infraDatabase/database.service";

export class BaseRepository<Model extends TModel, Column extends TColumn> {
    private db: TDatabaseSource;
    private readonly model: Model;

    constructor(
        readonly databaseService: DatabaseService,
        model: Model
    ) {
        this.db = databaseService.getDatabase();
        this.model = model;
    }

    async fetchAll(props: {selectColumns: TSelectColumn<Model, Column>}) {
        return await this.db.select(props.selectColumns).from(this.model);
    }
}
