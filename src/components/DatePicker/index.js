import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import ReactDatePicker, {
  registerLocale,
  setDefaultLocale,
} from 'react-datepicker';

import pt from 'date-fns/locale/pt';
import { useField } from '@rocketseat/unform';

import 'react-datepicker/dist/react-datepicker.css';

registerLocale('pt', pt);
setDefaultLocale('pt');

export default function DatePicker({ name }) {
  const ref = useRef(null);
  const { fieldName, registerField, defaultValue, error } = useField(name);
  const [selected, setSelected] = useState('');

  useEffect(() => {
    setSelected(defaultValue);
  }, [defaultValue]);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: ref.current,
      path: 'props.selected',
      clearValue: pickerRef => {
        pickerRef.clear();
      },
    });
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <ReactDatePicker
        name={fieldName}
        selected={selected}
        onChange={setSelected}
        ref={ref}
        locale="pt"
        showTimeSelect
        timeFormat="HH:mm"
        minDate={new Date()}
        timeIntervals={60}
        timeCaption="time"
        placeholderText="Selecione uma data"
        dateFormat="d 'de' MMMM, yyyy 'às' h:mm aa"
      />
      {error && <span>{error}</span>}
    </>
  );
}

DatePicker.propTypes = {
  name: PropTypes.string.isRequired,
};
