export interface Contact {
  phone?: Phone;
  email?: string;
  address?: Address;
}

export interface Address {
  street: string;
  street2?: string;
  city: string;
  state: string;
  zip: string | number
}

export interface Phone {
  personal?: number;
  work?: number;
  fax?: number;
}
