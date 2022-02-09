import {
  BeforeInsert,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm'
import * as bcrypt from 'bcrypt'
import { Field, Int, ObjectType, registerEnumType } from '@nestjs/graphql'
import { UserRole } from '../../../../../../libs/UserRole'

@Entity({
  name: 'user'
})
@ObjectType()
export class User {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number

  @Column()
  @Field()
  name: string

  @Column({
    unique: true,
    nullable: false
  })
  @Field({nullable: false})
  email: string

  @Column({
    nullable: false,
    select: false
  })
  password: string

  @Column({
    type: 'enum',
    enum: UserRole,
    default: UserRole.USER
  })
  @Field(() => UserRole)
  role: UserRole

  @Column({default: false})
  @Field({defaultValue: false})
  emailConfirmed: boolean

  @Column({default: false})
  @Field({defaultValue: false})
  activated: boolean

  @Column({default: false})
  @Field({defaultValue: false})
  blocked: boolean

  @CreateDateColumn()
  @Field()
  createdAt: Date

  @UpdateDateColumn()
  @Field()
  updatedAt: Date

  @BeforeInsert()
  async setPassword(password: string) {
    const salt = await bcrypt.genSalt()
    this.password = await bcrypt.hash(password || this.password, salt)
  }

  async comparePassword(password: string) {
    return await bcrypt.compare(password, this.password);
  }
}

registerEnumType(UserRole, {
  name: 'UserRole'
})
