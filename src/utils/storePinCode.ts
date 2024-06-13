import { addToStorage, getFromStorage } from "./LocalStorageExplorer"

export const storePinCode = (val: any) => {
    addToStorage("pin_code", val)
}
export const getPinCode = () => {
    return getFromStorage("pin_code")
}