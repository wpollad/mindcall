import UserBadge from "../UserBadge"

import "./style.css"

const PostCard = ({
    nickName,
    avatarUrl,
    userId,
    imgUrl,
    likes,
    isLikedByYou,
}) => {
    return(
        <div className="cnPostCardRoot">
            <div className="cnPostCardHeader">
                <UserBadge nickName={nickName} avatarUrl={avatarUrl} id={userId}></UserBadge>
            </div>
            <div>
                <img src={imgUrl} alt="no img" className="cnPostCardImg" />
            </div>
            {/* <div>
                <i className={`${isLikedByYou ? `fas` : `far`} fa-heart cnPostCardLikeIcon`}></i>
                <div className="cnPostCardLikes">
                    {`likes: ${likes}`}
                </div>
            </div> */}
        </div>

    );
};

export default PostCard;