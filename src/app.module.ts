import { Module } from '@nestjs/common';
import { ProfileModule } from './ProfileModule/profile.module';
import { ContactModule } from './ContactModule/contact.module';

@Module({
  imports: [ProfileModule, ContactModule],
})
export class AppModule {}
