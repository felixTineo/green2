import React from 'react';
import Cleave from 'cleave.js/react';
import classnames from 'classnames';
import './form.scss';

const InputDate = ({
  value,
  onChange,
  onFocus,
  id,
  color,
}) => (
  <div className="input_date_cont">
    <div className={classnames({ light: color === 'light' })}>
      <label>Cumpleaños:</label>
      <Cleave
        onChange={onChange}
        onFocus={onFocus}
        value={value}
        name="date"
        id={id}
        placeholder="MM/DD/YYYY"
        options={{ date: true, datePattern: ['m', 'd', 'Y'] }}
      />
    </div>
  </div>
);

export default InputDate;
