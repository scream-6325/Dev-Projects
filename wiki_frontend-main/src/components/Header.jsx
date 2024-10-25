import heroImageLg from "../assets/images/HeroImagelg.png";
import heroImageMd from "../assets/images/HeroImagemd.png";
import heroImageSm from "../assets/images/HeroImagesm.png";
import image1 from "../assets/images/image2.png";
import caticon from "../assets/icons/caticon.svg";
import crossIcon from "../assets/icons/cross.svg";
import searchIcon from "../assets/icons/searchIcon.svg";
import { useContext, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import DataContext from "../context/DataContext";

function Header() {
  const [dropDown, setDropDown] = useState(false);
  const [heroImages, setHeroImages] = useState([]);
  const [search, setSearch] = useState("");
  const [searchList, setSearchList] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [bgImage, setBgImage] = useState(
    window.innerWidth > 900
      ? heroImageLg
      : window.innerWidth > 664
      ? heroImageMd
      : heroImageSm
  );

  const { data } = useContext(DataContext);

  const ref = useRef(null);

  const resize = window.innerWidth;

  const showDropDown = () => {
    setDropDown(true);
  };

  const changeHeroImage = () => {
    setBgImage(
      resize > 900 ? heroImageLg : resize > 640 ? heroImageMd : heroImageSm
    );
    setIsOpen(resize > 640 && false);
  };

  useEffect(() => {
    if (data) {
      setHeroImages(data.slice(0, 4));
      setSearchList(data);
    }
  }, [data]);

  useEffect(() => {
    if (search) {
      const list = [];
      for (let i = 0; i < data.length; i++) {
        if (data[i].name.toLowerCase().includes(search.toLowerCase())) {
          list.push(data[i]);
        }
      }
      setSearchList(list);
    } else {
      setSearchList(data);
    }
  }, [search, data]);

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setDropDown(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  window.addEventListener("resize", changeHeroImage);

  return (
    <header
      className={`mx-[4%] sm:mx-[6%]  min-[800px]:mx-[8%] bg-[#E3E1DC] rounded-3xl overflow-hidden `}>
      <div
        className='bg-cover bg-center'
        style={{
          backgroundImage: `url(${bgImage})`,
        }}>
        <div className='py-16 left-side md:py-24 lg:py-36 flex flex-col justify-center items-center w-[70%] min-[400px]:w-[60%] text-white z-50'>
          <div>
            <div className='flex space-x-5 title '>
              <h1 className='font-mystery text-white font-normal text-[0.875rem] min-[500px]:text-[1rem] sm:text-[2rem] md:text-[3rem] lg:text-[4rem]'>
                CatWiki
              </h1>
              <img
                src={caticon}
                className=' md:w-16 md:h-12 h-8 lg:w-20 lg:h-20 sm:block hidden'
                alt=''
              />
            </div>
            <h3 className='text-[0.5rem] min-[500px]:text-xs sm:text-sm md:text-lg lg:text-xl xl:text-2xl font-montserrat sm:w-[90%]'>
              Get to know more about your cat breed
            </h3>

            <div
              onClick={showDropDown}
              className={`drop-down relative lg:mt-8 font-montserrat text-[#291507] hidden mt-4 sm:block sm:w-[13rem] md:w-[15rem] lg:w-96 z-50`}>
              <div className='input relative flex bg-white rounded-full'>
                <input
                  type='text'
                  name='search'
                  value={search}
                  ref={ref}
                  onChange={(e) => {
                    setSearch(e.target.value);
                  }}
                  className='focus:outline-none z-50 rounded-l-full px-2 min-[500px]:px-3 py-2 sm:px-3 md:py-3 lg:px-5 w-full'
                  placeholder='Search'
                />
                <img src={searchIcon} className='px-1 md:px-3 ' alt='' />
              </div>
              <div
                className={`list h-[13.73225rem] ${
                  dropDown ? "drop-show " : "drop-hide "
                } mt-3 p-3 rounded-xl bg-white overflow-hidden absolute right-0 left-0`}>
                <ul className=' bg-white  px-2 cutomScrollBar max-h-[12rem] overflow-auto space-y-3 text-xs sm:text-sm md:text-lg'>
                  {searchList &&
                    searchList.length > 0 &&
                    searchList.map((ele, index) => {
                      return (
                        <li
                          key={index}
                          className='hover:bg-[#f3f3f3] text-black mt-2 rounded-lg p-2'>
                          <Link to={`/detail/${ele.id}`}>{ele.name}</Link>
                        </li>
                      );
                    })}
                </ul>
              </div>
            </div>

            {/* modal toggle button */}
            <button
              onClick={toggleModal}
              className='focus:outline-none relative mt-4 text-[#291507] flex justify-between w-[5.7rem] min-[400px]:w-[10rem] z-50 rounded-full px-2 sm:px-3 py-1 sm:hidden bg-white'>
              <p>Search</p>
              <img src={searchIcon} className='px-1 md:px-3 ' alt='' />
            </button>

            {/* Modal : */}
            {isOpen && (
              <div className='fixed inset-0 flex items-center justify-center z-50'>
                <div className='fixed inset-0 bg-gray-700 bg-opacity-50 backdrop-blur-sm'></div>
                <div className='bg-white mx-auto w-72 min-[350px]:w-80 min-[500px]:w-[23rem] max-h-[23rem] overflow-y-auto text-black p-8 rounded-xl shadow-lg relative'>
                  <h2 className='text-xl font-semibold mb-4 flex justify-end'>
                    {" "}
                    <img
                      src={crossIcon}
                      className='px-1 md:px-3'
                      onClick={toggleModal}
                      alt=''
                    />
                  </h2>
                  <div className='input border border-black overflow-hidden px-1 flex rounded-full'>
                    <input
                      type='text'
                      value={search}
                      onChange={(e) => {
                        setSearch(e.target.value);
                      }}
                      className='py-2 px-4 w-full focus:outline-none'
                      placeholder='Search...'
                    />
                    <img src={searchIcon} className='px-1 md:px-3' alt='' />
                  </div>
                  <ul className=' bg-white  px-2 max-h-[13rem] cutomScrollBar overflow-auto space-y-3 mt-5 text-sm md:text-lg'>
                    {searchList &&
                      searchList.length > 0 &&
                      searchList.map((ele, index) => {
                        return (
                          <li
                            key={index}
                            className='hover:bg-[#f3f3f3] text-black mt-2 rounded-lg p-2'>
                            <Link to={`/detail/${ele.id}`}>{ele.name}</Link>
                          </li>
                        );
                      })}
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      {/* Hero Gallery*/}
      <section className='hero-gallery py-8 text-[#291507] font-montserrat bg-[#E3E1DC] px-4 sm:px-6 md:px-8 lg:px-12 pb-8 z-10'>
        <h2 className='text-lg relative font-medium mb-6 '>
          Most Searched Breeds{" "}
          <span className='absolute -bottom-1 left-0 bg-[#4D270C] w-12 h-[0.2rem]'></span>
        </h2>
        <div className='flex justify-between items-baseline lg:items-center'>
          <h1 className='text-lg sm:text-2xl pr-3 md:text-3xl lg:text-4xl xl:text-5xl font-bold max-w-[33rem] mb-6 font-montserrat'>
            {data ? (data.length > 0 ? data.length : 66) : 66}+ Breeds For you
            to discover
          </h1>
          <Link
            to={"/top10"}
            className='text-[#1D070099] flex-shrink-0 text-xs sm:text-sm md:text-lg font-bold'>
            SEE MORE
          </Link>
        </div>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-5 md:gap-8 lg:gap-12'>
          {heroImages.map((ele, index) => {
            return (
              <div key={index} className='overflow-hidden aspect-square w-full'>
                <img
                  src={ele.image ? ele.image.url : image1}
                  className='rounded-xl object-cover h-full w-full'
                  alt={ele.name}
                />
                <h3 className='text-lg font-semibold '>{ele.name}</h3>
              </div>
            );
          })}
        </div>
      </section>
    </header>
  );
}

export default Header;
