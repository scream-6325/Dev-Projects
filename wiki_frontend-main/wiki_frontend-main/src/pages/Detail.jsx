import { useContext, useEffect, useState } from "react";
import DataContext from "../context/DataContext";
import { useParams } from "react-router-dom";
export default function Detail() {
  const { data, breedImages, moreImages } = useContext(DataContext);
  const { id } = useParams();

  const [detail, setDetail] = useState(null);

  useEffect(() => {
    if (data && data.length > 0) {
      let item;
      if (id === "123") {
        item = data[0];
        breedImages(data[0].id);
      } else {
        item = data.find((item) => item.id === id);
        breedImages(id);
      }
      setDetail(item);
    }
  }, [id, data, detail]);

  return (
    detail && (
      <>
        <section className='detail mx-[8%] sm:mx-[10%] min-[800px]:mx-[12%] grid grid-cols-1 min-[700px]:grid-cols-3  md:gap-y-12 sm:gap-y-8 gap-y-6 lg:gap-16 min-[700px]:gap-12'>
          <div className='image mx-auto max-w-[23rem] max-h-[23rem] overflow-hidden rounded-3xl'>
            <img
              src={detail?.image?.url || detail?.url}
              className='object-cover rounded-3xl'
              alt={detail?.name}
            />
          </div>
          <div className='col-span-2 space-y-2 sm:space-y-3 md:space-y-5 font-montserrat'>
            <h2 className='text-[#291507] text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold'>
              {detail?.name}
            </h2>
            <p className='text-[#291507] font-montserrat text-xs sm:text-sm lg:text-lg font-medium'>
              {detail?.description}
            </p>
            <div className='details text-xs sm:text-sm md:text-[1rem]  space-y-5'>
              <div className='temper flex space-x-2'>
                <h2 className='font-bold '>Temperament:</h2>
                <p className='font-medium'>{detail?.temperament}</p>
              </div>
              <div className='origin flex space-x-2'>
                <h2 className='font-bold '>Origin:</h2>
                <p className='font-medium'>{detail?.origin}</p>
              </div>
              <div className='life flex space-x-2'>
                <h2 className='font-bold '>Life Span:</h2>
                <p className='font-medium'>{detail?.life_span}</p>
              </div>

              <div className='probabilty-detait space-y-5  w-full xl:w-4/5'>
                <div className='adaptability flex space-x-2 items-center justify-between'>
                  <h2 className='font-bold shrink-0'>Adaptability:</h2>
                  <div className='flex space-x-2 sm:space-x-5 min-[430px]:pr-12 min-[830px]:pr-0'>
                    {Array(5)
                      .fill(5)
                      .map((val, index) => {
                        return (
                          <span
                            key={index}
                            className={`w-4 min-[300px]:w-5 h-1 min-[400px]:w-8 min-[430px]:h-2 sm:w-10 lg:w-14 lg:h-3 ${
                              detail?.adaptability > index
                                ? "bg-[#544439]"
                                : "bg-[#E0E0E0]"
                            } shrink-0 rounded-lg`}></span>
                        );
                      })}
                  </div>
                </div>
                <div className='affection-level flex space-x-2 items-center justify-between'>
                  <h2 className='font-bold shrink-0'>Affection level:</h2>
                  <div className='flex space-x-2 sm:space-x-5 min-[430px]:pr-12 min-[830px]:pr-0'>
                    {Array(5)
                      .fill(5)
                      .map((val, index) => {
                        return (
                          <span
                            key={index}
                            className={`w-4 min-[300px]:w-5 h-1 min-[400px]:w-8 min-[430px]:h-2 sm:w-10 lg:w-14 lg:h-3 ${
                              detail.affection_level > index
                                ? "bg-[#544439]"
                                : "bg-[#E0E0E0]"
                            } shrink-0 rounded-lg`}></span>
                        );
                      })}
                  </div>
                </div>
                <div className='child-friendly flex space-x-2 items-center justify-between'>
                  <h2 className='font-bold shrink-0'>Child Friendly:</h2>
                  <div className='flex space-x-2 sm:space-x-5 min-[430px]:pr-12 min-[830px]:pr-0'>
                    {Array(5)
                      .fill(5)
                      .map((val, index) => {
                        return (
                          <span
                            key={index}
                            className={`w-4 min-[300px]:w-5 h-1 min-[400px]:w-8 min-[430px]:h-2 sm:w-10 lg:w-14 lg:h-3 ${
                              detail.child_friendly > index
                                ? "bg-[#544439]"
                                : "bg-[#E0E0E0]"
                            } shrink-0 rounded-lg`}></span>
                        );
                      })}
                  </div>
                </div>
                <div className='grooming flex space-x-2 items-center justify-between'>
                  <h2 className='font-bold shrink-0'>Grooming:</h2>
                  <div className='flex space-x-2 sm:space-x-5 min-[430px]:pr-12 min-[830px]:pr-0'>
                    {Array(5)
                      .fill(5)
                      .map((val, index) => {
                        return (
                          <span
                            key={index}
                            className={`w-4 min-[300px]:w-5 h-1 min-[400px]:w-8 min-[430px]:h-2 sm:w-10 lg:w-14 lg:h-3 ${
                              detail.grooming > index
                                ? "bg-[#544439]"
                                : "bg-[#E0E0E0]"
                            } shrink-0 rounded-lg`}></span>
                        );
                      })}
                  </div>
                </div>
                <div className='intelligence flex space-x-2 items-center justify-between'>
                  <h2 className='font-bold shrink-0'>Intelligence:</h2>
                  <div className='flex space-x-2 sm:space-x-5 min-[430px]:pr-12 min-[830px]:pr-0'>
                    {Array(5)
                      .fill(5)
                      .map((val, index) => {
                        return (
                          <span
                            key={index}
                            className={`w-4 min-[300px]:w-5 h-1 min-[400px]:w-8 min-[430px]:h-2 sm:w-10 lg:w-14 lg:h-3 ${
                              detail.intelligence > index
                                ? "bg-[#544439]"
                                : "bg-[#E0E0E0]"
                            } shrink-0 rounded-lg`}></span>
                        );
                      })}
                  </div>
                </div>
                <div className='health-issues flex space-x-2 items-center justify-between'>
                  <h2 className='font-bold shrink-0'>Health-issues:</h2>
                  <div className='flex space-x-2 sm:space-x-5 min-[430px]:pr-12 min-[830px]:pr-0'>
                    {Array(5)
                      .fill(5)
                      .map((val, index) => {
                        return (
                          <span
                            key={index}
                            className={`w-4 min-[300px]:w-5 h-1 min-[400px]:w-8 min-[430px]:h-2 sm:w-10 lg:w-14 lg:h-3 ${
                              detail.health_issues > index
                                ? "bg-[#544439]"
                                : "bg-[#E0E0E0]"
                            } shrink-0 rounded-lg`}></span>
                        );
                      })}
                  </div>
                </div>
                <div className='social-needs flex space-x-2 items-center justify-between'>
                  <h2 className='font-bold shrink-0'>Social needs:</h2>
                  <div className='flex space-x-2 sm:space-x-5 min-[430px]:pr-12 min-[830px]:pr-0'>
                    {Array(5)
                      .fill(5)
                      .map((val, index) => {
                        return (
                          <span
                            key={index}
                            className={`w-4 min-[300px]:w-5 h-1 min-[400px]:w-8 min-[430px]:h-2 sm:w-10 lg:w-14 lg:h-3 ${
                              detail.social_needs > index
                                ? "bg-[#544439]"
                                : "bg-[#E0E0E0]"
                            } shrink-0 rounded-lg`}></span>
                        );
                      })}
                  </div>
                </div>
                <div className='stranger-friendly flex space-x-2 items-center justify-between'>
                  <h2 className='font-bold shrink-0'>Stranger-friendly:</h2>
                  <div className='flex space-x-2 sm:space-x-5 min-[430px]:pr-12 min-[830px]:pr-0'>
                    {Array(5)
                      .fill(5)
                      .map((val, index) => {
                        return (
                          <span
                            key={index}
                            className={`w-4 min-[300px]:w-5 h-1 min-[400px]:w-8 min-[430px]:h-2 sm:w-10 lg:w-14 lg:h-3 ${
                              detail.stranger_friendly > index
                                ? "bg-[#544439]"
                                : "bg-[#E0E0E0]"
                            } shrink-0 rounded-lg`}></span>
                        );
                      })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className='gallery mx-[4%] sm:mx-[6%] min-[800px]:mx-[8%] py-20'>
          <h2 className='text-[#291507] mb-5 sm:mb-6 md:mb-10 font-montserrat text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold'>
            Other photos
          </h2>
          <div className='grid grid-cols-2 sm:grid-cols-4 gap-5 rounded-xl overflow-hidden'>
            {moreImages &&
              moreImages.length > 0 &&
              moreImages.map((image) => {
                return (
                  <div key={image.id} className='aspect-square'>
                    <img
                      src={image.url}
                      className='object-cover h-full w-full rounded-xl'
                      alt={detail?.name}
                    />
                  </div>
                );
              })}
          </div>
        </section>
      </>
    )
  );
}
