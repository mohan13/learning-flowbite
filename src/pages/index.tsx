import Homepage from '@/pages/Home/index';
export const getServerSideProps = async () => {
  const res = await fetch('https://api.punkapi.com/v2/beers');
  const Data = await res.json();
  return {
    props: {
      Data: Data,
    },
  };
};
export default function Home({ Data }: { Data: any }) {
  return (
    <div>
      <Homepage List={Data} />
    </div>
  );
}
