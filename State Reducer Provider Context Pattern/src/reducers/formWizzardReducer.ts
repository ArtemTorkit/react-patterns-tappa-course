import type { FormState, FormWizzardAction } from "../types/form"

export const formWizzardReducer = (state: FormState, action: FormWizzardAction) => {
    switch (action.type) {
        case 'NEXT_STEP':
            return { ...state, step: state.step + 1 }
        case 'PREV_STEP':
            return { ...state, step: state.step - 1 }
        case 'UPDATE_DATA':
            return { ...state, data: { ...state.data, [action.payload.name]: action.payload.value } }
        default:
            return state
    }
}