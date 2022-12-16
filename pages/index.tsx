import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Banner from '../components/Banner';
import Header from '../components/Header';
import SmallCard from '../components/SmallCard';
import { ExploreDataProps } from '../typings';

interface ExploreDataArrayProps extends ExploreDataProps {
  exploreData: ExploreDataProps[];
}

const Home: NextPage<ExploreDataArrayProps> = ({ exploreData }) => {
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
      </main>
    </div>
  );
};

export default Home;

export async function getStaticProps() {
  const exploreData = await fetch('https://www.jsonkeeper.com/b/4G1G').then(
    (res) => res.json(),
  );

  return {
    props: {
      exploreData,
    },
  };
}
