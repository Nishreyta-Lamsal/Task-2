import React from 'react'
import { data } from './assets/assets.js'
import BlogCard from './Components/BlogCard.jsx'

const App = () => {
  return (
  <div className="bg-black px-4 py-8">
  <div className="mb-4">
    <h1 className=" flex justify-center mt-5 mb-9 text-slate-200 text-3xl font-bold">Blog Components</h1>
    <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {data.map((item, index) => (
        <div key={index} className="w-full">
          <BlogCard 
            image={item.image} 
            title={item.title} 
            description={item.description} 
          />
        </div>
      ))}
    </div>
  </div>
</div>


  )
}

export default App
