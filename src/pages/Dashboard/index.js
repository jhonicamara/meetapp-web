import React, { useState, useEffect } from 'react';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';

import history from '~/services/history';
import api from '~/services/api';

import { Container, MeetUp } from './styles';

export default function Dashboard() {
  const [meetups, setMeetups] = useState([]);

  useEffect(() => {
    async function loadMeetups() {
      const response = await api.get('meetups');

      const data = response.data.map(meetup => ({
        ...meetup,
        formattedDate: format(parseISO(meetup.date), "d 'de' MMMM', às' h'h'", {
          locale: pt,
        }),
      }));
      setMeetups(data);
    }
    loadMeetups();
  }, []);

  return (
    <Container>
      <header>
        <strong>Meus Meetups</strong>
        <button type="button" onClick={() => history.push('/meetup/new')}>
          Novo Meetup
        </button>
      </header>

      <ul>
        {meetups.map(item => (
          <MeetUp onClick={() => history.push(`/meetup/${item.id}`)}>
            <strong>{item.title}</strong>
            <span>{item.user.name}</span>
            <span>{item.formattedDate}</span>
          </MeetUp>
        ))}
      </ul>
    </Container>
  );
}
