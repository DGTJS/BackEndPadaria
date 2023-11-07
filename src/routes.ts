import { Router, Response, Request } from "express";
import multer from "multer";

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
import { CreateProductController } from "./controllers/product/CreateProductController";

import uploadConfig from './config/multer'
import { ListByCategoryController } from "./controllers/product/ListByCategoryController";
import { CreateOrderController } from "./controllers/order/CreateOrderController";
import { RemoveOrderController } from "./controllers/order/RemoveOrderController";
import { RemoveClientController } from "./controllers/Client/RemoveClientController";
import { AddItemController } from "./controllers/order/AddItemController";
import { RemoveCompanyController } from "./controllers/company/RemoveCompanyController";
import { RemoveItemController } from "./controllers/order/RemoveItemController";

const router = Router();

const upload = multer(uploadConfig.upload("./tmp"))


// CREATE USER
router.post('/company', upload.single('file'), new CreateCompanyController().handle);
router.post('/admin', new CreateAdminController().handle);
router.post('/client', new CreateClientController().handle);

// LOGIN USER
router.post('/login/company', new LoginCompanyController().handle)
router.post('/login/client', new LoginClientController().handle)
router.post('/admin/login', new LoginAdminController().handle)

// DETAILS USER
router.get('/me/company', isAuthenticated, new DetailCompanyController().handle)
router.get('/me/client', isAuthenticated, new DetailClientController().handle)
router.get('/me/admin', isAuthenticated, new DetailAdminController().handle)

// DELETE USER
router.delete('/client', isAuthenticated, new RemoveClientController().handle)
router.delete('/company', isAuthenticated, new RemoveCompanyController().handle)

// ROTAS CATEGORY
router.post('/category', isAuthenticated, new CreateCategoryController().handle)
router.get('/category', isAuthenticated, new ListCategoryController().handle)

// PRODUCT
router.post('/product', isAuthenticated, upload.single('file'),new CreateProductController().handle)
router.get('/category/product', isAuthenticated, new ListByCategoryController().handle)

// PEDIDOS/ORDER
router.post('/order', isAuthenticated, new CreateOrderController().handle)  
router.delete('/order', isAuthenticated, new RemoveOrderController().handle)
router.post('/order/add', isAuthenticated, new AddItemController().handle)
router.delete('/order/delete', isAuthenticated, new RemoveItemController().handle)

export { router };