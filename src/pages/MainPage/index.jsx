import Layout from "../../components/Layout";
import PostCard from "../../components/PostCard";


const MainPage = () => {
    return (
        <Layout nickName="wpollad" id={1}>
            <div>main page</div>
            <PostCard 
                nickName="ok"
                userId={1}
                imgUrl="https://media-cldnry.s-nbcnews.com/image/upload/rockcms/2022-07/220726-cat-theo-elise-ew-636p-6cd3b0.jpg"
                likes={10}
                isLikedByYou={true}
                comments={[{text: "geniy", nickName: "ok"}, {text: "geniy", nickName: "ok"}, {text: "geniy", nickName: "ok"}, {text: "geniy", nickName: "ok"}]}
            />
        </Layout>
    );
};

export default MainPage;