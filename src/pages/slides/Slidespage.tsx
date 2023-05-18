import './Slidespage.scss'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { RootState } from '../../store/rootReducer';
import { getUsers } from '../../store/features/users/userActions';
import { AppDispatch } from '../../store/store';
import { User } from '../../store/features/users/userSlice';
import { Slide } from '../../cmps/slide/Slide';


export const Slidespage = () => {
    const dispatch = useDispatch<AppDispatch>();
    const users = useSelector((state: RootState) => state.users.users);
    const loading = useSelector((state: RootState) => state.users.loading);
    const error = useSelector((state: RootState) => state.users.error);

    useEffect(() => {
        dispatch(getUsers());
    }, [dispatch]);


    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return users.length ? <section className="slidespage">
        <Slide users={users} />
    </section> : <div></div>
}