export interface Adresse
{
  id: number,
  number: number,
  type: Type,
  name: string,
  postalCode: number,
  city: string,
  coordX: string,
  coordY: string
}

export interface Type
{
  id: number,
  name: string
}
