import {
  getUserByEmailIdAndPassword,
  getUserById,
} from "./controllers/userController";

describe("Database function", () => {
  it("should get Jimmy's object correctly", () => {
    expect(
      getUserByEmailIdAndPassword("jimmy123@gmail.com", "jimmy123!")
    ).toEqual({
      email: "jimmy123@gmail.com",
      id: 1,
      name: "Jimmy Smith",
      password: "jimmy123!",
    });
  });
});
describe("Database function", () => {
  it("should get Johnny's object correctly", () => {
    expect(
      getUserByEmailIdAndPassword("johnny123@gmail.com", "johnny123!")
    ).toEqual({
      id: 2,
      name: "Johnny Doe",
      email: "johnny123@gmail.com",
      password: "johnny123!",
    });
  });
});
describe("Database function", () => {
  it("should get Jonathan's object", () => {
    expect(getUserById(3)).toEqual({
      id: 3,
      name: "Jonathan Chen",
      email: "jonathan123@gmail.com",
      password: "jonathan123!",
    });
  });
});
