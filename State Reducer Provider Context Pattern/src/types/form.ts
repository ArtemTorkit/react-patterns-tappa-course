
export interface FormData {
    text1?: string,
    text2?: string,
    text3?: string,
}

export interface FormState {
    step: number,
    data: FormData
}

export type FormWizzardAction =
| { type: 'NEXT_STEP' }
| { type: 'PREV_STEP' }
| { type: 'UPDATE_DATA', payload: { name: string, value: unknown } }