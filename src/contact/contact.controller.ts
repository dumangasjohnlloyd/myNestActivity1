import { Controller, Get, Param } from '@nestjs/common';
import { ContactService } from './contact.service';
import { Contact } from './contact.service';

@Controller('api/contact')
export class ContactController {
  constructor(private readonly contactService: ContactService) {}

  @Get('all')
  findAll(): Contact[] {
    return this.contactService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Contact {
    return this.contactService.findOne(Number(id));
  }
}
