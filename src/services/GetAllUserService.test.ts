import { GetAllUserService } from "./GetAllUserService";
import createConnection from "../database";
import { getConnection } from "typeorm";

import { FakeData } from './../utils/mocks/fakeData/fakeData';


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

  const fakeData = new FakeData();  

  it("Deve retornar todos os usuários cadastrados", async () => {
    await fakeData.execute();
    
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
