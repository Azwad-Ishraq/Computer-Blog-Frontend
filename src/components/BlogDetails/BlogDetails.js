import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './BlogDetails.css'
const BlogDetails = () => {
    const {blogId} = useParams()
    const [blog,setBlog] = useState({})
    const {des,heading,img} = blog;
    useEffect(()=>{
        fetch(`https://mighty-river-80909.herokuapp.com/blogs/${blogId}`)
        .then(res => res.json())
        .then(data => setBlog(data))
    },[])
    return (
        <div className='blog-details-container'>
           <div className="blog-details">
               
                <img src={img} alt=""/>
                <h1>{heading}</h1>
                <h3>{des}</h3>
           </div>
        </div>
    );
};

export default BlogDetails;