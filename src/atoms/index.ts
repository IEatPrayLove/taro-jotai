import { atom } from "jotai";

const textAtom = atom("hello");

export const setTextAtom = atom(null, (get, set, update: string) => {
  set(textAtom, update);
});

export const getTextAtom = atom((get)=>{
  const value = get(textAtom)
  return value
})