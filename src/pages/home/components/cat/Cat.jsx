import React from 'react';
import Lottie from 'react-lottie';
import animationCat from './covid19.json';
import './Cat.css';

const Cat = ({ history }) => {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationCat
    };

    function handleonClick() {
        history.push('/chat');
    };

    return (
        <div onClick={handleonClick}
            className='cat-container'>
            <Lottie
                options={defaultOptions}
            />
        </div>
    );

}

export default Cat;