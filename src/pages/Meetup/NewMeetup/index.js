import React from 'react';
import { Form, Input, Textarea } from '@rocketseat/unform';

import api from '~/services/api';
import history from '~/services/history';

import FileInput from '~/components/FileInput';
import DatePicker from '~/components/DatePicker';
import { Container } from './styles';

export default function NewMeetup() {
  async function handleSubmit(data) {
    const response = await api.post('/meetups', data);
    const { id } = response.data;
    history.push(`/meetup/${id}`);
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit} autoComplete="off">
        <FileInput name="image_id" />
        <Input name="title" placeholder="Título" />
        <Textarea name="description" placeholder="Descrição" />
        <DatePicker name="date" placeholder="Data" />
        <Input name="location" placeholder="Localização" />
        <button className="buttonSubmit" type="submit">
          Criar Meetup
        </button>
      </Form>
    </Container>
  );
}
