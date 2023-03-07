import {useContext} from "react";
import {FormContext} from "../providers/formProvider";

export const useForm = () => {

    const context = useContext(FormContext);

    if( !context ) throw new Error('useForm must be used in the FormProvider');

    return context

}
