import React from 'react'

const BlogCard = ({image,title,description}) => {
  return (
    <div className="h-full flex flex-col justify-between p-6 rounded cursor-pointer hover:bg-[#ffffff26] transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 shadow-lg">
        <img className="rounded w-full h-48 object-cover mb-4" src={image} alt={title} />
            <div className="flex-1">
               <p className="text-slate-200 font-bold text-xl mb-2">{title}</p>
                  <p className="text-slate-200 text-sm mb-4">{description}</p>
            </div>
                <button className="rounded-full bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 mt-2 transition duration-200">
                    Read More
                </button>
            </div>

  )
}

export default BlogCard