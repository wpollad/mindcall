import UserBadge from "../UserBadge"
import Comments from "../Comments"

import "./style.css"

const PostCard = ({
    nickName,
    avatarUrl,
    userId,
    imgUrl,
    likes,
    isLikedByYou,
    comments
}) => {
    const renderComments = () => {
        if (comments.lenght > 2){
            const commentsForRender = {...comments};
            commentsForRender.splice(comments.lenght - 2, 2);
            return (
                <>
                    <span>{`see ${comments.lenght - commentsForRender.lenght} comments`}</span>
                    {commentsForRender.map((comment) => <Comments {...comment}/>)};
                </>
            );
        }

        return comments.map((comment) => <Comments {...comment}/>);

    };
    return(
        <div className="cnPostCardRoot">
            <div className="cnPostCardHeader">
                <UserBadge nickName={nickName} avatarUrl={avatarUrl} id={userId}></UserBadge>
            </div>
            <div>
                <img src={imgUrl} alt="no img" className="cnPostCardImg" />
            </div>
            <div className="cnPostCardButtons">
                <i className={`${isLikedByYou ? `fas` : `far`} fa-heart cnPostCardLikeIcon`}></i>
                <i className="far fa-comment cnPostCardCommentIcon" />
            </div>
            <div className="cnPostCardLikes">
                {`likes: ${likes}`}
            </div>
            <div className="cnPostCardComments">
                {renderComments()}
                {`${comments.lenght}`}
            </div>
            <textarea className="cnPostCardTextArea" />
        </div>

    );
};

export default PostCard;