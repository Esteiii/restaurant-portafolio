import { Role } from './role';

export class User {
  Id: number;
  RoleId?: number;
  Name: string;
  LastName: string;
  Email: string;
  Password: string;
  Phone: string;
  Address: string;

  Rol: Role;

  public constructor() {
    this.RoleId = null;
  }
}
