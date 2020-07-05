interface Geo {
  lat: string,
  lng: string,
}

interface Address {
  street: string,
  suite: string,
  city: string,
  zipCode: string,
  geo: Geo,
}

interface Company {
  name: string,
  catchPhrase: string,
  bs: string,
}

export interface User {
  id?: number,
  name: string,
  email: string,
  address?: Address,
  phone?: string,
  website?: string,
  company?: Company,
  avatar?: string,
};
