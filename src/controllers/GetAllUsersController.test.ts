import createConnection from "../database";
import { getConnection } from "typeorm";

import { GetAllUsersController } from "./GetAllUsersController";
import { FakeData } from './../utils/mocks/fakeData/fakeData';

import { makeMockRequest } from "../utils/mocks/makeMockRequest";
import { makeMockResponse } from "../utils/mocks/makeMockResponse";



describe("GetAllUsersController", () => {
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

  it('Deve retornar o status 200 quando buscar todos os usuários', async () => {
    await fakeData.execute();

    const getAllUsersController = new GetAllUsersController();

    const request = makeMockRequest({});

    const response = makeMockResponse();

    await getAllUsersController.handle(request, response);

    expect(response.state.status).toBe(200);
  })
});
