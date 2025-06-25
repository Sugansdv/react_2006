import React, { useEffect, useState, useRef } from 'react';
import { db } from '../firebase';
import {
  collection,
  addDoc,
  serverTimestamp,
  query,
  orderBy,
  onSnapshot,
  doc,
  setDoc
} from 'firebase/firestore';
import Message from './Message';
import UserList from './UserList';

const ChatRoom = ({ user }) => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [typingUser, setTypingUser] = useState(null);
  const messagesEndRef = useRef(null);

  // Fetch messages in real-time
  useEffect(() => {
    const q = query(collection(db, 'messages'), orderBy('timestamp'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setMessages(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    });
    return unsubscribe;
  }, []);

  // Scroll to bottom on new message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Update presence on login/unload
  useEffect(() => {
    if (user) {
      const userRef = doc(db, 'presence', user.uid);
      setDoc(userRef, {
        displayName: user.displayName,
        photoURL: user.photoURL,
        status: 'online',
        lastSeen: serverTimestamp(),
      });

      const handleUnload = () => {
        setDoc(userRef, {
          displayName: user.displayName,
          photoURL: user.photoURL,
          status: 'offline',
          lastSeen: serverTimestamp(),
        });
      };
      window.addEventListener('beforeunload', handleUnload);
      return () => window.removeEventListener('beforeunload', handleUnload);
    }
  }, [user]);

  // Typing status tracking
  useEffect(() => {
    const unsub = onSnapshot(collection(db, 'typing'), (snapshot) => {
      const othersTyping = snapshot.docs
        .map(doc => doc.data())
        .filter(d => d.uid !== user.uid && d.typing);
      setTypingUser(othersTyping[0]?.displayName || null);
    });
    return unsub;
  }, [user]);

  const handleTyping = (value) => {
    setNewMessage(value);
    setDoc(doc(db, 'typing', user.uid), {
      uid: user.uid,
      displayName: user.displayName,
      typing: value.length > 0,
    });
  };

  const sendMessage = async (e) => {
    e.preventDefault();
    if (newMessage.trim()) {
      await addDoc(collection(db, 'messages'), {
        text: newMessage,
        uid: user.uid,
        photoURL: user.photoURL,
        displayName: user.displayName,
        timestamp: serverTimestamp(),
      });
      setNewMessage('');
      setDoc(doc(db, 'typing', user.uid), {
        uid: user.uid,
        displayName: user.displayName,
        typing: false,
      });
    }
  };

  return (
    <div className="container mt-3">
      <UserList />
      <div className="chat-box border rounded p-3 bg-light" style={{ height: '400px', overflowY: 'auto' }}>
        {messages.map((msg) => (
          <Message key={msg.id} msg={msg} isCurrentUser={msg.uid === user.uid} />
        ))}
        <div ref={messagesEndRef} />
      </div>

      {typingUser && (
        <div className="text-muted small mt-2">✍️ {typingUser} is typing...</div>
      )}

      <form onSubmit={sendMessage} className="d-flex mt-3">
        <input
          type="text"
          className="form-control me-2"
          placeholder="Type your message..."
          value={newMessage}
          onChange={(e) => handleTyping(e.target.value)}
        />
        <button type="submit" className="btn btn-primary">
          Send
        </button>
      </form>
    </div>
  );
};

export default ChatRoom;