import prismaClient from "../../prisma";

interface RemedyRequest {
    remedy_id: string;
}

class RemoveRemedyService {
    async execute({ remedy_id }: RemedyRequest) {
        const remedy = await prismaClient.remedy.delete({
            where: {
                id: remedy_id
            }
        })

        return remedy;
    }
}

export { RemoveRemedyService }