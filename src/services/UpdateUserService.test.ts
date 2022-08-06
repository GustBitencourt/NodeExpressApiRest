import { UpdateUserService } from "./UpdateUserService";

import createConnection from "../database";
import { getConnection } from "typeorm";

import { FakeData } from "../utils/mocks/fakeData/fakeData";

describe("UpdateUserService", () => {
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
  
  it("Deve editar nome do usuario", async () => {
      const mockUser = await fakeData.createUser();
      
      const updateUserService = new UpdateUserService();

    
        const result = await updateUserService.execute({
            id: mockUser.id,
            name: "NomeEditado",
        })

        expect(result).toHaveLength(0);
    })
});
