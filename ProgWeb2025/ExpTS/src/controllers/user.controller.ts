import { Request, Response } from 'express';
import {
  createUser,
  getAllUsers,
  getUser,
  updateUser,
  deleteUser
} from '../services/user';

const index = async (req: Request, res: Response) => {
  try {
    const users = await getAllUsers();
    res.render('user/index', { users });
  } catch (err) {
    res.status(500).send(err);
  }
};

const create = async (req: Request, res: Response) => {
  if (req.method === 'GET') {
    res.render('user/create');
  } else {
    try {
      await createUser(req.body);
      res.redirect('/users');
    } catch (err) {
      res.status(500).send(err);
    }
  }
};

const read = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const user = await getUser(id);
    if (!user) {
      res.status(404).send('Usuário não encontrado');
      return;
    }
    res.render('user/read', { user });
  } catch (err) {
    res.status(500).send(err);
  }
};

const update = async (req: Request, res: Response) => {
  const { id } = req.params;

  if (req.method === 'GET') {
    try {
      const user = await getUser(id);
      if (!user) {
        res.status(404).send('Usuário não encontrado');
        return;
      }
      res.render('user/update', { user });
    } catch (err) {
      res.status(500).send(err);
    }
  } else {
    try {
      await updateUser(id, req.body);
      res.redirect('/users');
    } catch (err) {
      res.status(500).send(err);
    }
  }
};

const remove = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await deleteUser(id);
    res.redirect('/users');
  } catch (err) {
    res.status(500).send(err);
  }
};

export default {
  index,
  create,
  read,
  update,
  remove
};
