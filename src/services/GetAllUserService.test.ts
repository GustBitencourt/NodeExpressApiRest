import { GetAllUserService } from "./GetAllUserService";
import { CreateUserService } from "./CreateUserService";
import createConnection from "../database";
import { getConnection } from "typeorm";
import { v4 as uuid } from "uuid";

describe("GetAllUserService", () => {
  beforeAll(async () => {
    const connection = await createConnection();
    await connection.runMigrations();
  });

  afterAll(async () => {
    const connection = getConnection();

    //apaga dados do banco teste
    await connection.query("DELETE FROM usuarios");
    await connection.close();
  });

  const createUserService = new CreateUserService();

  it("Deve retornar todos os usuários cadastrados", async () => {
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

    const expectedResponse = [
      {
        name: "Teste",
        email: "email@email.com",
      },
      {
        name: "Teste2",
        email: "email2@email.com",
      },
    ];

    const getAllUserService = new GetAllUserService();

    const result = await getAllUserService.execute();

    expect(result).toMatchObject(expectedResponse);
  });
});
