import { FaArrowRight, FaSearch } from "react-icons/fa";
import photo from "../../assets/blog-images/blog-banner.png"
import curd01 from "../../assets/blog-images/blog-curd/blog-curd01.png"
import curd02 from "../../assets/blog-images/blog-curd/blog-curd02.png"
import gallary01 from "../../assets/blog-images/blog-gallary/blog-galary01.png"
import gallary02 from "../../assets/blog-images/blog-gallary/blog-galary02.png"
import gallary03 from "../../assets/blog-images/blog-gallary/blog-galary03.png"
import gallary04 from "../../assets/blog-images/blog-gallary/blog-galary04.png"
import gallary05 from "../../assets/blog-images/blog-gallary/blog-galary05.png"
import gallary06 from "../../assets/blog-images/blog-gallary/blog-galary06.png"
import { BiMessageSquareDots } from "react-icons/bi";
import { TiSocialFacebook } from "react-icons/ti";
import { RiLinkedinLine } from "react-icons/ri";
import { TbBrandGithub } from "react-icons/tb";
import { Helmet } from "react-helmet-async";

const Blog = () => {
    return (
        <>
            <Helmet>
                <title>FoodTrove - Blog!!</title>
            </Helmet>
            <section className="container mx-auto py-10 md:py-10 lg:py-14">
                <div className="lg:flex lg:-mx-6 lg:gap-6">
                    <div className="lg:w-3/4 lg:px-6">
                        <div>
                            <img className="object-cover object-center w-full h-60 xl:h-[28rem] rounded-xl" src={photo} alt="blog-banner image" />
                            <div className="space-y-2">
                                <h1 className="max-w-lg mt-4 text-2xl font-semibold leading-tight">
                                    Health Benefits of a Row food
                                </h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde mollitia nihil sunt reprehenderit natus, soluta officia iure enim
                                    itaque. Iste qui exercitationem et odit beatae debitis ratione molestiae quis atque.</p>
                            </div>
                        </div>
                        <hr className="border-dashed border-red-300 my-6 lg:my-20" />
                        {/* blog curd */}
                        <div className="flex flex-col lg:flex-row gap-4">
                            <div className="max-w-[500px]">
                                <img src={curd01} alt="" />
                                <p className="max-w-[420px] flex items-center gap-2 py-2"><span className="bg-orange-f5 text-white rounded-full p-1"><FaArrowRight /></span> Lorem ipsum dolor consectetur adipisicing elit.
                                    Molestias, dolorum!</p>
                            </div>
                            <div className="max-w-[500px]">
                                <img src={curd02} alt="" />
                                <p className="max-w-[420px] flex items-center gap-2 py-2"><span className="bg-orange-f5 text-white rounded-full p-1"><FaArrowRight /></span> Lorem ipsum dolor consectetur adipisicing elit.
                                    Molestias, dolorum!</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 lg:w-1/4 lg:mt-0 lg:px-6 border rounded-md p-4">
                        {/* ****** */}
                        <div className="hidden lg:inline-block w-full relative overflow-hidden">
                            {/* search form */}
                            <input
                                type="text"
                                placeholder="Search for items..."
                                className="w-full rounded-md border border-gray-300 outline-none px-4 py-3 bg-white placeholder:text-sm text-gray-7a text-sm"
                            />

                            {/* search button */}
                            <button
                                type="submit"
                                className="bg-orange-f5 text-white rounded-tr-md rounded-br-md p-4 absolute top-1/2 right-0 -translate-y-1/2 "
                            >
                                <FaSearch></FaSearch>
                            </button>
                            {/* category part */}
                        </div>
                        <h3 className="font-semibold py-2">Category</h3>
                        <div className="space-y-2">
                            <p className="flex justify-between items-center w-full rounded-md border border-gray-300 outline-none px-4 py-3 bg-white text-gray-7a text-sm">Milks & Dairies <span>( 56 )</span></p>
                            <p className="flex justify-between items-center w-full rounded-md border border-gray-300 outline-none px-4 py-3 bg-white text-gray-7a text-sm">Sea Food <span>( 34 )</span></p>
                            <p className="flex justify-between items-center w-full rounded-md border border-gray-300 outline-none px-4 py-3 bg-white text-gray-7a text-sm">Fresh Fruit <span>( 53 )</span></p>
                            <p className="flex justify-between items-center w-full rounded-md border border-gray-300 outline-none px-4 py-3 bg-white text-gray-7a text-sm">Pet Food <span>( 21 )</span></p>
                            <p className="flex justify-between items-center w-full rounded-md border border-gray-300 outline-none px-4 py-3 bg-white text-gray-7a text-sm">Meat Food <span>( 45 )</span></p>
                        </div>
                        {/* Recent Post part */}
                        <div className="">
                            <h3 className="font-semibold py-3">Recent Post</h3>
                            {/* dynamic [image,date,title,description] */}
                            <img className="rounded-xl" src={photo} alt="resent post image" />
                            <div className="text-center space-y-2">
                                <small className="text-orange-f5">Sep 09, 2023</small>
                                <h3 className="font-semibold">10 Tasty Organic Fruit choose</h3>
                                <p className="">Lorem ipsum dolor consectetur
                                    adipisicing elit.</p>
                            </div>
                        </div>
                        {/* gallery part */}
                        <div className="w-full rounded-md ">
                            <h3 className="font-semibold py-4">Latest Gallery</h3>
                            <div className="grid grid-cols-3 gap-2 lg:gap-3">
                                <img className="w-full" src={gallary01} alt="" />
                                <img className="w-full" src={gallary02} alt="" />
                                <img className="w-full" src={gallary03} alt="" />
                                <img className="w-full" src={gallary04} alt="" />
                                <img className="w-full" src={gallary05} alt="" />
                                <img className="w-full" src={gallary06} alt="" />
                            </div>
                            {/* popular part */}
                            <div>
                                <h3 className="font-semibold py-4">Popular Tags</h3>
                                <div className="grid lg:grid-cols-2 gap-2">
                                    <p className="rounded-md border border-gray-300 outline-none px-4 py-3 bg-white text-gray-7a text-sm">Vegetables
                                    </p>
                                    <p className="rounded-md border border-gray-300 outline-none px-4 py-3 bg-white text-gray-7a text-sm">juice
                                    </p>
                                    <p className="rounded-md border border-gray-300 outline-none px-4 py-3 bg-white text-gray-7a text-sm">Meat Food
                                    </p>
                                    <p className="rounded-md border border-gray-300 outline-none px-4 py-3 bg-white text-gray-7a text-sm">Cabbage
                                    </p>
                                    <p className="rounded-md border border-gray-300 outline-none px-4 py-3 bg-white text-gray-7a text-sm">Organic food
                                    </p>
                                    <p className="rounded-md border border-gray-300 outline-none px-4 py-3 bg-white text-gray-7a text-sm">juice
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>



                {/* **** */}
                <div className="lg:w-3/4 lg:px-6 border rounded-md p-6 space-y-2">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat repellat earum architecto odit soluta quas odio
                        distinctio quae numquam? Quaerat nulla blanditiis possimus quae. Iusto doloribus, est aliquam delectus pariatur
                        voluptatem cum iste exercitationem rem.</p>
                    <h2 className="text-orange-f5 text-xl font-semibold flex justify-between">John martin <BiMessageSquareDots /></h2>
                </div>

                <div className="lg:w-3/4 lg:px-6 px-6 py-4">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores officia magni explicabo fuga molestiae architecto ipsa
                        excepturi laudantium molestias, assumenda vel fugiat hic exercitationem. Necessitatibus itaque et id! Ratione accusantium
                        voluptatum optio rerum facilis expedita.</p>
                </div>

                <div className="lg:w-3/4 lg:px-6 flex flex-col md:flex-row justify-center items-center md:justify-between gap-2 p-6 border rounded-md">
                    <div className="flex justify-center items-center gap-2">
                        <p className="rounded-md border border-gray-300 outline-none px-4 py-3 bg-white text-gray-7a text-sm">Cabbage
                        </p>
                        <p className="rounded-md border border-gray-300 outline-none px-4 py-3 bg-white text-gray-7a text-sm">Appetizer
                        </p>
                        <p className="rounded-md border border-gray-300 outline-none px-4 py-3 bg-white text-gray-7a text-sm">MeatFood
                        </p>
                    </div>
                    <div className="flex gap-2">
                        <p className="cursor-pointer hover:bg-orange-f5 hover:text-white rounded-md border border-gray-300 outline-none px-4 py-3 bg-white text-gray-7a text-sm"><a href="https://www.facebook.com"><TiSocialFacebook /></a>
                        </p>
                        <p className="cursor-pointer hover:bg-orange-f5 hover:text-white rounded-md border border-gray-300 outline-none px-4 py-3 bg-white text-gray-7a text-sm"><a href="https://www.linkedin.com/in/almas-hossain/"><RiLinkedinLine /></a>
                        </p>
                        <p className="cursor-pointer hover:bg-orange-f5 hover:text-white rounded-md border border-gray-300 outline-none px-4 py-3 bg-white text-gray-7a text-sm"><a href="https://github.com/AlmasWD09"><TbBrandGithub /></a>
                        </p>
                    </div>
                </div>
                
                {/* pagination */}
                <div className="flex justify-center lg:py-8">
                    <a href="#" className="px-4 py-2 mx-1 text-gray-500 capitalize bg-white rounded-md cursor-not-allowed">
                        <div className="flex items-center -mx-1">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-1 rtl:-scale-x-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                            </svg>

                            <span className="mx-1">
                                previous
                            </span>
                        </div>
                    </a>

                    <a href="#" className="hidden px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-white rounded-md sm:inline dark:bg-gray-800 dark:text-gray-200 hover:bg-orange-f5 hover:text-white">
                        1
                    </a>

                    <a href="#" className="hidden px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-white rounded-md sm:inline dark:bg-gray-800 dark:text-gray-200 hover:bg-orange-f5 hover:text-white">
                        2
                    </a>

                    <a href="#" className="hidden px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-white rounded-md sm:inline dark:bg-gray-800 dark:text-gray-200 hover:bg-orange-f5 hover:text-white">
                        3
                    </a>

                    <a href="#" className="hidden px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-white rounded-md sm:inline dark:bg-gray-800 dark:text-gray-200 hover:bg-orange-f5 hover:text-white">
                        4
                    </a>

                    <a href="#" className="hidden px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-white rounded-md sm:inline dark:bg-gray-800 dark:text-gray-200 hover:bg-orange-f5 hover:text-white">
                        5
                    </a>

                    <a href="#" className="px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-white rounded-md dark:bg-gray-800 dark:text-gray-200 hover:bg-orange-f5 hover:text-white">
                        <div className="flex items-center -mx-1">
                            <span className="mx-1">
                                Next
                            </span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-1 rtl:-scale-x-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </div>
                    </a>
                </div>
            </section>
        </>
    );
};

export default Blog;