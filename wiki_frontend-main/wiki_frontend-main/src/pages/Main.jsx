import Header from '../components/Header';
import image2 from '../assets/images/image1.png';
import image1 from '../assets/images/image2.png';
import image3 from '../assets/images/image3.png';
import { Link } from 'react-router-dom';
function Main() {
  return (
    <>
      <Header />
      <section className="flex justify-center items-center font-motserrat">
        <div className="grid py-8 md:grid-cols-2 gap-5 mx-[4%] sm:mx-[6%] min-[800px]:mx-[8%]">
          <div className="py-5 md:pt-28 lg:pt-36 flex justify-center">
            <div className="text lg:w-[26rem] space-y-8 md:space-y-11">
              <h1 className="text-[#291507] relative text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold">
                Why should you have a cat?
                <span className="absolute -top-1 left-0 bg-[#4D270C] w-10 md:w-16 rounded-[5rem] h-[0.2rem]"></span>
              </h1>
              <p className="font-medium text-sm md:text-lg font">
                Having a cat around you can actually trigger the release of
                calming chemicals in your body which lower your stress and
                anxiety leves
              </p>

              <div className="read-more">
                <Link
                  to={'/detail/123'}
                  className="uppercase text-[#29150799] text-sm md:text-lg font-bold"
                >
                  Reads More
                </Link>
              </div>
            </div>
          </div>
          <div className="images grid grid-cols-2 gap-5">
            <div className="grid gap-5">
              <div>
                <img
                  src={image1}
                  className="h-auto max-w-full rounded-lg"
                  alt=""
                />
              </div>
              <div>
                <img
                  src={image2}
                  className="h-auto max-w-full rounded-lg"
                  alt=""
                />
              </div>
            </div>
            <img src={image3} className="h-auto max-w-full rounded-lg" alt="" />
          </div>
        </div>
      </section>
    </>
  );
}

export default Main;
