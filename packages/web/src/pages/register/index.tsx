import { Input } from '~/components/Input';
import { IoAt } from 'react-icons/io5';
import { MdLock, MdPerson } from 'react-icons/md';
import { Button, Link } from '~/components/Button';

export const RegisterPage = () => {
  return (
    <div className="flex flex-col w-full h-screen justify-center items-center p-4">
      <span className="pb-4 text-center">
        <h1 className="text-3xl font-semibold text-teal-600">Criar Conta</h1>
        <p className="text-xs py-1">
          Já tem uma conta? <Link href="/login">Fazer login</Link>.
        </p>
      </span>
      <div className="flex flex-col space-y-2 ">
        <Input icon={MdPerson} placeholder="Nome" />
        <Input icon={IoAt} placeholder="Email" />
        <Input icon={MdLock} placeholder="Senha" />

        <span />
        <Button>Cadastrar</Button>
      </div>
    </div>
  );
};
