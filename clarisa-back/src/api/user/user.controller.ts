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
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Response } from 'express';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Get('findByEmail/:email')
  async findByEmail(@Param('email') email: string) {
    return await this.userService.findOneByEmail(email); 
  }

  @Get('findByUsername/:username')
  async findByUsername(@Param('username') username: string) {
    return await this.userService.findOneByUsername(username); 
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }

  @Patch('update')
  async update(@Res() res: Response, @Body() updateUserDtoList: UpdateUserDto[]) {
    try {
      const result : any = await this.userService.update(updateUserDtoList);
      return res.status(HttpStatus.OK).json(result);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }
}
