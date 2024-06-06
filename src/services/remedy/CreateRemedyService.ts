import prismaClient from "../../prisma";

interface RemedyRequest {
    name: string;
    category: string;
    count: number;
}

class CreateRemedyService {
    async execute({ name, category, count }: RemedyRequest) {
        if(name === '' || category === '') {
            throw new Error('Name or classe invalid')
            //throw new Error('Error Aqui')
        }

        const remedy = await prismaClient.remedy.create({
            data: {
                name: name,
                class: category,
                count: count
            }, 
            select: {
                id: true,
                name: true,
            }
        })

        return remedy;
    }   
}
export { CreateRemedyService }