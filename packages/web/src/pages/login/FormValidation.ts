import { InferType, object, string } from 'yup';
import { messages } from '~/utils/helpers';

export const loginSchema = object().shape({
  email: string()
    .required(messages.required.email)
    .email(messages.format.email),
  password: string().required(messages.required.password),
});

export type LoginFormSchema = InferType<typeof loginSchema>;
