import { CreateUserService } from "./../../../services/CreateUserService";
import { v4 as uuid } from "uuid";

export class FakeData {
  async execute() {
    const createUserService = new CreateUserService();

    await createUserService.execute({
      id: uuid(),
      name: "Teste",
      email: "email@email.com",
    });

    await createUserService.execute({
      id: uuid(),
      name: "Teste2",
      email: "email2@email.com",
    });
  }
}
