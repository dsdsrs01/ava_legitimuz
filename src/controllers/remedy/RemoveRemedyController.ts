import { Request, Response } from 'express'
import { RemoveRemedyService } from '../../services/remedy/RemoveRemedyService'

class RemoveRemedyController {
    async handle(req: Request, res: Response){
        const remedy_id = req.query.remedy_id as string;

        const removeOrder = new RemoveRemedyService();

        const remedy = await removeOrder.execute({
            remedy_id
        });

        return res.json(remedy);
    } 
}

export { RemoveRemedyController }