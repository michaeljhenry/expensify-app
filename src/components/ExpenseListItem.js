import React from 'react';
import moment from 'moment';
import {Link} from 'react-router-dom';
import numeral from 'numeral';




const ExpenseListItem = ({dispatch, id, description, amount, createdAt}) => (
        <Link className = 'list-item' to = {`edit/${id}`}>
        <div>
            <h3 className = 'list-item__title'>{description}</h3>  
            <span className = 'list-item__subtitle'>{moment(createdAt).format('MMMM Do, YYYY')}</span>
        </div>
        <h3 className = 'list-item__data'>{numeral(amount/100).format('$0,0.00')}</h3>

        </Link>
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