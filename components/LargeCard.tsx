import Image from 'next/image';
import { CardsDataProps } from '../typings';

interface LargeCardsProps extends CardsDataProps {
  description: string;
  buttonText: string;
}

export default function LargeCard(data: LargeCardsProps) {
  return (
    <>
      <div className='relative h-96 min-w-[300px]'>
        <Image
          src={data.img}
          alt='Image of a small boat with 2 peoples'
          fill
          style={{ objectFit: 'cover' }}
          className='rounded-2xl'
        />
      </div>
      <div className='absolute top-32 left-12'>
        <h3 className='text-4xl mb-3 w-64'>{data.title}</h3>
        <p>{data.description}</p>
        <button className='text-sm text-white bg-gray-900 px-4 py-2 rounded-lg mt-5'>
          {data.buttonText}
        </button>
      </div>
    </>
  );
}
