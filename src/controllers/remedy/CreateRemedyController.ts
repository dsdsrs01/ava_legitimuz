import { Request, Response } from 'express'
import { CreateRemedyService } from '../../services/remedy/CreateRemedyService'

class CreateRemedyController {
    async handle(req: Request, res: Response){
        const { name, category, count } = req.body;

        const createRemedyService = new CreateRemedyService();

        const remedy = await createRemedyService.execute({
            name, category, count
        });

        return res.json(remedy);
    }
}

export {CreateRemedyController} 