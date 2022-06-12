import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const RedireccionPage = () => {
  const navigate = useNavigate();

  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = ({ target }) => setSearchTerm(target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!searchTerm) return;
    const termUrl = encodeURIComponent(searchTerm.trim());
    navigate(`/search?q=${termUrl}`);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type='search' placeholder='Buscar' onChange={handleChange} />
        <button>Buscar elementos</button>
      </form>
    </div>
  );
};
