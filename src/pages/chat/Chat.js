import React, { useState, useEffect, useRef } from 'react';
import './Chat.css';
import CatItem from './catItem/CatItem';
import UserItem from './userItem/UserItem';
import InputChat from './inputChat/InputChat';
import Select from './select/Select';
import { doing, aboutMe } from '../../data/Actions';
import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce';
import { Fragment } from 'react';

const Chat = () => {

    let idCounter = 0;

    const divRef = useRef(null);

    const [msg, setMsg] = useState({});

    const [openSelect, setOpenSelect] = useState(false);

    const [chat, setChat] = useState([
        {
            id: 0,
            emmiter: 'Cat',
            msg: ['¡Hola!', '¿Cómo es tu nombre?']
        }
    ]);

    useEffect(() => {
        if (chat.length === 2) {
            setTimeout(() => firstResponse(msg.msg), 500);
            setMsg({ ...msg, msg: '' });
            setTimeout(() => setOpenSelect(true), 600);
        }
    }, [chat]);

    useEffect(() => {
        divRef.current.scrollIntoView({ block: 'end', behavior: 'smooth' });
    });

    function firstResponse(name) {
        let newChat = {
            id: idCounter + 2,
            emmiter: 'Cat',
            msg: [
                '¡Mucho gusto, ' + name + '!',
                'Mi nombre es Covid19, soy un virus en expansión',
                '¡Estoy creciendo día a día gracias a la negligencia de las personas!',
                '¡Hazme una pregunta y con gusto responderé...'
            ]
        }
        if (newChat) {
            setChat([...chat, newChat])
        }
    };

    function getMeMessage(value) {
        idCounter = idCounter + 1;
        setMsg({
            id: idCounter,
            emitter: 'User',
            msg: value
        });
    };

    function sendMessage(e) {
        e.preventDefault();
        console.log(e);
        setChat([...chat, msg]);
    }

    let options = [
        {
            id: "What are you doing?",
            text: "¿Qué estás haciendo?"
        },
        // {
        //     id: "Send a meme",
        //     text: "Mandame un meme"
        // },
        {
            id: "Tell me about you",
            text: "Contame sobre vos..."
        },
    ];

    const [interactions, setInteractions] = useState([]);

    function handleSelectedActions(value) {
        let result;
        switch (value) {
            case 'What are you doing?':
                result = doing[Math.floor(Math.random() * doing.length)];
                if (result) {
                    setInteractions([...interactions, result.msg])
                }
                break;

            case 'Tell me about you':
                result = aboutMe[Math.floor(Math.random() * aboutMe.length)];
                if (result) {
                    setInteractions([...interactions, result.msg])
                }
                break;

            default:
                console.log('No hay valores');
        }
    }

    return (
        <div className='chatbot-chat-container'>
            <div className="chatbot-chat-content">
                <Bounce top>
                    <h1> ¡Vamos a conocernos! </h1>
                </Bounce>
                <div className="chatbot-chat">
                    <div className="chatbot-chat-container-body">
                        {chat.map((message, index) =>
                            message.emmiter === 'Cat' ?
                                <CatItem
                                    key={message.id}
                                    text={message.msg} />
                                :
                                <UserItem
                                    key={message.id}
                                    text={message.msg} />
                        )}
                        {openSelect &&
                            <Fade right>
                                <Select
                                    handleSelectedActions={handleSelectedActions}
                                    options={options} />
                            </Fade>
                        }
                        {
                            interactions.length > 0 && interactions.map((interaction, index) =>
                                <Fragment key={index}>
                                    <Fade left>
                                        <CatItem key={ImageBitmapRenderingContext} text={interaction}> </CatItem>
                                    </Fade>
                                    <Fade right>
                                        <Select
                                            handleSelectedActions={handleSelectedActions}
                                            options={options} />
                                    </Fade>
                                </Fragment>
                            )
                        }
                        <div ref={divRef}></div>
                    </div>
                    <div className="chatbot-chat-container-input">
                        <InputChat
                            chat={chat}
                            msg={msg}
                            getMeMessage={getMeMessage}
                            sendMessage={sendMessage} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Chat;