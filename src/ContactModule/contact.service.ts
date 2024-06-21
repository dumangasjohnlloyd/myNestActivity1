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
    {
      id: 2,
      contact_type: 'mobile',
      contact_category: 'personal',
      contact_value: 'lloydie.duma@example.com',
      user_id: 2,
      created_at: '2024-06-19',
      created_by: 'admin',
    },
    {
      id: 3,
      contact_type: 'phone',
      contact_category: 'work',
      contact_value: 'johny.angas@example.com',
      user_id: 3,
      created_at: '2024-06-20',
      created_by: 'admin',
    },
    {
      id: 4,
      contact_type: 'email',
      contact_category: 'personal',
      contact_value: 'janna.mcphee@example.com',
      user_id: 4,
      created_at: '2024-06-21',
      created_by: 'admin',
    },
    {
      id: 5,
      contact_type: 'mobile',
      contact_category: 'work',
      contact_value: 'leo.johnson@example.com',
      user_id: 5,
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
