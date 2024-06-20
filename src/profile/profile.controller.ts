import { Controller, Get, Param } from '@nestjs/common';
import { ProfileService } from './profile.service';
import { Profile } from './profile.service';

@Controller('api/user/profiles')
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}

  @Get()
  findAll(): Profile[] {
    return this.profileService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Profile {
    return this.profileService.findOne(Number(id));
  }
}
