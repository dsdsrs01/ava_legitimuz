import { Request, Response } from 'express'
import { PutRemedyService } from '../../services/remedy/PutRemedyService'

class PutRemedyController {
    async handle(req: Request, res: Response) {
        const remedy_id = req.query.remedy_id as string; // Pela URL
        const { name, count, category } = req.body // Pelo corpo da aplicacao

        const putRemedy = new PutRemedyService();

        const remedy = await putRemedy.execute({
            remedy_id,
            category,
            count,
            name
        }) 

        return res.json(remedy);
    }
}

export { PutRemedyController }