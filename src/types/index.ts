export interface UserType {
  id: number;
  userName: string;
  email: string;
  name: string;
  isloggedin: boolean;
  password: string;
}

export interface ProductType {
  brand: string;
  category: string;
  id: number;
  image: string;
  name: string;
  price: number;
  tag: string;
}
