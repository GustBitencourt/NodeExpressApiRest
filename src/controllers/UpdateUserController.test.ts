import { UpdateUserController } from "./UpdateUserController";
import { Request } from "express";

import createConnection from "../database";
import { getConnection } from "typeorm";

import { makeMockResponse } from "../utils/mocks/makeMockResponse";
import { FakeData } from "../utils/mocks/fakeData/fakeData";


describe("UpdateUserController", () => {
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

  it('Deve retornar 204 quando atualizar o usuário', async () => {
    const updateUserController = new UpdateUserController();

    const mockUser = await fakeData.createUser();

    const request = {
        body: {
            id: mockUser.id,
            name: "NomeEditadoPew",
            email: "emailTeste@email.com"
        }
    } as Request;
    const response = makeMockResponse();

    await updateUserController.handle(request, response);

    expect(response.state.status).toBe(204);

  })


});
