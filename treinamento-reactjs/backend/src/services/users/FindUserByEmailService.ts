import { inject, injectable } from "tsyringe";
import User from "../../models/User";
import IUsersRepository from '../../repositories/interfaces/IUsersRepository';

@injectable()
export default class FindUserByEmailService {
    constructor(
        @inject("UsersRepository")
        private usersRepository: IUsersRepository
    ) {}

    public async execute(email: string): Promise<User | undefined> {
        const user = await this.usersRepository.findByEmail(email);
        
        return user;
    } 
}