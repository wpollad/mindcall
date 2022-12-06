import Layout from "../../components/Layout";
import PostsFeed from "../../components/PostsFeed";


const MainPage = () => {
    return (
        <Layout nickName="User" id={1}>
            <PostsFeed />
        </Layout>
    );
};

export default MainPage;