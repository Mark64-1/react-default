const initialState = {
  name: "까미S",
  password: "1234",
  email: "testEmail@test.com",
  phone: "010-1234-5678",
};

export const GET_USER_NAME = "GET_USER_NAME";
export const GET_USER_PASSWORD = "GET_USER_PASSWORD";
export const GET_USER_EMAIL = "GET_USER_EMAIL";
export const GET_USER_PHONE = "GET_USER_PHONE";

export const SET_USER_NAME = "SET_USER_NAME";
export const SET_USER_PASSWORD = "SET_USER_PASSWORD";
export const SET_USER_EMAIL = "SET_USER_EMAIL";
export const SET_USER_PHONE = "SET_USER_PHONE";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_NAME: {
      return {
        ...state,
        name: action.name,
      };
    }
    case SET_USER_PASSWORD: {
      return {
        ...state,
        password: action.password,
      };
    }
    case SET_USER_EMAIL: {
      return {
        ...state,
        email: action.email,
      };
    }
    case SET_USER_PHONE: {
      return {
        ...state,
        phone: action.phone,
      };
    }
  }
};

export default reducer;
