import { Request, Response } from 'express'
import { ListRemedyService } from '../../services/remedy/ListRemedyService'

class ListRemedyController {
    async handle(req: Request, res: Response) {
        const listRemedyService = new ListRemedyService();

        const remedy = await listRemedyService.execute();

        return res.json(remedy);
    }
}

export { ListRemedyController }