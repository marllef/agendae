import { Input } from '~/components/Input';
import { IoAt } from 'react-icons/io5';
import { MdLock } from 'react-icons/md';
import { Button, Link } from '~/components/Button';
import { MouseEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from '~/hooks/useAuth';
import { routes } from '~/configs';
import { Toastify } from '~/utils/toast';
import { InternalError } from '~/utils/helpers';
import { LoginFormSchema, loginSchema as schema } from './FormValidation';

export const LoginPage = () => {
  const [itens, setItens] = useState<LoginFormSchema | {}>({});
  const auth = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    try {
      const { email, password } = await schema.validate(itens);

      await auth.login(email, password);

      setItens({});
      navigate(routes.APP_HOME_ROUTE);
    } catch (err: any) {
      const error = new InternalError(err);
      Toastify.error(error.message);
    }
  };

  return (
    <div className="flex flex-col w-full h-screen justify-center items-center p-4">
      <span className="pb-4 text-center">
        <h1 className="text-3xl font-semibold text-teal-600">Fazer Login</h1>
        <p className="text-xs py-1">
          Ainda não tem uma conta?{' '}
          <Link href={routes.APP_REGISTER_ROUTE}>Registre-se</Link>.
        </p>
      </span>
      <form className="flex flex-col space-y-2 ">
        <Input
          leftIcon={IoAt}
          required
          placeholder="Email"
          onChange={(evt) => setItens({ ...itens, email: evt.target.value })}
        />
        <Input
          leftIcon={MdLock}
          required
          placeholder="Senha"
          type={'password'}
          onChange={(evt) => setItens({ ...itens, password: evt.target.value })}
        />
        <div className="flex justify-end">
          <Link
            className="w-full text-end px-2"
            href={routes.APP_FORGOT_PWD_ROUTE}
          >
            Esqueceu a senha?
          </Link>
        </div>
        <span />
        <Button onClick={handleSubmit}>Logar</Button>
      </form>
    </div>
  );
};
