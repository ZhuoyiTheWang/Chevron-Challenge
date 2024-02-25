import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';
import styles from './chatbot.module.css';
import SendIcon from '@mui/icons-material/Send';
import IconButton  from '@mui/material/IconButton';

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    const [messageInput, setMessageInput] = useState('');

    const toggleChatWindow = () => setIsOpen(!isOpen);

    const handleMessageSubmit = () => {
        if (!messageInput.trim()) return; // Prevent sending empty messages

        const newMessage = { id: messages.length + 1, text: messageInput, sender: 'user' };
        setMessages([...messages, newMessage]);

        setMessageInput('')

        // Simulate a bot response
        const botResponse = { id: messages.length + 2, text: "I'm a bot response!", sender: 'bot' };
        setMessages((prevMessages) => [...prevMessages, botResponse]);
    };

    return (
        <div className={styles.chatbotContainer}>
            <div className={`${styles.chatWindow} ${isOpen ? styles.open : ''}`}>
                <div className={styles.chatHeader}>
                <Button color="secondary"
                variant="contained" 
                onClick={toggleChatWindow}>
                Close
            </Button>
            </div>
            <div className={styles.chatBody}>
                    {messages.map((msg) => (
                        <div key={msg.id} className={`${styles.message} ${styles[msg.sender]}`}>
                            {msg.text}
                        </div>
                    ))}
                </div>
                <div className={styles.chatFooter}>
                    <Input color="secondary" 
                    placeholder="Type a message..." 
                    className={styles.inputGrow}
                    onChange={(e) => setMessageInput(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleMessageSubmit()}></Input>
                    <IconButton onClick={() => handleMessageSubmit()}>
                        <SendIcon/>
                    </IconButton>
                </div>
            </div>
            <Button color="info"
                variant="contained" 
                onClick={toggleChatWindow}>
                Chevron Help Bot
            </Button>
        </div>
    );
};

export default Chatbot;