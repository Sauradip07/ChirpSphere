import React from 'react';
import Image from 'next/image';
import { BiMessageRounded } from "react-icons/bi";
import { FaRegHeart, FaRetweet } from "react-icons/fa6";
import { AiOutlineHeart } from "react-icons/ai";
import { BiUpload } from "react-icons/bi";


const Feedcard: React.FC = () => {
  return (
    <div className='border-[0.5px] border-l-0 border-r-0 border-b-0 border-gray-600 p-4 hover:bg-slate-900 transition-all cursor-pointer'>
      <div className='grid grid-cols-12 '>
        <div className='col-span-1'>

          <Image 
            src="https://avatars.githubusercontent.com/u/82558066?v=4" 
            alt='User-image' 
            height={75}
            width={75}
            className='rounded-full' 
          />

        </div>
        <div className='ml-4 col-span-11'>
          <h5>Sauradip Ghosh</h5>
          <p>January -&gt; A new dope course launching on Kubesimplify and
            it will be amazing, latest in tech and I have high hopes people 
            will watch, learn a lot and then get to know cool stuff they can build. 
            Stay tuned as the course recording is done 95% and editing is in progress.
          </p>
          <div className='flex justify-between mt-5 text-xl items-center w-[80%]'>
            <div>
              <BiMessageRounded />
            </div>
            <div>
              <FaRetweet />
            </div>
            <div>
              <AiOutlineHeart />
            </div>
            <div>
              <BiUpload />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feedcard;