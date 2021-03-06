import { authReducer } from "../../auth/authReducer";
import { types } from "../../types/types";

describe("Pruebas en authReducer", () => {
  test("debe de retornar el estado por defecto", () => {
    const state = authReducer({ logged: false }, {});

    expect(state).toEqual({ logged: false });
  });

  test("debe de autenticar y colocar el name en el usuario", () => {
    const action = {
      type: types.login,
      payload: {
        name: "Jair",
      },
    };

    const state = authReducer({ logged: false }, action);

    expect(state).toEqual({ name: "Jair", logged: true });
  });

  test("debe de borrar el name del usuario y name en false", () => {
    const action = {
      type: types.logout,
    };

    const state = authReducer({ name: "Jair", logged: true }, action);

    expect(state).toEqual({ logged: false });
  });
});
