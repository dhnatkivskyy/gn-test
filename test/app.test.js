import request from 'supertest';
import app from '../app';

describe("GET /", () => {
  describe("should return greeting", () => {
    test("should return status 200'", async () => {
      const response = await request(app).get("/");
      expect(response.statusCode).toBe(200)
    })
    test("should write 'Hi there1!'", async () => {
      const response = await request(app).get("/");
      expect(response.text).toBe('<h1>Hi there!</h1>')
    })
  })
})

describe("GET /get-symbols/:number", () => {
  describe("should return wrongTypeError and status 400 if provided param's type is not a number", () => {
    test("should return status 400'", async () => {
      const response = await request(app).get("/get-symbols/string");
      expect(response.statusCode).toBe(400)
    })
    test("should return wrongTypeError'", async () => {
      const response = await request(app).get("/get-symbols/string");
      expect(response.body.message).toBe('Please, provide a number')
    })
  })

  describe("should return correct response with status 200", () => {
    test("should return status 400'", async () => {
      const response = await request(app).get("/get-symbols/12");
      expect(response.statusCode).toBe(200)
    })
    test("should return G as json response'", async () => {
      const response = await request(app).get("/get-symbols/12");
      expect(response.body.result).toBe('G')
    })
    test("should return N as json response'", async () => {
      const response = await request(app).get("/get-symbols/10");
      expect(response.body.result).toBe('N')
    })
    test("should return GN as json response'", async () => {
      const response = await request(app).get("/get-symbols/15");
      expect(response.body.result).toBe('GN')
    })
    test("should return passed number as json response'", async () => {
      const response = await request(app).get("/get-symbols/17");
      expect(response.body.result).toBe('17')
    })
  })
})