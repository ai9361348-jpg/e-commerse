import React from 'react'
import { FaChevronRight } from 'react-icons/fa'
import { MdOutlineHealthAndSafety } from 'react-icons/md'
import { Link } from 'react-router-dom'

const Catagory = () => {
    const catagories = [

        {
            title : "Health & Household",
           img : "/Group.png" 
          
           

        },
        {
            title : "Kids Fashion",
            img : "/Kids_Fashion.png"
          
        },
        {
            title : "Toys",
            img : "/Toys.png"
         

        },
        {
            title : "Groceries",
            img : "/Groceries.png"
           
        },
        {
            title : "Home & Lifestyle",
            img : "/Home.png"
           
        },
        {
            title : "Men Fashion",
            img : "/Men_Fashion.png"
          
        },
        {
            title : "Women’s Fashion",
            img : "/Women_Fashion.png"
        
        },
        {
            title : "Stationary & Books",
            img : "/Book.png"
        
        },
        {
            title : "Leather Goods",
            img : "/Leather.png"
        
        },
        {
            title : "Jewelleries ",
            img : "/Jewelleries .png"
            
        },
        {
            title : "Watches ",
            img : "/Watches.png"
        
        },
      
        {
            title : "Men Fashion ",
            img : "/Men Fashion2.png"
        
        },
        {
            title : "Tools & Hardware",
            img : "/Tools.png"
        },
        {
            title : "Pet Supplies",
            img : "/pets.png"
        
        },
        {
            title : "Seasonal",
            img : "/Seasonal.png"
        
        }
    ]
  return (
    <section>
        <div className="container">
           <h2 className='sub_head'>Category</h2> 

          <div className='mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4'>
              {
            catagories.map((item)=>(
                  
             <Link to="/" className='flex shadow p-4 items-center  rounded-xl '>
                <img src={item.img} alt="" />
              <p className='pl-4 pr-4 '>{item.title}</p>
              <FaChevronRight className='ml-auto text-primary/60' />

             </Link>
           
            ))
           }
          </div>
        </div>
    </section>
  )
}

export default Catagory
