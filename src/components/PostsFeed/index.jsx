import PostCard from "../PostCard";

const PostsFeed = () => {
    const posts = JSON.parse(JSON.stringify(localStorage));
    const arrayPosts = Object.values(posts).reverse();
    console.log(posts);
    return(
        <>
            {arrayPosts.map(item => 
                <PostCard 
                    key={Math.random()}
                    imgUrl={item}
                />
            )}
        </>   
    )
}

export default PostsFeed;