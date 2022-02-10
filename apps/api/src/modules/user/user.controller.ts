import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common'
import { UserService } from './user.service'
import { User } from './entities/user.entity'
import { TUserUpdateDto } from './dtos/user-update.dto'

@Controller('/user')
export class UserController {
  constructor(
    private usersService: UserService,
  ) {
  }

  @Get()
  async getAllUsers(): Promise<User[]> {
    return this.usersService.findAll()
  }

  @Get('/:id')
  async getUser(@Param() id: number): Promise<User | null> {
    return this.usersService.findById(id)
  }

  @Post('/:id')
  async updateUser(
    @Param() id: number,
    @Body() dto: TUserUpdateDto
  ): Promise<User | null> {
    return this.usersService.updateById(id, dto)
  }

  @Delete('/:id')
  async deleteUser(@Param() id: number): Promise<boolean> {
    return this.usersService.deleteById(id)
  }
}