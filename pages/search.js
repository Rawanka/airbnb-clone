import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useRouter } from 'next/router';
import { format } from 'date-fns';
import InfoCard from '../components/InfoCard';


export default function Search({ searchResults }) {

  const router = useRouter();
  const { location, startDate, endDate,
    noOfGuests } = router.query;

  const formatteStartDate = format(new Date(startDate), 'dd MMMM yy');
  const formatteEndDate = format(new Date(endDate), 'dd MMMM yy');
  const range = `${formatteStartDate} - ${formatteEndDate}`;
  return (
    <div>
      <Header placeholder={`${location} | ${range} | ${noOfGuests} 
        guests`} />

      <main className='flex'>
        <section className='flex-grow pt-14 px-6'>

          <p className='text-xs'>
            300+ stays {range} for {noOfGuests} Gusets</p>

          <h1
            className='text-3xl font-semibold mt-2 mb-6'>
            Stays in {location}</h1>

          <div className='hidden lg:inline-flex mb5 space-x-3
              text-gray-800 whitespace-nowrap'>
            <p className='button'>cancelltion flexibility</p>
            <p className='button'>cancelltion flexibility</p>
            <p className='button'>cancelltion flexibility</p>
            <p className='button'>cancelltion flexibility</p>
            <p className='button'>cancelltion flexibility</p>
          </div>

          <div className='flex flex-col'>
            {searchResults.map(({
              img, location, title, description,
              star, price, total }) => (
              <InfoCard
                key={img}
                img={img}
                location={location}
                title={title}
                description={description}
                star={star}
                price={price}
                total={total}
              />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}



export async function getServerSideProps() {
  const searchResults = await
    fetch('https://www.jsonkeeper.com/b/5NPS')
      .then(res => res.json());
  return {
    props: {
      searchResults,
    },
  };
}