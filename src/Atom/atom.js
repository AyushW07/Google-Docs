import { atom } from "recoil";

export const atomFileName = atom({
  key: "atomFileName",
  default: "Untitled Document",
});

export const atomInputRef = atom({
  key: "atomInputRef",
  default: null,
});

export const showRuler = atom({
  key: "showRuler",
  default: true,
});
