import {
  Controller,
  Get,
  Post,
  All,
  Req,
  Redirect,
  Query,
  Param,
} from '@nestjs/common';
import { Request } from 'express';

@Controller('cats')
export class CatsController {
  @Get(':id')
  findOne(@Param('id') id: string): string {
    return `This action returns a #${id} cat`;
  }

  @Post()
  create(): string {
    return 'This action adds a new cat';
  }

  @All('/test*1')
  @Redirect()
  allMethod(): { url: string } {
    return {
      url: 'https://google.com',
    };
    // return 'This action adds a new cat';
  }

  @Get('/docs')
  @Redirect('https://docs.nestjs.com', 302)
  getDocs(@Query('version') version) {
    if (version && version === '5') {
      return { url: 'https://docs.nestjs.com/v5/' };
    }
  }
}
