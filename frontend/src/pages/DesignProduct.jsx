import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/styles";
const DesignProduct = () => {
  return (
    <div>
     
      {/* ====== Blog Section Start */}
      <section className="pt-20 pb-10 lg:pt-[120px] lg:pb-20 text-[var(--text-dark)]">
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap justify-center">
            <div className="w-full px-4">
              <div className="mx-auto mb-[60px] max-w-[510px] text-center lg:mb-20">
                <span className="text-primary mb-2 block text-lg font-semibold">
                  Our Products
                </span>
                <h2 className="text-dark mb-4 text-3xl font-bold sm:text-4xl md:text-[40px]">
                 Design It!
                </h2>
                <p className="text-body-color text-base">
                  Design your own cloths with our 3D based interface that we have build for your comfort.
                </p>
              </div>
            </div>
          </div>
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 md:w-1/2 lg:w-1/3">
              <div className="mx-auto mb-10 max-w-[370px]">
                <div className="mb-8 overflow-hidden rounded">
                  <img src="https://cdn.tailgrids.com/2.0/image/application/images/blogs/blog-01/image-01.jpg" alt="image" className="w-full" />
                </div>
                <div>
                  <span className="bg-primary mb-5 inline-block rounded py-1 px-4 text-center text-xs font-semibold leading-loose text-white">
                    Dec 22, 2023
                  </span>
                  <h3>
                    <a href="https://wedesignetshirts.netlify.app/" className="text-dark hover:text-primary mb-4 inline-block text-xl font-semibold sm:text-2xl lg:text-xl xl:text-2xl">
                      T-Shirts
                    </a>
                  </h3>
                  <p className="text-body-color text-base">
                    Give your T-shirt your own look
                  </p>
                  <Link to="https://wedesignetshirts.netlify.app/" className="inline-block">
            <div className={`${styles.button} mt-5 `}>
                 <span className="text-[#fff] font-[Poppins] text-[18px]">
                    Design
                 </span>
            </div>
        </Link>
                </div>
              </div>
            </div>
            <div className="w-full px-4 md:w-1/2 lg:w-1/3">
              <div className="mx-auto mb-10 max-w-[370px]">
                <div className="mb-8 overflow-hidden rounded">
                  <img src="https://cdn.tailgrids.com/2.0/image/application/images/blogs/blog-01/image-02.jpg" alt="image" className="w-full" />
                </div>
                <div>
                  <span className="bg-primary mb-5 inline-block rounded py-1 px-4 text-center text-xs font-semibold leading-loose text-white">
                    Mar 15, 2023
                  </span>
                  <h3>
                    <a href="javascript:void(0)" className="text-dark hover:text-primary mb-4 inline-block text-xl font-semibold sm:text-2xl lg:text-xl xl:text-2xl">
                      Hoodeie
                    </a>
                  </h3>
                  <p className="text-body-color text-base">
                    Let your cloths speak for you
                  </p>
                  <Link to="/products" className="inline-block">
            <div className={`${styles.button} mt-5 `}>
                 <span className="text-[#fff] font-[Poppins] text-[18px]">
                    Design
                 </span>
            </div>
        </Link>
                </div>
              </div>
            </div>
            <div className="w-full px-4 md:w-1/2 lg:w-1/3">
              <div className="mx-auto mb-10 max-w-[370px]">
                {/* <div className="mb-8 overflow-hidden rounded">
                  <img src="https://cdn.tailgrids.com/2.0/image/application/images/blogs/blog-01/image-03.jpg" alt="image" className="w-full" />
                </div> */}
                <div>
                  {/* <span className="bg-primary mb-5 inline-block rounded py-1 px-4 text-center text-xs font-semibold leading-loose text-white">
                    Jan 05, 2023
                  </span> */}
                  {/* <h3>
                    <a href="javascript:void(0)" className="text-dark hover:text-primary mb-4 inline-block text-xl font-semibold sm:text-2xl lg:text-xl xl:text-2xl">
                      The no-fuss guide to upselling and cross selling
                    </a>
                  </h3> */}
                  {/* <p className="text-body-color text-base">
                    Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry.
                  </p> */}
                  {/* <Link to="/products" className="inline-block">
            <div className={`${styles.button} mt-5 `}>
                 <span className="text-[#fff] font-[Poppins] text-[18px]">
                    Design
                 </span>
            </div>
        </Link> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ====== Blog Section End */}
    
    </div>
  )
}

export default DesignProduct