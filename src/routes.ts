import { Router, Response, Request } from "express";

import { CreateCompanyController } from "./controllers/company/CreateCompanyController";
import { CreateAdminController } from "./controllers/Admin/CreateAdminController";
import { CreateClientController } from "./controllers/Client/CreateClientController";

import { LoginAdminController } from "./controllers/Admin/LoginAdminController";
import { LoginClientController } from "./controllers/Client/LoginClientController";
import { LoginCompanyController } from "./controllers/company/LoginCompanyController";

import { DetailCompanyController } from "./controllers/company/DetailCompanyController";
import { DetailClientController } from "./controllers/Client/DetailClientController";
import { DetailAdminController } from "./controllers/Admin/DetailAdminController";

import { isAuthenticated } from "./middlewares/isAuthenticated";
import { CreateCategoryController } from "./controllers/category/CreateCategoryController";
import { ListCategoryController } from "./controllers/category/ListCategoryController";

const router = Router();

router.post('/company', new CreateCompanyController().handle);
router.post('/admin', new CreateAdminController().handle);
router.post('/client', new CreateClientController().handle);

router.post('/login/company', new LoginCompanyController().handle)
router.post('/login/client', new LoginClientController().handle)
router.post('/admin/login', new LoginAdminController().handle)

router.get('/me/company', isAuthenticated, new DetailCompanyController().handle)
router.get('/me/client', isAuthenticated, new DetailClientController().handle)
router.get('/me/admin', isAuthenticated, new DetailAdminController().handle)

// ROTAS CATEGORY

router.post('/category', isAuthenticated, new CreateCategoryController().handle)
router.get('/category', isAuthenticated, new ListCategoryController().handle)

export { router };