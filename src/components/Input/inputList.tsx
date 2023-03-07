import Input from "./input";
import React, {FormEvent, useEffect} from "react";
import Select from "../Select/select";
import './input.css';
import { Modal } from 'julien-react-modal/dist/Modal'
import {useForm} from "../../hooks/useForm";

export default function InputList() {

    const { user, setUser } = useForm();

    const stateOptions = ['Alabama', 'Alaska', 'American Samoa', 'Arizona', 'Arkansas', 'California']
    const salesOptions = ['Sales', 'Marketing', 'Engineering', 'Human Resources', 'Legal']

    const handleForm = (e: any) => {
        e.preventDefault()
        const userArray: any = localStorage.getItem('userInfos')
        const length = JSON.parse(userArray).length
        setUser([...user, {
            id: length + 1,
            firstName: e.target[0].value,
            lastName: e.target[1].value,
            birthDate: new Intl.DateTimeFormat('fr-FR').format(new Date(e.target[2].value)),
            startDate: new Intl.DateTimeFormat('fr-FR').format(new Date(e.target[3].value)),
            street: e.target[5].value,
            city: e.target[6].value,
            state: e.target[7].value,
            zipCode: e.target[8].value,
            department: e.target[9].value,
        }])
    }

    useEffect(() => {
        if(user) localStorage.setItem('userInfos', JSON.stringify(user))
        }, [user])

    return (
        <form onSubmit={(e) => handleForm(e)}>
            <div className="inputs">
                <Input name='firstName' type="text" label="First Name"/>
                <Input name='lastName' type="text" label="Last Name"/>
                <Input name='birthDate' type="date" label="Date of Birth"/>
                <Input name='startDate' type="date" label="Start Date"/>
                <fieldset className="address">
                    <legend>Address</legend>
                    <Input name="street" type="text" label="Street" />
                    <Input name="city" type="text" label="City"/>
                    <Select name="state" title={'State'} optionsArray={stateOptions}/>
                    <Input name="zipCode" type="number" pattern="[0-9]" label="Zip Code"/>
                </fieldset>
                <Select name="department" title={'Department'} optionsArray={salesOptions}/>
                <Modal btnContent={'Save'}>Employee Created !</Modal>
            </div>
        </form>
    )
}
