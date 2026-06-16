import React from 'react'
import { formWizzardReducer } from '../reducers/formWizzardReducer'
import { FormWizzardContext } from '../context/index'

const FormWizzardProvider = ({reducer=formWizzardReducer, children}: {reducer?: typeof formWizzardReducer, children: React.ReactNode}) => {
  const [state, dispatch] = React.useReducer(reducer, {step: 1, data: {}})

  return (
    <FormWizzardContext value={{state, dispatch}}>{children}</FormWizzardContext>
  )
}

export default FormWizzardProvider