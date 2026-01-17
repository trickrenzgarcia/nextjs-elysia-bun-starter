import { describe, expect, it } from "bun:test";
import app from "./index";

describe("Elysia API", () => {
  describe("GET /api/user", () => {
    it("should return user data", async () => {
      const response = await app.handle(
        new Request("http://localhost/api/user"),
      );

      expect(response.status).toBe(200);

      const data = await response.json();
      expect(data).toEqual({
        id: 1,
        name: "John Doe",
        email: "john.doe@example.com",
      });
    });

    it("should return correct content type", async () => {
      const response = await app.handle(
        new Request("http://localhost/api/user"),
      );

      expect(response.headers.get("content-type")).toContain(
        "application/json",
      );
    });
  });

  describe("POST /api/user", () => {
    it("should create a user with valid data", async () => {
      const userData = {
        id: 2,
        name: "Jane Doe",
        email: "jane.doe@example.com",
      };

      const response = await app.handle(
        new Request("http://localhost/api/user", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
        }),
      );

      expect(response.status).toBe(200);

      const data = await response.json();
      expect(data).toEqual(userData);
    });

    it("should reject invalid email format", async () => {
      const invalidUserData = {
        id: 3,
        name: "Invalid User",
        email: "not-an-email",
      };

      const response = await app.handle(
        new Request("http://localhost:3000/api/user", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(invalidUserData),
        }),
      );

      expect(response.status).toBe(422);
    });

    it("should reject missing required fields", async () => {
      const incompleteData = {
        id: 4,
        name: "Incomplete User",
        // missing email
      };

      const response = await app.handle(
        new Request("http://localhost:3000/api/user", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(incompleteData),
        }),
      );

      expect(response.status).toBe(422);
    });
  });
});
