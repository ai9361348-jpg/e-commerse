import React from 'react'
import SelectInput from '../ui/Selectinput'
import ProductCard from '../ui/ProductCard'
import { Link } from 'react-router'

const Shop = () => {
    const sortoption = [
        {
        value : "Newest Items",
        label : "Newest Items"
       } ,
        {
        value : "Oldest Items",
        label : "Oldest Items"
       } 
]
      const catagories = [
    
            {
                title : "Men’s fashion",
               
    
            },
            {
                title : "Men’s Jacket",
               
            },
            {
                title : "Men's T-Shirts",
                
            },
            {
                title : "Casual Shirts",
               
            },
            {
                title : "Summer T-Shirts",
               
            }
        ] 
  return (
    <main className='py-12 '>
       <div className="container grid grid-cols-12 gap-14">
         <div className='col-span-3 py-6 px-5 bg-white h-fit sticky top-0 left-0'>
            <h3 className='text-lg font-medium text-primary'>Related Categories</h3>
            <div className='space-y-5 mt-4'>
              
                   {
                    catagories.map((item)=>(
                         
                        <Link to="/shop" key={item.title} className='block text-base  text-secondary/90 '>{item.title}</Link>
                   
                    ))
                   }
              
            </div>
            <div className='py-12 my-6 border-y-2 border-y-secondary/10'>
                  <h3 className='text-lg font-medium text-primary'>Filter by Price</h3>
                  <input type="Range" className='w-64 my-7'/>
                  <p><span className='text-primary/50'>Price:</span> ৳1000 - ৳2500 </p>
            </div>
         </div>
        <div className='col-span-9'>

            <div className='flex items-center justify-between'>
                <p className=' font-medium text-lg text-[#424241]/50'>Showing  <span className='text-secondary'>20 </span>of <span className='text-secondary'>160</span> product</p>
                <div className='w-fit flex items-center gap-7' >
                    <p>Sort By:</p>
                    <SelectInput  className='max-2-44 ' options={sortoption}/>

                  
                   
                </div>
            </div>
            <div className='grid grid-cols-3 gap-6'>
   
            
            
            <ProductCard img="/image (4).png" text="Headrest Executive Mesh Office Chair set"price="৳5000">

            </ProductCard>
            <ProductCard  img="/image (5).png " text="Women black dress and red hat collections" price="৳1000.00">

            </ProductCard>
            <ProductCard img="/image (3).png" text="Women fashion dress set"price="৳1000">

            </ProductCard>
           
            <ProductCard img="/image (7).png  " text="Women fashion dress se "  price="৳1000">
              </ProductCard>
            <ProductCard  img="/image (8).png "  text="Headrest Executive Mesh Office Chair set" price="৳5000">

            </ProductCard>
          <ProductCard img="/image (9).png" text="Women black dress and red hat collections"price="৳1000.00">

            </ProductCard>
            <ProductCard img="/image (4).png" text="Headrest Executive Mesh Office Chair set"price="৳5000">

            </ProductCard>
            <ProductCard  img="/image (5).png " text="Women black dress and red hat collections" price="৳1000.00">

            </ProductCard>
            <ProductCard img="/image (3).png" text="Women fashion dress set"price="৳1000">

            </ProductCard>
           
            <ProductCard  img="/image (7).png  " text="Women fashion dress se "  price="৳1000">
              </ProductCard>
            <ProductCard  img="/image (8).png "  text="Headrest Executive Mesh Office Chair set" price="৳5000">

            </ProductCard>
          <ProductCard img="/image (9).png" text="Women black dress and red hat collections"price="৳1000.00">

            </ProductCard>
                
            </div>
        </div>
       </div>
    </main>
  )
}

export default Shop
