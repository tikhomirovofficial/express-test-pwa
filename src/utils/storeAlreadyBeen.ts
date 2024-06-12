import { addToStorage, getFromStorage } from "./LocalStorageExplorer"

export const storeAlreadyBeen = (val: boolean) => {
    addToStorage("already_been", val)
}
export const getAlreadyBeen = () => {
    return getFromStorage("already_been")
}