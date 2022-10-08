import { object, string } from 'yup';

export const LoginSchema = object().shape({
  email: string()
    .required('Informe o email.')
    .email('Formato de email inválido.'),
  password: string().required('Informe a senha.'),
});
