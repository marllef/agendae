import { Input } from '~/components/Input';
import { IoAt } from 'react-icons/io5';
import { MdLock } from 'react-icons/md';
import { Button, Link } from '~/components/Button';
import { MouseEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from '~/hooks/useAuth';

export const LoginPage = () => {
  const [itens, setItens] = useState<any>({});
  const auth = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    try {
      await auth.login(itens.email, itens.password);
      setItens({});
      navigate('/app/home');
    } catch (err: any) {
      console.log(err.message);
    }
  };

  return (
    <div className="flex flex-col w-full h-screen justify-center items-center p-4">
      <span className="pb-4 text-center">
        <h1 className="text-3xl font-semibold text-teal-600">Fazer Login</h1>
        <p className="text-xs py-1">
          Ainda não tem uma conta? <Link href="/register">Registre-se</Link>.
        </p>
      </span>
      <div className="flex flex-col space-y-2 ">
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
        <div className="flex justify-end">
          <Link className="w-full text-end px-2" href="/forgot-password">
            Esqueceu a senha?
          </Link>
        </div>
        <span />
        <Button onClick={handleSubmit}>Logar</Button>
      </div>
    </div>
  );
};
