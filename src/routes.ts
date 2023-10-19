import { Router, Response, Request } from "express";

import { CreateUserController } from "./controllers/user/CreateUserController";
import { CreateAdminController } from "./controllers/Admin/CreateAdminController";
import { CreateClientController } from "./controllers/Client/CreateClientController";

import { LoginAdminController } from "./controllers/Admin/LoginAdminController";
import { LoginClientController } from "./controllers/Client/LoginClientController";
import { LoginUserController } from "./controllers/user/LoginUserController";

const companyRouter = Router();

companyRouter.post('/users', new CreateUserController().handle);
companyRouter.post('/admin', new CreateAdminController().handle);
companyRouter.post('/users/client', new CreateClientController().handle);

companyRouter.post('/login/users', new LoginUserController().handle)
companyRouter.post('/login/client', new LoginClientController().handle)
companyRouter.post('/login/admin', new LoginAdminController().handle)

export { companyRouter };