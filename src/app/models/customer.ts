interface IAddress {
  street: string;
  city: string;
  zipCode: number;
}

interface ISkills {
  nameSkills: string;
  typeSkills: string;
}

export interface Customer {
  fullName: string;
  email: string;
  address: IAddress
  skills: ISkills[]
}
