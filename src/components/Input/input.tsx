import {useState} from "react";
import './input.css'

interface IProps {
    type: string;
    label?: string;
    pattern?: string;
    name: string;
}

export default function Input({type, label, pattern, name}: IProps) {

    const [value, setValue] = useState<any>('')

    return (
        <>
            {label && <label htmlFor="input">{label}</label>}
            <input id="input" name={name} value={value} pattern={pattern} onChange={e => setValue(e.target.value)} type={type}/>

        </>
    )
}
