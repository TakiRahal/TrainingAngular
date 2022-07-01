interface IAddress {
  street?:string;
  city?: string;
  zip?: string;
}

interface ISkills {
  skillName?: string;
  skillType?: string;
}

export interface IUser {
  id?: number;
  fullname?: string;
  email?: string;
  address?: IAddress;
  skills?: ISkills[];
}
