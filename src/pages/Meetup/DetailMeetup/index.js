import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import { MdLocationOn, MdEventNote } from 'react-icons/md';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';

import api from '~/services/api';
import history from '~/services/history';

import { Container, InfoMeet, Buttons, Footer, Description } from './styles';

export default function DetailMeetup({ match }) {
  const { id } = match.params;

  const [meetup, setMeetup] = useState({});

  useEffect(() => {
    async function loadMeetup() {
      const response = await api.get(`/meetups/${id}`);
      const data = {
        ...response.data,
        imageUrl: response.data.image.url,
        formattedDate: format(
          parseISO(response.data.date),
          "dd ' de ' MMMM ' às' H BBBB",
          {
            locale: pt,
          }
        ),
        creator: response.data.user.name,
      };

      setMeetup(data);
    }

    loadMeetup();
  }, [id]);

  async function handleCancel() {
    await api.delete(`/meetups/${id}`);
    toast.info('Meetup cancelado.');
    history.push('/dashboard');
  }

  return (
    <Container>
      <header>
        <InfoMeet>
          <strong>{meetup.title}</strong>
          <span>{meetup.creator}</span>
        </InfoMeet>
        <Buttons>
          <button
            className="editbutton"
            type="button"
            onClick={() => history.push(`/meetup/${id}/edit`)}
          >
            Editar
          </button>
          <button
            className="cancelbutton"
            type="button"
            onClick={() => handleCancel()}
          >
            Cancelar
          </button>
        </Buttons>
      </header>

      <img src={meetup.imageUrl} alt="meetup" />

      <Description>
        <p>Descrição: </p>
        <span>{meetup.description}</span>
      </Description>

      <Footer>
        <p>
          <MdEventNote size={20} color="#666" />
          {meetup.formattedDate}
        </p>
        <p>
          <MdLocationOn size={20} color="#666" />
          {meetup.location}
        </p>
      </Footer>
    </Container>
  );
}

DetailMeetup.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.object,
  }).isRequired,
};
