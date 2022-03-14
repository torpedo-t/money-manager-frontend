import React from 'react';
import { Link} from 'react-router-dom';




const Accounts = (props) => {
    // console.log(props)
    return (
        <div>
            <br></br>
            <center>
            {props.accounts.map(account => 
            <li key={account.id}>
                <Link to={`/accounts/${account.id}`}>{account.name}</Link>
            </li> )}
            </center>
        </div>
    )
}

export default Accounts;