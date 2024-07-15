import {BaseEntity, IBaseEntity} from "../base.entity";

export interface IUserEntity extends IBaseEntity {
    readonly name: string;
    readonly email: string;
    readonly password: string;
}

export class UserEntity extends BaseEntity implements IUserEntity {
    readonly name: string;
    readonly email: string;
    readonly password: string;

    constructor(body: IUserEntity) {
        super(body);

        this.name = body.name;
        this.email = body.email;
        this.password = body.password;
    }

    static create(props: IUserEntity) {
        return new UserEntity(props);
    }
}
