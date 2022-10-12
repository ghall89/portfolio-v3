import Image from 'next/image';

import { Paragraph } from '../sharedComponents';

const Home = () => (
  <>
    <h3 className="text-xl text-center">
      Hey there! I'm Graham, and I'm a Front-End Web Developer from Rhode
      Island.
    </h3>
    <div className="flex">
      <div className="mr-9">
        <Image src="/img/portrait_y8yaqq.jpg" height={400} width={400} />
      </div>
      <div>
        <Paragraph>
          I created my first website when I was in middle school, and even
          though it wasn't that great it kicked off my love for building great
          things. All these years later, that passion still burns strong, and my
          skillset has only grown!
        </Paragraph>
        <Paragraph>
          I spent several years in the design world, but in 2020 I decided to
          make the jump towards taking on web development professionally. In
          January of 2021, I began attending a web development boot camp with UC
          Berkeley, and graduated the following summer.
        </Paragraph>
        <Paragraph>
          When I'm not writing code you can find me playing video games, hiking,
          and trying to improve my cooking skills!
        </Paragraph>
      </div>
    </div>
  </>
);

export default Home;
