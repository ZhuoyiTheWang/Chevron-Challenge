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

    const handleMessageSubmit = () => {
        if (!messageInput.trim()) return; // Prevent sending empty messages

        const newMessage = { id: messages.length + 1, text: messageInput, sender: 'user' };
        setMessages([...messages, newMessage]);

        setMessageInput('')

        // Simulate a bot response
        const botResponse = { id: messages.length + 2, text: "I'm a bot response!", sender: 'bot' };
        setMessages((prevMessages) => [...prevMessages, botResponse]);
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