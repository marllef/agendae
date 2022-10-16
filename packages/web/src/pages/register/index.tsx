import { Input } from '~/components/Input';
import { IoAt } from 'react-icons/io5';
import { MdFace, MdLock, MdPerson, MdPhoto } from 'react-icons/md';
import { Button, Link } from '~/components/Button';
import { MouseEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from '~/hooks/useAuth';
import { InternalError } from '~/utils/helpers';
import { registerSchema } from './FormValidation';
import { Toastify } from '~/utils/toast';
import { routes } from '~/configs';

export const RegisterPage = () => {
  const [itens, setItens] = useState<any>({});
  const auth = useAuth();
  const navigate = useNavigate();

  const validate = itens.email && itens.password && itens.name;

  const handleSubmit = async (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    try {
      const validated = await registerSchema.validate(itens);
      await auth.register(validated);
      Toastify.success('Registrado com sucesso!');
      navigate(routes.APP_HOME_ROUTE);
    } catch (err) {
      const error = new InternalError(err);
      Toastify.error(error.message);
    }
  };

  return (
    <div className="flex flex-col w-full h-screen justify-center items-center p-4">
      <span className="pb-4 text-center">
        <h1 className="text-3xl font-semibold text-teal-600">Criar Conta</h1>
        <p className="text-xs py-1">
          Já tem uma conta? <Link href="/login">Fazer login</Link>.
        </p>
      </span>
      <div className="flex flex-col space-y-2 ">
        <Input
          leftIcon={MdPerson}
          placeholder="Nome"
          onChange={(evt) => setItens({ ...itens, name: evt.target.value })}
        />
        <Input
          leftIcon={MdFace}
          placeholder="Imagem"
          onChange={(evt) => setItens({ ...itens, image: evt.target.value })}
        />

        <Input
          leftIcon={IoAt}
          placeholder="Email"
          onChange={(evt) => setItens({ ...itens, email: evt.target.value })}
        />
        <Input
          leftIcon={MdLock}
          placeholder="Senha"
          type={'password'}
          onChange={(evt) => setItens({ ...itens, password: evt.target.value })}
        />

        <span />
        <Button onClick={handleSubmit} disabled={!validate}>
          Cadastrar
        </Button>
      </div>
    </div>
  );
};
