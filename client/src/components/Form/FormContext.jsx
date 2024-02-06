import { createContext, useState, useContext } from 'react'

const FormContext = createContext()

export const FormProvider = ({ children }) => {
    
    const [isFormVisible, setIsFormVisible] = useState(false);

    return (
        <FormContext.Provider value={{ isFormVisible, setIsFormVisible}}>
            { children }
        </FormContext.Provider>
    )
}

export const useFormContext = () => {
    return useContext(FormContext)
}