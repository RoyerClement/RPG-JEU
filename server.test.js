import { describe, it, expect } from "vitest";

import request from "supertest";
import app from "./server.js";

describe("server", () => {
    it("GET /healthcheck", async () => {
        const response = await request(app).get("/healthcheck");

        expect(response.status).toBe(200);
        expect(response.text).toEqual("ok");
    });

    it("GET /all-data", async () => {
        const response = await request(app).get("/all-data");

        expect(response.status).toBe(200);
        expect(response.body.stats).toEqual(0);
    });

    it("POST /all-data", async () => {
        const response = await request(app)
            .post("/all-data")
            .send({ stats: 1234 })
            .set("Content-Type", "application/json");

        expect(response.status).toBe(200);
        expect(response.body.stats).toEqual(1234);
    });
});
