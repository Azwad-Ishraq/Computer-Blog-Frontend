
import React from 'react';
import { Link } from 'react-router-dom';

import './Blog.css'
import shareImg from './share.png'
const Blog = (props) => {
    const {heading,des,img,_id} = props.blog;
   

    const handleDelete = (id) => {
        document.getElementById('blog').style.display = 'none';
        const url = `https://mighty-river-80909.herokuapp.com/blogs/${id}`;
        fetch(url,{
            method:'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            
        })
    }
    return (
        <div id='blog' className='blog-item'>

            <img src={img} alt=""/>


            <div className="blog-text">

            <h1>{heading}</h1>

            <h3>{des}</h3>
    
            </div>



            <div className="blog-btns">

                <span className='readmore-share'>
                <Link to={`/blog/${_id}`} className='readMore-btn' >Read More...</Link>
                
                <img className='share-img' src={shareImg} 
                alt=""/>
                <Link className='edit-link' to={`/blogEdit/${_id}`}><i  className="fas fa-edit"></i></Link>
                </span>

                    <span className='delete-span'>
                    <i onClick={()=> handleDelete(_id)} className="fas fa-trash-alt"></i>
                    </span>
                
            </div>
            
        </div>
    );
};

export default Blog;