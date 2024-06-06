import { Router, Request, Response } from 'express'

import { CreateUserController } from './controllers/user/CreateUserController'
import { AuthUserController } from './controllers/user/AuthUserController'
import { DetailUserController } from './controllers/user/DetailUserController'
import { CreateRemedyController } from './controllers/remedy/CreateRemedyController'
import { ListRemedyController } from './controllers/remedy/ListRemedyController'
import { RemoveRemedyController } from './controllers/remedy/RemoveRemedyController'
import { PutRemedyController } from './controllers/remedy/PutRemedyController'

import { isAuthenticated } from './middlewares/isAuthenticated'

const router = Router();

//Rotas User
router.post('/users', new CreateUserController().handle)

router.post('/session', new AuthUserController().handle)

router.get('/me', isAuthenticated, new DetailUserController().handle)

//Rotas remedy
router.post('/remedy', isAuthenticated, new CreateRemedyController().handle)

router.get('/remedy', isAuthenticated, new ListRemedyController().handle)

router.delete('/remedy', isAuthenticated, new RemoveRemedyController().handle)

router.put('/remedy/edit', isAuthenticated, new PutRemedyController().handle)

router.get('/teste', (req: Request, res: Response) => {
    return res.json({ nome: 'Yuri Batista' })
})
  

export { router };