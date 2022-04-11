import { atom } from "recoil";

export const gId = atom({
  key: "gId",
  default: "",
});

export const gPw = atom({
  key: "gPw",
  default: "",
});

export const gIdError = atom({
  key: "gIdError",
  default: "",
});

export const gPwError = atom({
  key: "gPwError",
  default: "",
});

export const gPwCheckError = atom({
  key: "gPwCheckError",
  default: "",
});

export const gEmailError = atom({
  key: "gEmailError",
  default: "",
});
