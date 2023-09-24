
import React from "react";
import { useGetPosts } from "../../../hooks/usePost"
import MultiActionAreaCard from '../Ecosistems/cards/Card'


const Posts = () => {
    
    function render () {
        return (
            <>{
                posts?.map((post) => (
                    <div key={post.id}>
                        <MultiActionAreaCard {...post} />
                    </div>))
            }
            </>
        )
    }


 const {
		posts,
		isLoading,  
		isSuccess,
    } = useGetPosts()
    
   
    if (isLoading) return "loading"
    if (isSuccess) return render()

}

export default Posts;

