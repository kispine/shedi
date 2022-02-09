import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { User } from './entities/user.entity'
import { Repository } from 'typeorm'
import { TUserUpdateDto } from './dtos/user-update.dto'

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {
  }

  async findById(id: number): Promise<User> {
    return this.usersRepository.findOne(id)
  }

  async findAll(): Promise<User[]> {
    return this.usersRepository.find()
  }

  async updateById(id: number, data: TUserUpdateDto): Promise<User> {
    await this.usersRepository.update({id}, data)
    return this.findById(id)
  }

  async deleteById(id: number): Promise<boolean> {
    return !!(await this.usersRepository.delete({id}))
  }
}