import Image from 'next/image';
import { ExploreDataProps } from '../typings';

export default function SmallCard(data: ExploreDataProps) {
  return (
    <div className='flex items-center m-2 mt-5 space-x-4 rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105 transition transform duration-200 ease-out'>
      <div className='relative h-16 w-16'>
        <Image src={data.img} fill alt='Image of city' className='rounded-lg' />
      </div>
      <div>
        <h2>{data.location}</h2>
        <h3 className='text-gray-500'>{data.distance}</h3>
      </div>
    </div>
  );
}
