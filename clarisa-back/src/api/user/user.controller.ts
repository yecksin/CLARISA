import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpException,
  HttpStatus,
  Res,
  Query,
  UseGuards,
  ParseIntPipe,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Response } from 'express';
import { PaginationParams } from 'src/shared/interfaces/pageable';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { User } from './entities/user.entity';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async findAll(){
    return await this.userService.findAll();
  }

  @Get('findByEmail/:email')
  async findByEmail(@Param('email') email: string) {
    return await this.userService.findOneByEmail(email); 
  }

  @Get('findByUsername/:username')
  async findByUsername(@Param('username') username: string) {
    return await this.userService.findOneByUsername(username); 
  }

  @Get('get/:id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return await this.userService.findOne(id);
  }

  @Get('search')
  async getUsersPagination(@Query() { offset, limit }: PaginationParams) {
    return this.userService.getUsersPagination(offset, limit);
  }

  //@UseGuards(JwtAuthGuard)
  @Patch('update')
  async update(@Res() res: Response, @Body() updateUserDtoList: UpdateUserDto[]) {
    try {
      const result : User[] = await this.userService.update(updateUserDtoList);
      return res.status(HttpStatus.OK).json(result);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }
}
