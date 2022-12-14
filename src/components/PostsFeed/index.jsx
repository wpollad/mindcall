import PostCard from "../PostCard";

const PostsFeed = () => {
    const posts = JSON.parse(JSON.stringify(localStorage));
    const arrayPosts = Object.values(posts).reverse();
    return(
        <>
            {arrayPosts.map(item => 
                <PostCard 
                    key={Math.random()}
                    nickName={"User"}
                    imgUrl={item}
                />
            )}
        </>   
    )
}

export default PostsFeed;