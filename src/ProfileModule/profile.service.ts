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
    {
      id: 2,
      firstname: 'Lloydie',
      lastname: 'Duma',
      age: 12,
      avatar: 'http://example.com/avatar1.jpg',
      gender: 'Male',
      created_at: '2024-06-21',
      created_by: 'admin',
    },
    {
      id: 3,
      firstname: 'Johnny',
      lastname: 'Angas',
      age: 21,
      avatar: 'http://example.com/avatar1.jpg',
      gender: 'Male',
      created_at: '2024-06-21',
      created_by: 'admin',
    },
    {
      id: 4,
      firstname: 'Janna',
      lastname: 'McPhee',
      age: 30,
      avatar: 'http://example.com/avatar1.jpg',
      gender: 'Female',
      created_at: '2024-06-21',
      created_by: 'admin',
    },
    {
      id: 5,
      firstname: 'Leo',
      lastname: 'Johnson',
      age: 61,
      avatar: 'http://example.com/avatar1.jpg',
      gender: 'Male',
      created_at: '2024-06-21',
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
