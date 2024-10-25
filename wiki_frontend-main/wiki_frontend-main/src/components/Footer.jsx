import caticon from '../assets/icons/caticon.svg';
export default function Footer() {
  return (
    <footer className="mx-[4%] sm:mx-[6%] min-[800px]:mx-[8%] py-5 rounded-t-3xl bg-black flex flex-col sm:flex-row sm:justify-between px-8 items-center space-y-1">
      <div className="logo flex items-center space-x-1 sm:space-x-3 md:space-x-5">
        <p className=" text-white text-[0.875rem] sm:text-lg md:text-2xl font-mystery font-normal">
          CatWiki
        </p>
        <img
          src={caticon}
          className="w-10 h-[1rem] sm:h-5  md:h-8 -mt-1"
          alt=""
        />
      </div>
      <div className="content space-x-2 text-center flex text-white text-xs sm:text-sm md:text-[1rem] lg:text-lg font-normal font-montserrat">
        <p>
          <span className="mr-2">©</span>
          created by{' '}
          <a
            href="https://github.com/deep0133"
            rel="noreferrer"
            target="_blank"
            className="font-bold underline"
          >
            Shivam Sharma
          </a>{' '}
          - devChallenge.io 2021
        </p>
      </div>
    </footer>
  );
}
