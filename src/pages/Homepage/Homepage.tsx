import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { useFetchUsersQuery } from '../../features/users/usersApiSlice';
import { changeName, changeNameByInput } from '../../features/users/usersSlice';


export const Homepage = () => {
    const name = useAppSelector(state => state.users.user.name)
    const dispatch = useAppDispatch();
    const { data = [], isFetching } = useFetchUsersQuery();

    const handleClick = () => {
        // dispatch(changeName()); 
        dispatch(changeNameByInput('Maya'));
    }

    const x = process.env.REACT_APP_SERVER_URL_DEV;
    useEffect(() => {
        console.log(x);

    }, [x])

    return (
        <div className="homepage">
            <h1>Meeter</h1>
            <button onClick={handleClick}>name is: {name}</button>

            <div>
                <p>  number of users: {data.length}</p>
                {
                    data.map((user, idx) => {
                        return <div key={idx}>
                            <p>{user.name}</p>
                        </div>
                    }
                    )
                }
            </div>
        </div>
    )
}
