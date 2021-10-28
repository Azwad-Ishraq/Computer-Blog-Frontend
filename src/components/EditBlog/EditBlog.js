import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const EditBlog = () => {
    const {blogId} = useParams()
    const [blog,setBlog] = useState({})
    const {des,heading,img} = blog;
    const [sucessMsg,setSuccessMsg] = useState('');

    

    console.log(blogId)
    useEffect(()=>{
        fetch(`https://mighty-river-80909.herokuapp.com/blogs/${blogId}`)
        .then(res => res.json())
        .then(data =>{
            setBlog(data)
            console.log(data)
        })
    },[])
    const handleHeadingChange = e => {
        const updatedHeading = e.target.value;
        const updatedBlog = {des: blog.des,heading:updatedHeading,img:blog.img}
        setBlog(updatedBlog)
    }
    const handleImgChange = e => {
       const updatedImg = e.target.value;
       const updatedBlog = {des: blog.des,heading:blog.heading,img:updatedImg}
       setBlog(updatedBlog)

    }
    const handleDesChange = e => {
        const updatedDes = e.target.value
        const updatedBlog = {des: updatedDes,heading:blog.heading,img:blog.img}
        setBlog(updatedBlog)

    }
    const handleUpdateBlog = (e) => {
        e.preventDefault()
        fetch(`https://mighty-river-80909.herokuapp.com/blogs/${blogId}`,{
            method:'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(blog)
        })
        .then(res => res.json())
        .then(data =>{
           if(data.modifiedCount > 0){
            
            setSuccessMsg('Blog  Updated Successfully')
            setTimeout(()=>{
                setSuccessMsg('')
            },2000)
           }
        })
    }
    return (
        <div className='add-post-container'>
            <h1>{blog.heading}</h1>
            <h1>{blog.img}</h1>
           
        <h1>Edit Your <span>Blog</span></h1>
        <form onSubmit={handleUpdateBlog}>
        <input onChange={handleHeadingChange} value={heading || ''} className='input'  type="text" placeholder='Blog Heading'/>
        <input onChange={handleImgChange} value={img || ''}  className='input'  type="text" placeholder='Image Link'/>
        <textarea onChange={handleDesChange} value={des || ''}  className='input' placeholder='Blog Description' name="" id="" cols="30" rows="10"></textarea>
        <h3 style={{color:'green'}}>{sucessMsg}</h3>
    <button type='submit' className='butn'>Update</button>
     
        </form>
    </div>
    );
};

export default EditBlog;
