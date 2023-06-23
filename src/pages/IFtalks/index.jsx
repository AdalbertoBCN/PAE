import React, { useState, useEffect } from 'react';
import styles from './IFtalks.module.css';
import peopleData from './usersChat.json';

const IFtalks = () => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [selectedPerson, setSelectedPerson] = useState(null);

  useEffect(() => {
    const storedMessages = localStorage.getItem('chatMessages');
    if (storedMessages) {
      setMessages(JSON.parse(storedMessages));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('chatMessages', JSON.stringify(messages));
  }, [messages]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSendMessage = () => {
    if (inputValue.trim() !== '') {
      const newMessage = {
        text: inputValue,
        timestamp: new Date().getTime(),
        person: selectedPerson,
      };

      setMessages([...messages, newMessage]);
      setInputValue('');
    }
  };

  const handlePersonClick = (person) => {
    setSelectedPerson(person);
  };

  const filteredMessages = selectedPerson
    ? messages.filter((message) => message.person === selectedPerson)
    : messages;

  useEffect(() => {
    const firstPerson = peopleData[0]?.name; // Obtém o nome da primeira pessoa do array peopleData
    if (firstPerson) {
      handlePersonClick(firstPerson); // Seleciona automaticamente a primeira pessoa
    }
  }, []); // Executa apenas uma vez ao montar o componente

  return (
    <div className={styles.chatContainer}>
      <div className={styles.chatArea}>
        {selectedPerson && (
          <h2 className={styles.selectedPersonName}>{selectedPerson}</h2>
        )}
        <div className={styles.messages}>
          {filteredMessages.map((message, index) => (
            <div
              key={index}
              className={`${styles.bubble} ${
                message.person === selectedPerson ? styles.selectedBubble : ''
              }`}
            >
              <span>{message.text}</span>
              <span>{new Date(message.timestamp).toLocaleString()}</span>
            </div>
          ))}
        </div>
        <div className={styles.inputArea}>
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
          />
          <button onClick={handleSendMessage}>Enviar</button>
        </div>
      </div>
      <div className={styles.peopleList}>
        <h2>Pessoas</h2>
        {peopleData.map((person) => (
          <div
            key={person.id}
            className={`${styles.person} ${
              selectedPerson === person.name ? styles.selectedPerson : ''
            }`}
            onClick={() => handlePersonClick(person.name)}
          >
            <img
              src={person.image}
              alt={person.name}
              className={styles.personImage}
            />
            <div>
              <h3>{person.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IFtalks;
