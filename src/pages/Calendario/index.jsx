import React, { useState, useEffect } from 'react';
import styles from './Calendario.module.css';

const EventInput = ({ date, onAddEvent }) => {
  const [newEventText, setNewEventText] = useState('');

  const handleNewEventChange = (event) => {
    setNewEventText(event.target.value);
  };

  const handleNewEventSubmit = (event) => {
    event.preventDefault();

    if (newEventText.trim() !== '') {
      onAddEvent(date, newEventText);
      setNewEventText('');
    }
  };

  return (
    <form onSubmit={handleNewEventSubmit} className={styles.inputContainer}>
      <input
        type="text"
        placeholder="Adicionar evento"
        value={newEventText}
        onChange={handleNewEventChange}
      />
      <button type="submit">Adicionar</button>
    </form>
  );
};

const Calendario = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [events, setEvents] = useState({});

  useEffect(() => {
    const storedEvents = localStorage.getItem('CalendarioEvents');
    if (storedEvents) {
      setEvents(JSON.parse(storedEvents));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('CalendarioEvents', JSON.stringify(events));
  }, [events]);

  const handleDateClick = (date) => {
    setSelectedDate(date);
  };

  const handleAddEvent = (date, eventText) => {
    const dateKey = date.toDateString();
    const newEvent = {
      id: Date.now(),
      text: eventText,
    };

    setEvents((prevEvents) => {
      const existingEvents = prevEvents[dateKey] || [];
      if (existingEvents.length >= 3) {
        return prevEvents;
      }
      return {
        ...prevEvents,
        [dateKey]: [...existingEvents, newEvent],
      };
    });
  };

  const handleDeleteEvent = (date, eventId) => {
    const dateKey = date.toDateString();

    setEvents((prevEvents) => {
      const updatedEvents = prevEvents[dateKey].filter((event) => event.id !== eventId);

      return {
        ...prevEvents,
        [dateKey]: updatedEvents,
      };
    });
  };

  const renderCalendario = () => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    const daysInMonth = new Date(year, month + 1, 0).getDate();

    const monthStartDay = new Date(year, month, 1).getDay();

    const CalendarioDays = [];

    // Adiciona dias vazios para alinhar corretamente o primeiro dia do mês
    for (let i = 0; i < monthStartDay; i++) {
      CalendarioDays.push(<div key={`empty-${i}`} className={styles.CalendarioDay}></div>);
    }

    // Adiciona os dias do mês
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(year, month, day);
      const isSelected = selectedDate && date.toDateString() === selectedDate.toDateString();
      const dateKey = date.toDateString();
      const dayEvents = events[dateKey] || [];

      CalendarioDays.push(
        <div
          key={day}
          className={`${styles.CalendarioDay} ${isSelected ? styles.selected : ''}`}
          onClick={() => handleDateClick(date)}
        >
          <span>{day}</span>
          <ul className={styles.eventList}>
            {dayEvents.map((event) => (
              <li key={event.id}>
                <strong title={event.text}>{event.text}</strong>
                <button
                  className={styles.deleteButton}
                  onClick={() => handleDeleteEvent(date, event.id)}
                >
                  x
                </button>
              </li>
            ))}
          </ul>
          <EventInput date={date} onAddEvent={handleAddEvent} />
        </div>
      );
    }

    return <div className={styles.Calendario}>{CalendarioDays}</div>;
  };

  return (
    <div className={styles.CalendarioContainer}>
      <h2>Calendário</h2>
      {renderCalendario()}
      <div>
        {selectedDate ? (
          <p>Data selecionada: {selectedDate.toLocaleDateString()}</p>
        ) : (
          <p>Nenhuma data selecionada.</p>
        )}
      </div>
    </div>
  );
};

export default Calendario;
