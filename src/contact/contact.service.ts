import { Injectable } from '@nestjs/common';

export interface Contact {  
  id: number;
  contact_type: string;
  contact_category: string;
  contact_value: string;
  user_id: number;
  created_at: string;
  created_by: string;
}

@Injectable()
export class ContactService {
  private contacts: Contact[] = [
    {
      id: 1,
      contact_type: 'email',
      contact_category: 'work',
      contact_value: 'john.doe@example.com',
      user_id: 1,
      created_at: '2024-06-18',
      created_by: 'admin',
    },
    
  ];

  findAll(): Contact[] {
    return this.contacts;
  }

  findOne(id: number): Contact {
    return this.contacts.find(contact => contact.id === id);
  }
}
