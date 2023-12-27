import {atom} from "jotai";

export interface bagInfo {
    orderItems: { quantity: string; product: string, price: string }
}



export const  authAtom =  atom<null | string >(localStorage.getItem("token") || null)

export const bagAtom = atom<bagInfo[]>(JSON.parse(localStorage.getItem("bag")||JSON.stringify([])))
