import { Middleware } from "@reduxjs/toolkit";

export const localStorageMiddleware: Middleware = ({ getState }) => {
  return (next) => (action) => {
    const result = next(action);
    localStorage.setItem("applicationState", JSON.stringify(getState()));
    return result;
  };
};

export const reHydrateStore = () => {
  if (localStorage.getItem("applicationState") !== null) {
    return JSON.parse(localStorage.getItem("applicationState") ?? "{}");
  }
};
