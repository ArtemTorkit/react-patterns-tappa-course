import { useContext } from "react"
import { FormWizzardContext } from "../context"
import type { FormState, FormWizzardAction } from "../types/form";

const useFormWizzard = () => {
    const {state, dispatch} = useContext(FormWizzardContext) as { state: FormState; dispatch: React.Dispatch<FormWizzardAction> }

    return { state, dispatch }
}

export default useFormWizzard