import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { HomePage } from '../pages/home/HomePage';
import { ResidentesPage } from '../pages/residentes/ResidentesPage';

export const DashboardRoutes = () => {
  return (
    <Routes>
      <Route path='home' element={<HomePage />} />
      <Route path='residentes' element={<ResidentesPage />} />
      <Route path='*' element={<HomePage />} />
    </Routes>
  );
};
