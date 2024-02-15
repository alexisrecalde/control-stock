import { Method, UserLevel, callApi } from '../config';
import { startServer } from '../../serverTest';

describe("can get/create/update/delete activity", () => {
        beforeAll(async () => {
        await startServer();
    });

    it("should get", async () => {
        const response = await callApi(`/api/users/`,  Method.GET, UserLevel.ADMIN);
        expect(response.status).toBe(200);
    });

  // Agrega más pruebas según sea necesario
});
