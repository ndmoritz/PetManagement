export interface Pet {
  id?: string,
  user_id?: string;
  name: string,
  type: string,
  birth_date: string,
  color?: string,
  gender?: string,
  race?: string,
  chipnumber?: string,
  imageUrl?: string;
}