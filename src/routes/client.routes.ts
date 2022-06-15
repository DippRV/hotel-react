import {Router} from 'express'
import ClientController from '../controllers/client.controller'

export const ClientRouter = Router()

ClientRouter.get('/clients', ClientController.getClients)
ClientRouter.post('/clients', ClientController.addClient)
ClientRouter.put('/clients', ClientController.updateClient)