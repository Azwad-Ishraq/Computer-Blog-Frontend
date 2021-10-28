
import React, { useRef, useState } from 'react';
import './AddBlog.css'
const AddUser = () => {

const headingRef = useRef() 
const desRef = useRef()
const imgRef = useRef()
const [sucessMsg,setSuccessMsg] = useState('');

const postBlog = (e) => {

    const heading = headingRef.current.value;
    const des = desRef.current.value;
    const img = imgRef.current.value;
    const newBlog = {heading,des,img}
    console.log(des,img,heading)

    fetch('https://mighty-river-80909.herokuapp.com/blogs',{
        method:'POST',
        headers: {
            'content-type' : 'application/json'
        },
        body: JSON.stringify(newBlog)

    })
    .then(res=> res.json())
    .then(data => {
        if(data.insertedId){
            e.target.reset()
            setSuccessMsg('Blog Posted Added Successfully')
            setTimeout(()=>{
                setSuccessMsg('')
            },2000)

        }
    })
    
    e.preventDefault();

}


    return (
        <div className='add-post-container'>
            <h1>Post Your <span>Blog</span></h1>
            <form onSubmit={postBlog}>
            <input ref={headingRef} className='input'  type="text" placeholder='Blog Heading'/>
            <input ref={imgRef} className='input'  type="text" placeholder='Image Link'/>
            <textarea ref={desRef} className='input' placeholder='Blog Description' name="" id="" cols="30" rows="10"></textarea>
            <h3 style={{color:'green'}}>{sucessMsg}</h3>
        <button type='submit' className='butn'>Post</button>
         
            </form>
        </div>
    );
};

export default AddUser;