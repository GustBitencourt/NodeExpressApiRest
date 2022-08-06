import { DeleteUserController } from "./DeleteUserController";

import createConnection from "../database";
import { getConnection } from "typeorm";

import { makeMockResponse } from "../utils/mocks/makeMockResponse";
import { makeMockRequest } from "../utils/mocks/makeMockRequest";
import { FakeData } from "../utils/mocks/fakeData/fakeData";

describe("DeleteUserController", () => {
  beforeAll(async () => {
    const connection = await createConnection();
    await connection.runMigrations();
  });

  afterAll(async () => {
    const connection = getConnection();
    await connection.close();
  });

  const fakeData = new FakeData();

  it('Deve retornar um status 204 ao excluir um usuario', async () => {
    const deleteUserController = new DeleteUserController();

    const mockUser = await fakeData.createUser();

    const request = makeMockRequest({
        params: {
            id: mockUser.id,
        }
    });
    
    const response = makeMockResponse();

    await deleteUserController.handle(request, response);
  })
});
