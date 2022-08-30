import { object, string } from "yup";

const personSchema = object({
  firstname: string().required(),
  surname: string().required(),
  gender: string().required(),
});

export { personSchema };
