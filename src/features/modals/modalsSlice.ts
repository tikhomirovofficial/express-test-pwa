import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type ModalStateProps = {
    opened: boolean
    level: number
}
type ModalsSliceState = {
    orderInfoModal: ModalStateProps
    profileEditModal: ModalStateProps,
    patientsModal: ModalStateProps
    aboutAppModal: ModalStateProps,
    bonusesBottomSheet: ModalStateProps,
    analysisInfoModal: ModalStateProps
    bonusesModal: ModalStateProps
    ordersFinancesModal: ModalStateProps,
    patientInfoModal: ModalStateProps
    patientOrderInfoModal: ModalStateProps
}

const initialState: ModalsSliceState = {
    orderInfoModal: {
        opened: false,
        level: 1
    },
    patientsModal: {
        opened: false,
        level: 1
    },
    bonusesModal: {
        opened: false,
        level: 1
    },
    aboutAppModal: {
        opened: false,
        level: 1
    },
    bonusesBottomSheet: {
        opened: false,
        level: 2
    },
    ordersFinancesModal: {
        opened: false,
        level: 1
    },
    analysisInfoModal: {
        opened: false,
        level: 1
    },
    profileEditModal: {
        opened: false,
        level: 1
    },
    patientInfoModal: {
        opened: false,
        level: 2
    },
    patientOrderInfoModal: {
        opened: false,
        level: 3
    }

}
export const ModalsSlice = createSlice({
    name: "modals",
    initialState,
    reducers: {
        handleOrderInfoModal: (state) => { state.orderInfoModal.opened = !state.orderInfoModal.opened },
        handleProfileEditModal: (state) => { state.profileEditModal.opened = !state.profileEditModal.opened },
        handlePatientsModal: (state) => { state.patientsModal.opened = !state.patientsModal.opened },
        handleAboutModal: (state) => { state.aboutAppModal.opened = !state.aboutAppModal.opened },
        handleBonusesModal: (state) => { state.bonusesModal.opened = !state.bonusesModal.opened },
        handlePatientInfoModal: (state) => { state.patientInfoModal.opened = !state.patientInfoModal.opened },
        handlePatientOrderInfoModal: (state) => { state.patientOrderInfoModal.opened = !state.patientOrderInfoModal.opened },
        handleBonusesBottomSheet: (state) => { state.bonusesBottomSheet.opened = !state.bonusesBottomSheet.opened },
        handleOrdersFinancesModal: (state) => { state.ordersFinancesModal.opened = !state.ordersFinancesModal.opened },
        handleAnalysisInfoModal: (state) => { state.analysisInfoModal.opened = !state.analysisInfoModal.opened },
    }
})

export const {
    handleOrderInfoModal,
    handleProfileEditModal,
    handlePatientsModal,
    handlePatientInfoModal,
    handleBonusesModal,
    handleAboutModal,
    handleBonusesBottomSheet,
    handleAnalysisInfoModal,
    handlePatientOrderInfoModal,
    handleOrdersFinancesModal
} = ModalsSlice.actions


export const modalsReducer = ModalsSlice.reducer