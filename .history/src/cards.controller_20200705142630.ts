// add in src/cards.controller.ts
import { Controller, Get, Req } from '@nestjs/common';
import { Request } from 'express';
@Controller('cards')
export class CardsController {
    @Get('/')
    getIndex(@Req() request: Request): string {
        return `my first controller: ${request.method}`;
    }
}
// update app.module.ts
// restart node, default port is 3000
// Visit http://localhost:3000/cards/