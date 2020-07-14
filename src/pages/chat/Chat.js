import React, { useState, useEffect, useRef } from 'react';
import InputChat from './inputChat/InputChat';
import Select from './select/Select';
import { doing, aboutMe } from '../../data/Actions';
import WelcomeChat from './welcomeChat/WelcomeChat';
import Interactions from './interactions/Interactions';
import Bounce from 'react-reveal/Bounce';
import './Chat.css';

const Chat = () => {

    let idCounter = 0;

    const options = [
        {
            id: "doing",
            text: "¿Qué estás haciendo?"
        },
        {
            id: "about",
            text: "Contame sobre vos..."
        },
    ];

    const primerChat = [
        {
            id: 0,
            emmiter: 'Cat',
            msg: ['¡Hola!', '¿Cómo es tu nombre?']
        }
    ]

    const divRef = useRef(null);

    const [msg, setMsg] = useState({});

    const [openSelect, setOpenSelect] = useState(false);

    const [chat, setChat] = useState(primerChat);

    const [interactions, setInteractions] = useState([]);

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
        setChat([...chat, msg]);
    }


    function handleSelectedActions(value) {
        let result;
        switch (value) {
            case 'doing':
                result = doing[Math.floor(Math.random() * doing.length)];
                if (result) {
                    setInteractions([...interactions, result.msg]);
                }
                break;

            case 'about':
                result = aboutMe[Math.floor(Math.random() * aboutMe.length)];
                if (result) {
                    setInteractions([...interactions, result.msg]);
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
                        {/* Inicio de charla */}
                        <WelcomeChat chat={chat} />
                        {/* Opciones de Select */}
                        {openSelect &&
                            <Select
                                handleSelectedActions={handleSelectedActions}
                                options={options} />
                        }
                        {/* Respuestas de select */}
                        {
                            interactions.length > 0 && interactions.map((interaction, index) =>
                                <Interactions
                                    key={index} 
                                    interaction={interaction}
                                    index={index}
                                    handleSelectedActions={handleSelectedActions}
                                    options={options} />
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