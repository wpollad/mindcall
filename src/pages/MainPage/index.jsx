import Layout from "../../components/Layout";
import PostCard from "../../components/PostCard";


const MainPage = () => {
    return (
        <Layout nickName="wpollad" id={1}>
            <PostCard 
                nickName="ok"
                userId={1}
                imgUrl="https://i.postimg.cc/NFgnLQyB/2.jpg"
                likes={10}
                isLikedByYou={true}
            />
            <PostCard 
                nickName="wow"
                userId={2}
                imgUrl="https://i.postimg.cc/WzH7jVg9/3.jpg"
                likes={3}
                isLikedByYou={false}
            />
            <PostCard 
                nickName="hi"
                userId={2}
                imgUrl="https://i.postimg.cc/y8Q7HrbD/1.jpg"
                likes={3}
                isLikedByYou={true}
            />
        </Layout>
    );
};

export default MainPage;