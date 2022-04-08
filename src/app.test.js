const request = require("supertest");
const app = require("./app");
const cities = require("../data/cities");

describe("app", () => {
  it("should return hello world", async () => {
    const response = await request(app).get("/");

    expect(response.status).toEqual(200);
    expect(response.text).toEqual("hello world");
  });

  describe("GET /api/v1/cities", () => {
    it("should return data from cities", async () => {
      const response = await request(app).get("/api/v1/cities");

      expect(response.status).toEqual(200);
      expect(response.body).toEqual(cities);
    });
  });
});
