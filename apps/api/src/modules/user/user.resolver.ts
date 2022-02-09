import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql'
import { User } from './entities/user.entity'
import { UserService } from './user.service'
import { TUserUpdateDto } from './dtos/user-update.dto'

@Resolver(() => User)
export class UserResolver {
  constructor(
    private userService: UserService
  ) {
  }

  @Query(() => [User])
  async getAllUsers() {
    return this.userService.findAll()
  }

  @Query(() => User)
  async getUser(
    @Args('id', {type: () => Int}) id: number
  ) {
    return this.userService.findById(id)
  }

  @Mutation(() => User, {nullable: true})
  async updateUser(
    @Args('id', {type: () => Int}) id: number,
    @Args('activated', {type: () => Boolean, nullable: true}) activated?: boolean,
    @Args('blocked', {type: () => Boolean, nullable: true}) blocked?: boolean,
  ) {
    return this.userService.updateById(id, {
      activated,
      blocked
    } as TUserUpdateDto)
  }

  @Mutation(() => Boolean)
  async deleteUser(
    @Args('id', {type: () => Int}) id: number
  ) {
    return this.userService.deleteById(id)
  }
}