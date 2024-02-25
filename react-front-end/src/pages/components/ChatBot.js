import React, { useState, useEffect, useRef } from 'react';
import Button from '@mui/material/Button';
import styles from './chatbot.module.css';
import SendIcon from '@mui/icons-material/Send';
import IconButton  from '@mui/material/IconButton';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import Box from '@mui/material/Box'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import UserIcon from '@mui/icons-material/AccountCircle';
import BotIcon from '@mui/icons-material/Android'; 

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    const [messageInput, setMessageInput] = useState('');
    const chatEndRef = useRef(null);

    const toggleChatWindow = () => setIsOpen(!isOpen);

    const handleMessageSubmit =  () => {
        if (!messageInput.trim()) return; // Prevent sending empty messages

        const newMessage = { id: messages.length + 1, text: messageInput, sender: 'user' };
        setMessageInput('');

        setMessages(prevMessages => {
            const updatedMessages = [...prevMessages, newMessage];

            // Encapsulate the async logic in an immediately invoked async function
            (async () => {
                try {
                    const response = await fetch('http://localhost:5000/api/submit', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(updatedMessages),
                    });

                    if (!response.ok) {
                        throw new Error(`HTTP error! status: ${response.status}`);
                    }

                    // Handle response data here, if needed
                    const data = await response.json();
                    console.log('Submission successful', data);

                    // Add the bot's response to the messages state
                    const botResponse = { id: updatedMessages.length + 1, text: data.data, sender: 'bot' };
                    return [...updatedMessages, botResponse];
                } catch (error) {
                    console.error('Error submitting messages to backend:', error);
                    return prevMessages; // In case of error, return the previous state
                }
            })();

             return updatedMessages
    });
    };

    const scrollToBottom = () => {
        chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    return (
        <Box className={styles.chatbotContainer}>
            <div className={`${styles.chatWindow} ${isOpen ? styles.open : ''}`}>
                <div className={styles.chatHeader}>
                <Button color="secondary"
                variant="contained" 
                onClick={toggleChatWindow}>
                Close
                </Button>
                </div>
                <div className={styles.chatBody}>
                    <List>
                        {messages.map((msg) => (
                            <ListItem key={msg.id} className={styles.listItem}>
                                <ListItemIcon className={styles.icon}>
                                    <Avatar className={`${styles.avatar} ${msg.sender === 'user' ? styles.userAvatar : styles.botAvatar}`}>
                                        {msg.sender === 'user' ? <UserIcon /> : <BotIcon />}
                                    </Avatar>
                                 </ListItemIcon>
                                 <ListItemText
                                    primary={
                                        <Paper elevation={1} className={`${styles.messageBubble} ${msg.sender === 'user' ? styles.userMessage : styles.botMessage}`}>
                                            <Typography variant="body2">
                                                {msg.text}
                                            </Typography>
                                        </Paper>
                                    }
                                />
                            </ListItem>
                        ))}
                    </List>
                    <div ref={chatEndRef} />
                </div>
                <div className={styles.chatFooter}>
                    <TextareaAutosize
                    minRows={1}
                    maxRows={2} // Set the maximum number of rows you want the textarea to grow
                    className={styles.textareaAutosize}
                    placeholder="Type a message..."
                    style={{ width: '100%', padding: '10px' }} // Adjust the styling as needed
                    value={messageInput}
                    onKeyPress={(e) => {
                        if (e.key === 'Enter' && !e.shiftKey){
                            e.preventDefault();
                            handleMessageSubmit();
                        }}}
                    onChange={(e) => setMessageInput(e.target.value)}
                    />
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
        </Box>
    );
};

export default Chatbot;