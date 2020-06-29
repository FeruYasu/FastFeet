export default interface ICreateRecipientDTO {
  name: string;
  street: string;
  number: number;
  addinfos?: string;
  state: string;
  city: string;
  zipcode: string;
}
