import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';
import './Blogs.css'
const Posts = () => {
    const [blogs,setBlogs] = useState([])
    const [pageCount,setPageCount] = useState(0)
    const [page,setPage] = useState(0)
    const size = 2;
    useEffect(()=>{
        fetch(`https://mighty-river-80909.herokuapp.com/blogs?page=${page}&&size=${size}`)
        .then(res=> res.json())
        .then(data => {
            setBlogs(data.blogs)
            const count = data.count
            console.log(count)
            const pageNumber = Math.ceil(count/size);
            setPageCount(pageNumber)
        })
    },[page])
    return (
        <div className='blogs'>
            <h1 className='blogs-heading'>Computer  
            <span> Blogs</span></h1>
            {
                blogs.map(blog=> <Blog blog={blog}></Blog>)
            }
            <div className="pagination-container">
               <div className="pagination-btns">
               {
                    [...Array(pageCount).keys()].map(number => <button
                    className={number === page ? 'pag-btn-selected' : 'pag-btn'}
                            onClick={()=> setPage(number)}
                         >{number}
                         </button>)
                }
               </div>
            </div>
            
        </div>
    );
};

export default Posts;