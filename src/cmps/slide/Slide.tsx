import React, { useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import { User } from '../../store/features/users/userSlice';
import './Slide.scss'

export const Slide = ({ users }: { users: User[] }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const myRef = React.useRef();

    const handlers = useSwipeable({
        onSwipedLeft: () => {
            console.log('Swiped left');
            handleSwipe('left');
        },
        onSwipedRight: () => {
            console.log('Swiped right');
            handleSwipe('right');
        },
    });

    const handleSwipe = (direction: any) => {
        if (direction === 'left') {
            // Handle left swipe
            console.log('Swiped left');
        } else if (direction === 'right') {
            // Handle right swipe
            console.log('Swiped right');
        }

        // Move to the next card
        setCurrentIndex(currentIndex + 1);
    };

    const refPassthrough = (el: any) => {
        // call useSwipeable ref prop with el
        handlers.ref(el);

        // set myRef el so you can access it yourself
        myRef.current = el;
    }
    const renderCard = (index: any) => {
        if (index >= users.length) {
            return <div>No more cards</div>;
        }

        return <img src={require(`../../assets/${users[index].imgUrl}`)} />
    };

    return (
        <section className='slide'>
            <div className='slide-container' {...handlers} ref={refPassthrough}>{renderCard(currentIndex)}</div>
        </section>

    );
};

