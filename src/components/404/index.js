import Image from 'next/image';

const FourOhFour = () => (
  <div className="w-fit mx-auto text-center">
    <Image
      src="/img/fine-alright.gif"
      width={220}
      height={123}
      alt="this is fine"
    />
    <h3 className="text-2xl">404 Not Found</h3>
  </div>
);

export default FourOhFour;
