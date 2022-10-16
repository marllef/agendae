import { InferType, object, string } from 'yup';
import { messages } from '~/utils/helpers';

export const registerSchema = object().shape({
  name: string().required(messages.required.name),
  image: string().optional(),
  email: string()
    .required(messages.required.email)
    .email(messages.format.email),
  password: string().required(messages.required.password),
});

export type RegisterFormSchema = InferType<typeof registerSchema>;
