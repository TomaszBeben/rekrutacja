import React from 'react';
import { GlobaState } from '../../context/Context';

const Users = () => {
    const {users, search} = GlobaState();
    return (
        <div>
            {!users ?
                'Loading... ' :
                users
                .filter((elem) => {
                    if (search === '') {
                        return elem;
                    } else if (elem.name.toLowerCase().includes(search.toLowerCase())) {
                        return elem;
                    }
                    return false;
                }).map((elem, key) => (
                        <ul key={key} className='users-container'>
                            <li className='users-second_plan_elem'>{key + 1 + '.'}</li>
                            <li className='users-first_plan_elem'>{elem.name}</li>
                            <li className='users-second_plan_elem'>{'@' + elem.username} </li>
                        </ul>
                    ))}
        </div>
    );
};

export default Users;