import React from 'react'
import SubscribedBlogs from '../components/blogs/SubscribedBlogs'
import BlogsContainer from '../components/blogs/BlogsContainer'


const BlogFeed = () => {
  return (
    <div className="flex justify-between text-white">
      <BlogsContainer/>
    </div>
  )
}

export default BlogFeed
