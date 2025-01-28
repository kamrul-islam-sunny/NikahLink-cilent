import { Card, Rating } from "flowbite-react";
import couple from "../../../assets/img/couple.png";
import female from "../../../assets/img/female.png";
import male from "../../../assets/img/male.png";
import ring from "../../../assets/img/wedding-rings.png";
import { Button } from '@headlessui/react'

const SuccessStory = () => {
  return (
    <div className="bg-gradient-to-b from-rose-50 to-pink-100 py-16">
     <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
  <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">
    Success Stories from Happy Couples
  </h2>
  <p className="text-lg text-gray-600 mb-12">
    Read the beautiful stories of couples who found their life partners
    through our platform.
  </p>

  {/* Success Stories Section */}
  <div className="flex flex-wrap justify-center gap-6 sm:gap-8 lg:gap-8">
    {/* Story 1 */}
    <Card className="max-w-sm w-full sm:w-80">
      <div className="flex w-full h-32 items-center justify-center gap-4 mb-4">
        <div className="bg-pink-500 rounded-full h-24 w-24 flex items-center justify-center ring-offset-4 ring-2 ring-pink-300"> 
          <img src={female} alt="" />
        </div>
        <img className="size-10" src={ring} alt="" />
        <div className="bg-pink-500 rounded-full h-24 w-24 flex items-center justify-center ring-offset-4 ring-2 ring-pink-300">
          <img src={male} alt="" />
        </div>
      </div>
      <div className="ml-4">
        <p className="font-semibold text-xl text-gray-700">Olivia & William</p>
        <p className="text-sm text-gray-500">Married on April 8, 2024</p>
      </div>
      <div className="flex justify-center items-center">
        <Rating className="flex items-center">
          <Rating.Star />
          <Rating.Star />
          <Rating.Star />
          <Rating.Star />
          <Rating.Star filled={false} />
        </Rating>
      </div>

      <p className="font-normal text-gray-700 dark:text-gray-400">
        Here are the biggest enterprise technology acquisitions of 2021 so
        far, in reverse chronological order.
      </p>
      <Button className="inline-block px-4 py-2 bg-gradient-to-r from-pink-500 to-rose-500 text-white font-semibold rounded-full shadow-lg hover:scale-105 transition transform duration-300">
        Read More
      </Button>
    </Card>

    {/* Story 2 */}
    <Card className="max-w-sm w-full sm:w-80">
      <div className="flex w-full h-32 items-center justify-center gap-4 mb-4">
        <div className="bg-pink-500 rounded-full h-24 w-24 flex items-center justify-center ring-offset-4 ring-2 ring-pink-300">
          <img src={female} alt="" />
        </div>
        <img className="size-10" src={ring} alt="" />
        <div className="bg-pink-500 rounded-full h-24 w-24 flex items-center justify-center ring-offset-4 ring-2 ring-pink-300">
          <img src={male} alt="" />
        </div>
      </div>
      <div className="ml-4">
        <p className="font-semibold text-xl text-gray-700">Olivia & William</p>
        <p className="text-sm text-gray-500">Married on April 8, 2024</p>
      </div>
      <div className="flex justify-center items-center">
        <Rating className="flex items-center">
          <Rating.Star />
          <Rating.Star />
          <Rating.Star />
          <Rating.Star />
          <Rating.Star filled={false} />
        </Rating>
      </div>

      <p className="font-normal text-gray-700 dark:text-gray-400">
        Here are the biggest enterprise technology acquisitions of 2021 so
        far, in reverse chronological order.
      </p>
      <Button className="inline-block px-4 py-2 bg-gradient-to-r from-pink-500 to-rose-500 text-white font-semibold rounded-full shadow-lg hover:scale-105 transition transform duration-300">
        Read More
      </Button>
    </Card>

    {/* Story 3 */}
    <Card className="max-w-sm w-full sm:w-80">
      <div className="flex w-full h-32 items-center justify-center gap-4 mb-4">
        <div className="bg-pink-500 rounded-full h-24 w-24 flex items-center justify-center ring-offset-4 ring-2 ring-pink-300">
          <img src={female} alt="" />
        </div>
        <img className="size-10" src={ring} alt="" />
        <div className="bg-pink-500 rounded-full h-24 w-24 flex items-center justify-center ring-offset-4 ring-2 ring-pink-300">
          <img src={male} alt="" />
        </div>
      </div>
      <div className="ml-4">
        <p className="font-semibold text-xl text-gray-700">Olivia & William</p>
        <p className="text-sm text-gray-500">Married on April 8, 2024</p>
      </div>
      <div className="flex justify-center items-center">
        <Rating className="flex items-center">
          <Rating.Star />
          <Rating.Star />
          <Rating.Star />
          <Rating.Star />
          <Rating.Star filled={false} />
        </Rating>
      </div>

      <p className="font-normal text-gray-700 dark:text-gray-400">
        Here are the biggest enterprise technology acquisitions of 2021 so
        far, in reverse chronological order.
      </p>
      <Button className="inline-block px-4 py-2 bg-gradient-to-r from-pink-500 to-rose-500 text-white font-semibold rounded-full shadow-lg hover:scale-105 transition transform duration-300">
        Read More
      </Button>
    </Card>
  </div>
</div>

    </div>
  );
};

export default SuccessStory;
