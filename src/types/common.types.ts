import { ReactNode } from "react";

export type HasId = {
    id: number
}
export type ModalCustomProps = {
    level?: number
    show?: boolean
    handleModal?: () => any
}
export type HasNodeChildren = {
    children: ReactNode
}
export type HasClassName = {
    className?: string
}
export type HasLoading = {
    loading: boolean
}
export type HasPart = {
    part: number
}
export type HasNextPart = {
    can_next: boolean
}
export type PopupProps = {
    opened: boolean,
    handlePopup: () => any
}
export type ResponseStatus = {
    status: boolean
}
export type JWT = {
    refresh: string
    access: string
}