import { describe, it, expect } from "vitest";

import request from "supertest";
import app from "./server.js";

describe("server", () => {
    it("GET /healthcheck", async () => {
        const response = await request(app).get("/healthcheck");

        expect(response.status).toBe(200);
        expect(response.text).toEqual("ok");
    });
});
