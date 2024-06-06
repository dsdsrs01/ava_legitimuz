import prismaClient from "../../prisma";
import { hash } from 'bcryptjs'

interface UserRequest {
    name: string;
    email: string;
    password: string;
}

class CreateUserService {
    async execute({ name, email, password }: UserRequest) {
        // Verificar se enviou o email

        if(!email) {
            //throw new Error("Email incorrect!")
            throw new Error("Email n enviado!")
        }

        const userAlreadyExists = await prismaClient.user.findFirst({
            where: {
                email: email,
            }
        })

        if(userAlreadyExists) {
            throw new Error("User already exists") // N deixa cadastrar dois user com o mesmo email
        }

        const passwordHask = await hash(password, 8)

        const user = await prismaClient.user.create({
            data: {
                name: name,
                email: email,
                password: passwordHask
            }, 
            select: {
                id: true,
                name: true,
                email: true
            }
        })

        return user;
    }
}

export { CreateUserService }