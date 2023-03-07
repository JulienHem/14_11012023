import {useState} from "react";
import './select.css'


interface IProps {
    optionsArray: string[];
    title: string;
    name: string;
}

export default function Select({optionsArray, title, name}: IProps) {

    const [label, setLabel] = useState<string>(optionsArray[0])
    const [showOptions, setShowOptions] = useState<boolean>(false)


    const handleOption = (e: any) => {
        setLabel(e.target.innerText)
        setShowOptions(false)
    }

    return (
        <div className="select">
            <input type="hidden" value={label} name={name}/>
            <label>{title}</label>
            <div className="select-wrap">
                <div
                    onClick={() => setShowOptions(prevState => !prevState)}
                    className={showOptions ? 'selected select-label' : 'select-label'}>
                    {label}
                </div>
                <div className={showOptions ? `visible select-options` : `select-options`}>
                    {optionsArray.map((option, index) => {
                        return (
                            <div
                                key={`option-${index}`}
                                onClick={handleOption}
                                className='select-options-label'>{option}</div>
                        )
                    })}
                </div>
            </div>
        </div>

    )
}
