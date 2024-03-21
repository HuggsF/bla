// src/entities/Contact.ts

import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity("Contacts")
export class Contact {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column()
  email: string;

  @Column()
  telefone: string;
}
