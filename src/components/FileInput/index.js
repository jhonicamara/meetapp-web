import React, { useState, useEffect, useRef } from 'react';
import { useField } from '@rocketseat/unform';
import api from '~/services/api';

import { Container } from './styles';

export default function FileInput() {
  const { defaultValue, registerField } = useField('image');

  const [file, setFile] = useState('');
  const [preview, setPreview] = useState('');

  const ref = useRef();

  useEffect(() => {
    setFile(defaultValue && defaultValue.id);
    setPreview(defaultValue && defaultValue.url);
  }, [defaultValue]);

  useEffect(() => {
    if (ref.current) {
      registerField({
        name: 'image_id',
        ref: ref.current,
        path: 'dataset.file',
      });
    }
  }, [ref.current]); // eslint-disable-line

  async function handleChange(e) {
    const data = new FormData();

    data.append('file', e.target.files[0]);

    const response = await api.post('files', data);

    const { id, url } = response.data;

    setFile(id);
    setPreview(url);
  }

  return (
    <Container>
      <label htmlFor="image">
        {preview && <img src={preview} alt="image_meetapp" />}

        {!preview && (
          <div className="icon-add">
            <p>Selecione uma imagem</p>
          </div>
        )}
        <input
          type="file"
          id="image"
          accept="image/*"
          data-file={file}
          onChange={handleChange}
          ref={ref}
        />
      </label>
    </Container>
  );
}
