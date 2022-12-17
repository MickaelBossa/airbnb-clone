import { useRouter } from 'next/router';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { format } from 'date-fns';
import { ParsedUrlQuery } from 'querystring';
import { SearchDataProps } from '../typings';
import InfoCard from '../components/InfoCard';

export default function search({
  searchResults,
}: {
  searchResults: SearchDataProps[];
}) {
  console.log(searchResults);
  const router = useRouter();

  const { location, startDate, endDate, nbrOfGuests }: ParsedUrlQuery =
    router.query;

  const formattedStartDate =
    typeof startDate === 'string' &&
    format(new Date(startDate), 'dd MMMM yyyy');

  const formattedEndDate =
    typeof endDate === 'string' && format(new Date(endDate), 'dd MMMM yyyy');

  const rangeDate = `${formattedStartDate} - ${formattedEndDate}`;

  return (
    <div className=''>
      <Header
        placeholder={`${location} | ${rangeDate} | ${nbrOfGuests} guest(s)`}
      />

      <main className='flex'>
        <section className='flex-grow pt-14 px-6'>
          <p className='text-xs'>
            300+ Stays - {rangeDate} - for {nbrOfGuests} guests
          </p>
          <h1 className='text-3xl font-semibold mt-2 mb-6'>
            Stays in {location}
          </h1>

          <div className='hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap'>
            <p className='filterSearchPage'>Cancellation Flexibility</p>
            <p className='filterSearchPage'>Type of Place</p>
            <p className='filterSearchPage'>Price</p>
            <p className='filterSearchPage'>Rooms and Beds</p>
            <p className='filterSearchPage'>More filters</p>
          </div>

          <div className='flex flex-col'>
            {searchResults.map((searchResult) => (
              <InfoCard
                key={searchResults.indexOf(searchResult)}
                data={searchResult}
              />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const searchResults = await fetch('https://www.jsonkeeper.com/b/5NPS').then(
    (res) => res.json(),
  );

  return {
    props: {
      searchResults,
    },
  };
}
