import {Link} from "react-router-dom";
import InputList from "../../components/Input/inputList";
import './homepage.css';

export default function Homepage() {
    return (
        <>
            <div className="content">
                <h1>HRNet</h1>
                <Link to="/employees">
                    View Current Employees
                </Link>
                <h2>Create Employee</h2>
                <InputList />
            </div>
        </>
    )
}
