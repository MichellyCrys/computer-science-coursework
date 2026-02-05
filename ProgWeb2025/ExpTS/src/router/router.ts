import { Router } from "express";
import mainController from "../controllers/main.controller";
import majorController from "../controllers/major.controller";
import userController from "../controllers/user.controller";
import authController from "../controllers/auth.controller";
import gameController from '../controllers/game.controller';
import { requireLogin } from "../middlewares/auth";

const router = Router();

// Rotas principais
router.get('/', mainController.index);
router.get('/sobre', mainController.sobre);
router.get('/lorem', mainController.lorem);
router.get('/lorem/:numParagrafos', mainController.loremParagrafos);
router.get('/hb1', mainController.hb1);
router.get('/hb2', mainController.hb2);
router.get('/hb3', mainController.hb3);
router.get('/hb4', mainController.hb4);
router.get('/bemvindo/:nome', mainController.bemvindo);

// Rotas de autenticação
router.all("/auth/register", authController.register);
router.all("/auth/login", authController.login);
router.post("/auth/logout", authController.logout);

// Rotas de MajorController
router.get("/majors/", majorController.index);
router.all("/majors/create", majorController.create);
router.get("/majors/read/:id", majorController.read);
router.all("/majors/update/:id", majorController.update);
router.post("/majors/remove/:id", majorController.remove);

// Rotas para UserController
router.get("/users/", userController.index);
router.all("/users/create", userController.create);
router.get("/users/read/:id", userController.read);
router.all("/users/update/:id", userController.update);
router.post("/users/remove/:id", userController.remove);

//Rotas para game
router.post('/game/save-score', gameController.saveScore);

// Rotas de cookies e UUID
router.get('/create-cookie', mainController.createCookie);
router.get('/clear-cookie', mainController.clearCookie);
router.get('/uuid', mainController.uuid);

router.get("/", requireLogin, mainController.index);

export default router;