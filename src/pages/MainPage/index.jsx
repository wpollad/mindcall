import Layout from "../../components/Layout";
import PostsFeed from "../../components/PostsFeed";


const MainPage = () => {
    return (
        <Layout nickName="User">
            <PostsFeed />
        </Layout>
    );
};

export default MainPage;