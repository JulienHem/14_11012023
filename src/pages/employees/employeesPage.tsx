import {DataGrid, GridColDef, GridValueGetterParams} from "@mui/x-data-grid";
import {Box} from "@mui/material";
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";

export default function EmployeesPage() {

    const [searchValue, setSearchValue] = useState<string>('')

    const users: any = localStorage.getItem('userInfos')

    const columns: GridColDef[] = [
        {
            field: 'firstName',
            headerName: 'First name',
            width: 150,
            editable: true,
        },
        {
            field: 'lastName',
            headerName: 'Last name',
            width: 150,
            editable: true,
        },
        {
            field: 'startDate',
            headerName: 'Start Date',
            type: 'string',
            width: 110,
        },
        {
            field: 'department',
            headerName: 'Department',
            type: 'string',
            width: 160,
        },
        {
            field: 'birthDate',
            headerName: 'Date of Birth',
            type: 'string',
            width: 160,
        },
        {
            field: 'street',
            headerName: 'Street',
            type: 'string',
            width: 160,
        },
        {
            field: 'city',
            headerName: 'City',
            type: 'string',
            width: 160,
        },
        {
            field: 'state',
            headerName: 'State',
            type: 'string',
            width: 160,
        },
        {
            field: 'zipCode',
            headerName: 'Zip Code',
            type: 'string',
            width: 160,
        },
    ];

    const usersArray: any = () => {
        const userArray = [...JSON.parse(users)]
        if (searchValue) {
            return userArray.filter((user) => {
                return Object.keys(user).some(k => {
                    if (k === 'id') return
                    if (!k) return
                    return user[k].toLowerCase().includes(searchValue.toLowerCase())
                })
            })
        }
        return userArray
    }

    useEffect(() => {
        usersArray()
    }, [searchValue])

    return (
        <>
            <h1>Current Employees</h1>
            <input type="search" onChange={e => setSearchValue(e.target.value)}/>
            <Box sx={{height: 400, width: '90%'}}>
                <DataGrid
                    columns={columns}
                    rows={usersArray()}
                />
            </Box>
            <Link to={'/'}>Home</Link>
        </>

    )
}
