import { MdArrowBack, MdArrowBackIos } from 'react-icons/md';
import { useLocation, useNavigate } from 'react-router-dom';
import { IconButton } from './IconButton';

export const BackButton = () => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-center absolute top-2 left-2 z-50 items-center bg-white w-fit h-fit p-1 rounded-full active:bg-slate-200 hover:bg-slate-100 transition text-teal-600">
      <IconButton
        icon={MdArrowBack}
        onClick={() => {
          navigate("/app");
        }}
      />
    </div>
  );
};
