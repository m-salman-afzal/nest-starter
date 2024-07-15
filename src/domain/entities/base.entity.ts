export interface IBaseEntity {
    readonly id: number;
    readonly createdAt: string;
    readonly updatedAt: string;
}

export class BaseEntity {
    readonly id: number;
    readonly createdAt: string;
    readonly updatedAt: string;

    constructor(body: IBaseEntity) {
        this.id = body.id;
        this.createdAt = body.createdAt;
        this.updatedAt = body.updatedAt;
    }
}
