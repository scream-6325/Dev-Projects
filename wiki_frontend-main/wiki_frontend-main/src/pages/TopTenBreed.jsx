import { useContext, useEffect, useState } from "react";
import DataContext from "../context/DataContext";
import { Link } from "react-router-dom";
function TopTenBreed() {
  const { data } = useContext(DataContext);
  const [top10, setTop10] = useState([]);

  useEffect(() => {
    if (data && data.length > 0) setTop10(data.slice(0, 10));
  }, [data]);

  return (
    <section className='mx-[4%] text-[#291507] sm:mx-[6%] min-[800px]:mx-[8%] md:mt-8 mt-3 mb-8 md:mb-10 space-y-10'>
      <h2 className='font-montserrat text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold'>
        Top 10 most searched breeds
      </h2>
      <div className='card-container grid gap-5 sm:gap-8 md:gap-10 lg:gap-12'>
        {top10.map((cat, index) => {
          return (
            <div
              key={index}
              className='card grid grid-cols-1 sm:grid-cols-4 gap-y-5 sm:gap-y-0 sm:gap-x-5 md:gap-10'>
              <div className=''>
                <img
                  src={cat?.image?.url}
                  className='object-cover aspect-square rounded-md sm:rounded-xl md:rounded-3xl shrink-0'
                  alt={cat?.name}
                />
              </div>
              <div className='content col-span-3 relative'>
                <h2 className='font-montserrat text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold'>
                  {index + 1 + " " + cat?.name}
                </h2>
                <p className='my-3 text-sm md:text-lg font-medium line-clamp-3'>
                  {cat?.description}
                </p>
                <button className='text-[#503f3299] duration-200 hover:scale-150 hover:text-[#130c0799] absolute top-0 right-0'>
                  <Link to={`/detail/${cat?.id}`}>&rarr;</Link>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default TopTenBreed;
