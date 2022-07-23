const user = require("../src/routes/user.routes");
const request = require("supertest");

describe("POST / registro", () => {
  test("should respond with a 201 status code", () => {
    const response = request(user).post("/registro").send();
    expect(response.status).toBe(201);
  });
});
