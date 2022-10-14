import Image from 'next/image';

import { P, H3, InlineLink } from '../sharedComponents/Typography';

const Home = () => (
  <div>
    <H3 className="text-center">
      Hey there! I&apos;m Graham, and I&apos;m a Front-End Web Developer from
      Rhode Island.
    </H3>
    <div className="flex flex-col md:flex-row">
      <div className="mx-auto md:mr-9 p-6 min-w-fit">
        <Image
          src="/img/portrait_y8yaqq.jpg"
          alt="portrait of Graham"
          height={240}
          width={240}
        />
      </div>
      <div>
        <P>
          I created my first website when I was in middle school, and even
          though it wasn&apos;t that great it kicked off my love for building
          great things. All these years later, that passion still burns strong,
          and my skillset has only grown!
        </P>
        <P>
          I spent several years in the design world, but in 2020 I decided to
          make the jump towards taking on web development professionally. In
          January of 2021, I began attending a web development boot camp with UC
          Berkeley, and graduated the following summer. Today, I&apos;m a
          full-time developer at{' '}
          <InlineLink href="https://www.nerdpower.energy/">
            Nerd Power
          </InlineLink>
          .
        </P>
        <P>
          When I&apos;m not writing code you can find me playing video games,
          hiking, and trying to improve my cooking and art skills!
        </P>
      </div>
    </div>
  </div>
);

export default Home;
