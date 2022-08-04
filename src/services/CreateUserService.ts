import { Usuario } from "./../entities/Usuario";
import { getRepository } from "typeorm";

interface IUser {
  id: string;
  name: string;
  email?: string;
}

export class CreateUserService {
  async execute({ id, name, email }: IUser) {
    const user = await getRepository(Usuario)
      .createQueryBuilder("user")
      .insert()
      .into(Usuario)
      .values([
        {
          id,
          name,
          email,
        },
      ])
      .execute();

    return user;
  }
}
