import { Injectable } from '@nestjs/common';

export interface Profile { 
  id: number;
  firstname: string;
  lastname: string;
  age: number;
  avatar: string;
  gender: string;
  created_at: string;
  created_by: string;
}

@Injectable()
export class ProfileService {
  private profiles: Profile[] = [
    {
      id: 1,
      firstname: 'John',
      lastname: 'Doe',
      age: 30,
      avatar: 'http://example.com/avatar1.jpg',
      gender: 'Male',
      created_at: '2024-06-18',
      created_by: 'admin',
    },
    
  ];

  findAll(): Profile[] {
    return this.profiles;
  }

  findOne(id: number): Profile {
    return this.profiles.find(profile => profile.id === id);
  }
}
