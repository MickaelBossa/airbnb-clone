import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import Header from '../components/Header';
import LargeCard from '../components/LargeCard';
import MediumCard from '../components/MediumCard';
import SmallCard from '../components/SmallCard';
import { ExploreDataProps, CardsDataProps } from '../typings';

interface Props {
  exploreData: ExploreDataProps[];
  cardsData: CardsDataProps[];
}

const Home: NextPage<Props> = ({ exploreData, cardsData }) => {
  return (
    <div className=''>
      <Head>
        <title>Airbnb clone</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Header />
      <Banner />

      <main className='max-w-7xl mx-auto px-8 sm:px-16'>
        <section className='pt-6'>
          <h2 className='text-4xl font-semibold pb-5'>Explore Nearby</h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            {exploreData?.map((element) => (
              <SmallCard
                key={exploreData.indexOf(element)}
                img={element.img}
                distance={element.distance}
                location={element.location}
              />
            ))}
          </div>
        </section>

        <section>
          <h2 className='text-4xl font-semibold py-8'>Live Anywhere</h2>
          <div className='flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3'>
            {cardsData?.map((element) => (
              <MediumCard
                key={cardsData.indexOf(element)}
                img={element.img}
                title={element.title}
              />
            ))}
          </div>
        </section>

        <section className='relative py-16 cursor-pointer'>
          <LargeCard
            img='https://links.papareact.com/4cj'
            title='The Greatest Outdoors'
            description='Wishlists curated by Airbnb clone'
            buttonText='Get Inspired'
          />
        </section>

      </main>

      <Footer />
    </div>
  );
};

export default Home;

export async function getStaticProps() {
  const exploreData = await fetch('https://www.jsonkeeper.com/b/4G1G').then(
    (res) => res.json(),
  );

  const cardsData = await fetch('https://www.jsonkeeper.com/b/VHHT').then(
    (res) => res.json(),
  );

  return {
    props: {
      exploreData,
      cardsData,
    },
  };
}
