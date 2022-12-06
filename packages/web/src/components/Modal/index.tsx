import Backdrop from '@mui/material/Backdrop';
import Slide from '@mui/material/Slide';
import Modal from '@mui/material/Modal';
import {
  Children,
  ElementType,
  FormEvent,
  FormEventHandler,
  PropsWithChildren,
  ReactElement,
  ReactNode,
  useEffect,
  useState,
} from 'react';
import { IoClose } from 'react-icons/io5';
import { BRL } from '~/utils/currency';
import { Button } from '../Button';
import { Input } from '../Input';
import { StarRating } from '../StarRating';
import { ServiceServices } from '~/services/ServiceService';
import { useNavigate } from 'react-router-dom';
import { Form } from '../Form';
import { Toastify } from '~/utils/toast';

interface Props {
  children?: ReactNode;
  open: boolean;
  scheduleId: number | null;
  onClose?: (value: boolean) => void;
}

export const ScheduleModal = ({
  open: isOpen,
  scheduleId: schedule,
  onClose,
}: Props) => {
  const services = new ServiceServices();
  const [open, setOpen] = useState(false);
  const [data, setData] = useState<any>();
  const [itens, setItens] = useState<any>({});

  const navigate = useNavigate();

  useEffect(() => {
    setOpen(isOpen);
    const getServiceInfo = async () => {
      if (schedule) {
        const mdata = await services.getOne(schedule);
        setData(mdata);
      }
    };

    getServiceInfo().catch((err) => {
      console.error(err);
    });
  }, [schedule, isOpen]);

  const handleClose = () => {
    setOpen(false);
    if (!onClose) return;
    onClose(false);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (itens.date && itens.time && schedule) {
      console.log(itens);
    } else {
      Toastify.error('Selecione o horário do agendamento');
    }
  };

  return (
    <>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Slide direction="up" in={open}>
          <div className="absolute flex w-full focus:outline-none text-center space-y-2 flex-col justify-end bottom-0 p-2 left-0 right-0 max-h-screen bg-teal-500 rounded-t-lg">
            <IoClose
              className="absolute top-2 right-2 text-lg  text-teal-100"
              onClick={handleClose}
            />
            <Row>
              <h3 className="text-xl w-full font-bold py-2 text-white">
                Detalhes
              </h3>
            </Row>
            <Row>
              <div className="flex p-2 bg-white w-full justify-center items-center rounded-lg">
                <div className="bg-teal-500 min-h-[4rem] min-w-[4rem] h-[1rem] w-[1rem] rounded-lg" />
                <div className="flex flex-col space-y-1 w-full px-2 justify-start items-start">
                  <h5 className="font-bold text-teal-700 text-lg">
                    {data?.business?.name}
                  </h5>
                  <StarRating
                    ratings={data?.business?.ratings || []}
                    size={18}
                  />
                </div>
                <button
                  onClick={() =>
                    navigate(`/app/business/${data?.business?.id}`)
                  }
                  className="px-2 text-sm text-teal-700 uppercase font-semibold"
                >
                  Ver
                </button>
              </div>
            </Row>

            <Row>
              <div className="flex items-center px-4  justify-between w-full bg-white py-2 rounded-lg min-h-[4rem]">
                <div className="flex w-full flex-[2] px-1 text-sm text-left line-clamp-2 font-bold">
                  {data?.name}
                </div>

                <div className=" flex flex-1 w-full text-right justify-end font-bold text-teal-700">
                  {BRL(Number(data?.value || 0))}
                </div>
              </div>
            </Row>

            <Row>
              <div className="flex items-center px-4 text-sm justify-between w-full bg-white py-2 rounded-lg min-h-[4rem]">
                <div className=" flex flex-1 w-full text-center justify-end line-clamp-3 font-bold text-teal-700">
                  {data?.description}
                </div>
              </div>
            </Row>

            <Row>
              <h3 className="text-lg w-full font-bold py-2 text-white">
                Selecionar Horário
              </h3>
            </Row>

            <Form name="schedule-form" onSubmit={handleSubmit}>
              <Row>
                <Item>
                  <label htmlFor="date" className="font-semibold">
                    Data
                  </label>
                  <Input
                    id="date"
                    className="text-center"
                    value={itens?.date || ''}
                    onChange={(event) =>
                      setItens({ ...itens, date: event.target.value })
                    }
                    type={'date'}
                  />
                </Item>

                <Item>
                  <label htmlFor="time" className="font-semibold">
                    Horário
                  </label>
                  <Input
                    id="time"
                    className="text-center"
                    value={itens?.time || ''}
                    onChange={(event) =>
                      setItens({ ...itens, time: event.target.value })
                    }
                    type={'time'}
                  />
                </Item>
              </Row>
              <Row>
                <Button type="submit" className="w-full">
                  Realizar Agendamento
                </Button>
              </Row>
            </Form>
            <div className="flex pb-14" />
          </div>
        </Slide>
      </Modal>
    </>
  );
};

const Item = ({ children, ...rest }: PropsWithChildren) => {
  return (
    <div className="w-full py-2 px-1 space-y-1 rounded-lg text-white" {...rest}>
      {children}
    </div>
  );
};

const Row = ({
  children,
  as: As = 'div',
  ...rest
}: PropsWithChildren<{
  as?: ElementType;
  onSubmit?: (evt: SubmitEvent) => void;
}>) => {
  return (
    <As className="flex w-full flex-row items-center" {...rest}>
      {children}
    </As>
  );
};
