import { Module } from '@nestjs/common';
import { ProfileModule } from './profile/profile.module';
import { ContactModule } from './contact/contact.module';

@Module({
  imports: [ProfileModule, ContactModule],
})
export class AppModule {}
