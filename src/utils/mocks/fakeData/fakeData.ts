import { CreateUserService } from "./../../../services/CreateUserService";
import { v4 as uuid } from "uuid";

export class FakeData {
  createUserService = new CreateUserService();

  async execute() {
    await this.createUserService.execute({
      id: uuid(),
      name: "Teste",
      email: "email@email.com",
    });

    await this.createUserService.execute({
      id: uuid(),
      name: "Teste2",
      email: "email2@email.com",
    });
  }

  async createUser() {
    const user = await this.createUserService.execute({
      id: uuid(),
      name: "Teste2",
      email: "email2@email.com",
    });

    return user;
  }
}
