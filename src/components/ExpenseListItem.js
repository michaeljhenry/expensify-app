import React from 'react';

import {Link} from 'react-router-dom';




const ExpenseListItem = ({dispatch, id, description, amount, createdAt}) => (
    <div>
        <Link to = {`edit/${id}`}>
            <h3>{description}</h3>
        </Link>
        <p>{amount} - {createdAt}</p>
    </div>
)

export default ExpenseListItem;

// const ExpenseListItem = ({id, description, amount, createdAt}) => (
//     <div>
//         <h3>{description}</h3>
//         <p>{amount} - {createdAt}</p>
//         <button>Remove</button>
//     </div>
// )


// export default ExpenseListItem;