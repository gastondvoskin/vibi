import React from 'react';
import { FeaturedText } from '../vende/commons/LandingTexts';
import CheckBox from './commons/CheckBox';
import ButtonVariants from '../../commons/ButtonVariants';
import { RiWhatsappFill } from 'react-icons/ri';

interface Props {
  content: string;
  onClose: () => void;
}

export const ModalContent: React.FC<Props> = ({ onClose, content }) => {
  // console.log("Lleguie a modalcontent");

  return (
    <div className="w-fit h-[485px] p-10 border-2">
      <div className=" bg-white z-50 border-2">
        <section className='pb-10 w-[472px]'>
          <FeaturedText text={content} color='font-bold text-2xl text-vibiDarkBlue pb-2' />
          <FeaturedText text='Vende tu propiedad y destaca con los mejores ángulos y las fotografías adecuadas para demostrar su verdadero potencial, permítanos hacer que tu hogar luzca genial.' color='text-sm font-normal text-vibiDarkBlue' />
        </section>
        <section className='flex'>
          <FeaturedText text='También te podría interesar:' color='text-base font-semibold text-vibiDarkBlue ' />
          <section className='flex flex-wrap w-10/12 justify-around'>
            <div className='py-3 w-44'>
              <CheckBox
                checked={false}
                label="Tour virtual 360°"
                onChange={() => { }}
              /></div>
            <div className='py-3 w-44'>
              <CheckBox
                checked={false}
                label="Cartel exterior"
                onChange={() => { }}
              /></div>
            <div className='py-3 w-44'>
              <CheckBox
                checked={false}
                label="Video profesional"
                onChange={() => { }}
              /></div>
            <div className='py-3 w-44'>
              <CheckBox
                checked={false}
                label="Asesoría legal"
                onChange={() => { }}
              /></div>
          </section>
        </section>
        <section className='flex space-x-4 '>
          <ButtonVariants text='Quiero más información' bgColor='bg-primary' border={false} txColor='text-white' />
          <ButtonVariants leftIcon={<RiWhatsappFill />} text='Contacta con un agente' bgColor='bg-vibiGreen' border={false} txColor='text-white' />
        </section>
        <button onClick={onClose}>Cerrar</button>
      </div>
    </div>
  );
};


