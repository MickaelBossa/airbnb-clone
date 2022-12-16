import Image from 'next/image';
import { CardsDataProps } from '../typings';

export default function MediumCard(data: CardsDataProps) {
  return (
    <div className='cursor-pointer hover:scale-105 transform transition duration-300 ease-out'>
      <div className='relative h-80 w-80'>
        <Image
          src={data.img}
          fill
          alt='Image of house'
          className='rounded-xl'
        />
      </div>
      <h3 className='text-2xl mt-3'>{data.title}</h3>
    </div>
  );
}
