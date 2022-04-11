import { atom } from "recoil";

export const isEditState = atom({
  key: "isEditState",
  // 글로벌 스테이트는 키로 데이터를 구분한다.
  default: false,
  // 초기값을 의미한다.
});

export const myIsEdit = atom({
  key: "myIsEdit",
  default: true,
});
