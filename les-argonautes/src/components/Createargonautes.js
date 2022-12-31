import React, { useState, useEffect, useRef } from 'react';

function Createargonautes(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : '');

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = e => {
    setInput(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input
    });
    setInput('');
  };
  return (
    <form action='argo.php' method='post' onSubmit={handleSubmit} className='new-member-form'>
          <label for="name">Nom de l&apos;Argonaute</label>
          <input
            placeholder='Charalampos'
            value={input}
            onChange={handleChange}
            name='text'
            class='new-member-form'
            ref={inputRef}
          />
          <button onClick={handleSubmit}>
            Ajouter
          </button>
    </form>
  );
}

export default Createargonautes;