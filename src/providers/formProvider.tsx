import {createContext, ReactNode, useState} from "react";
import {User} from "../types/userType";

type FormContextType = {
    user: User[],
    setUser: (user: User[]) => void,
}

export const FormContext = createContext<FormContextType>({
    user: [],
    setUser: () => {
        throw new Error("setUser isn't initialized")
    }
})

const FormProvider = ({children} : {children: ReactNode}) => {
    const [user, setUser] = useState<User[]>([])
    return (
        <FormContext.Provider value={{user, setUser}}>
            {children}
        </FormContext.Provider>
    )
}

export default FormProvider

