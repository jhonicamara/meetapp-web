import React, { useState, useEffect } from 'react';
import { Form, Input, Textarea } from '@rocketseat/unform';
import { toast } from 'react-toastify';
import * as Yup from 'yup';
import PropTypes from 'prop-types';
import { parseISO } from 'date-fns';

import api from '~/services/api';
import history from '~/services/history';

import FileInput from '~/components/FileInput';
import DatePicker from '~/components/DatePicker';

import { Container } from './styles';

const schema = Yup.object().shape({
  image_id: Yup.number().transform(value => (!value ? undefined : value)),
  title: Yup.string().required('O título é obrigatório'),
  description: Yup.string().required('A descrição é obrigatória'),
  date: Yup.date().required('A data é obrigatória'),
  location: Yup.string().required('A localização é obrigatória'),
});

export default function EditMeetup({ match }) {
  const { id } = match.params;
  const [meetup, setMeetup] = useState({});

  useEffect(() => {
    async function loadMeetup() {
      const response = await api.get(`/meetups/${id}`);
      const data = {
        ...response.data,
        date: parseISO(response.data.date),
      };
      setMeetup(data);
    }

    loadMeetup();
  }, [id]);

  async function handleSubmit(data) {
    try {
      await api.put(`/meetups/${id}`, data);
      toast.info('Meetup atualizado.');
      history.push('/');
    } catch (e) {
      console.tron.log(e);
      toast.error('Ocorre um erro enquanto o meetup era salvo');
    }
  }

  return (
    <Container>
      <Form schema={schema} initialData={meetup} onSubmit={handleSubmit} autoComplete="off">
        <FileInput name="image_id" />
        <Input name="title" placeholder="Título" />
        <Textarea name="description" placeholder="Descrição" />
        <DatePicker name="date" />
        <Input name="location" placeholder="Localização" />
        <button className="buttonSubmit" type="submit">
          Atualizar Meetup
        </button>
      </Form>
    </Container>
  );
}

EditMeetup.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.object,
  }).isRequired,
};
