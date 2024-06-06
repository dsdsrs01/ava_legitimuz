import prismaClient from "../../prisma";

class ListRemedyService {
    async execute() {
        const remedy = await prismaClient.remedy.findMany({
            select: {
                id: true,
                name: true,
                class: true,
                count: true
            }
        })

        return remedy;
    }
}

export { ListRemedyService }