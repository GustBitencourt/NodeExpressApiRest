import { DeleteUserService } from "./DeleteUserService";

import createConnection from "../database";
import { getConnection } from "typeorm";

import { FakeData } from "../utils/mocks/fakeData/fakeData";


describe("DeleteUserService", () => {
  beforeAll(async () => {
    const connection = await createConnection();
    await connection.runMigrations();
  });

  afterAll(async () => {
    const connection = getConnection();
    await connection.close();
  });

  const fakeData = new FakeData();

    it("Deve deletar um usuário e retornar um array vazio", async () => {
        const mockUser = await fakeData.createUser();

        const deleteUserService = new DeleteUserService();

        const result = await deleteUserService.execute({
            id: mockUser.id,
        })

        expect(result).toHaveLength(0);
    })
});
