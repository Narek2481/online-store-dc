import {atom} from "jotai";

export interface BagInfo {
    orderItems: { quantity: string; product: string, price: string }
}


export const  userIdAtom =  atom<null | string >(localStorage.getItem("userId") || null)
export const  authAtom =  atom<null | string >(localStorage.getItem("token") || null)

export const bagAtom = atom<BagInfo[]>([])
