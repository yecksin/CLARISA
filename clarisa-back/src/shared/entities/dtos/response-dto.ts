import { HttpStatus } from '@nestjs/common';

export class ResponseDto<T> {
  private readonly response: T;
  private readonly message: string;
  private readonly status: HttpStatus;

  private constructor(response: T, message: string, status: HttpStatus) {
    this.response = response;
    this.message = message;
    this.status = status;
  }

  static createCreatedResponse<T>(
    response: T,
    serviceConstructor: Function,
  ): ResponseDto<T> {
    return ResponseDto.createResponse(
      response,
      `${serviceConstructor.name.replace(
        'Service',
        '',
      )} has been created successfully`,
      HttpStatus.CREATED,
    );
  }

  static createBadResponse<T>(
    response: T,
    serviceConstructor: Function,
  ): ResponseDto<T> {
    return ResponseDto.createResponse(
      response,
      `${serviceConstructor.name.replace(
        'Service',
        '',
      )} could not be processed. Please check your input`,
      HttpStatus.BAD_REQUEST,
    );
  }

  static createResponse<T>(
    response: T,
    message: string,
    status: HttpStatus,
  ): ResponseDto<T> {
    return new ResponseDto(response, message, status);
  }
}
