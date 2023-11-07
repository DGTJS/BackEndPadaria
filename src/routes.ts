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
import { ConfirmedOrderController } from "./controllers/order/ConfirmedOrderController";
import { UpdateCompanyController } from "./controllers/company/UpdateCompanyController";
import { UpdateClientController } from "./controllers/Client/UpdateClientController";
import { ConfirmedPaymentController } from "./controllers/order/ConfirmedPaymentController";
import { RemoveProductController } from "./controllers/product/RemoveOrderController";
import { ListOrderController } from "./controllers/order/ListOrderController";
import { DetailOrderController } from "./controllers/order/DetailOrderController";
import { FinishOrderController } from "./controllers/order/FinishOrderController";

const router = Router();

const upload = multer(uploadConfig.upload("./tmp"))


// CREATE USER
router.post('/company', upload.single('file'), new CreateCompanyController().handle);
router.post('/admin', new CreateAdminController().handle);
router.post('/client', new CreateClientController().handle);

// LOGIN USER
router.post('/login/company', new LoginCompanyController().handle)
router.post('/login/client', new LoginClientController().handle)
router.post('/devank/login', new LoginAdminController().handle)

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
router.delete('/Product', isAuthenticated, new RemoveProductController().handle)


// PEDIDOS/ORDER
router.post('/order', isAuthenticated, new CreateOrderController().handle)  
router.delete('/order', isAuthenticated, new RemoveOrderController().handle)
router.post('/order/add', isAuthenticated, new AddItemController().handle)
router.delete('/order/delete', isAuthenticated, new RemoveItemController().handle)
router.get('/orders', isAuthenticated, new ListOrderController().handle)
router.get('/order/detail', isAuthenticated, new DetailOrderController().handle)


// ATUALIZAÇÃO DE DADOS
router.put('/order/confirmed', isAuthenticated, new ConfirmedOrderController().handle)
router.put('/company/change', isAuthenticated, new UpdateCompanyController().handle)
router.put('/client/change', isAuthenticated, new UpdateClientController().handle)
router.put('/order/confirmed/payment' ,isAuthenticated, new ConfirmedPaymentController().handle)
router.put('/order/finish', isAuthenticated, new FinishOrderController().handle)


export { router };