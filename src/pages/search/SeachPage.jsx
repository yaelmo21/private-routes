import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';

export const SeachPage = () => {
  const location = useLocation();
  const { q } = queryString.parse(location.search);

  useEffect(() => {
    console.log('buscando');
  }, [q]);

  return <div>{q}</div>;
};
