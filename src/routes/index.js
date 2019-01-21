import express from 'express';
import { UsersController } from '../controllers/index';

const routes = app => {
  app.get('/', (req, res) =>
    res.status(200).json({ status: 'success', message: 'Space launched' }),
  );

  // signup route
  app.post('/signup', UsersController.signup);

  // Catch all route
  app.get('*', (req, res) => {
    res.status(404).json({ status: 'error', message: 'You just got lost down the rabbit hole' })
  })
};

export default routes;
