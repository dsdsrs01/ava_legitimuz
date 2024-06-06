import prismaClient from "../../prisma";

interface RemedyRequest {
    name?: string;
    category?: string;
    count?: number;
    remedy_id: string;
}

class PutRemedyService {
    async execute({ category, count, name, remedy_id }: RemedyRequest) {
        const putRemedy = await prismaClient.remedy.update({
            where: {
                id: remedy_id,
            },
            data: {
                name: name,
                class: category,
                count: count,
            }
        })

        return putRemedy;
    }
}

export { PutRemedyService }