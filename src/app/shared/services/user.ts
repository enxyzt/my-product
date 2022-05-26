export interface User {
  uid: string;
  email: string;
  displayName: string;
  photoURL: string;
  emailVerified: boolean;
  // role: Role;
}


export interface Role {
  admin?: boolean;
  mod?: boolean;
  user?: boolean;
}
