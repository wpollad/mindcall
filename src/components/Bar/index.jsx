import UserBadge from "../UserBadge";
import "./style.css";

const bar = ({
    nickName,
    avatarUrl,
    id,
}) => {
    return(
        <div className="cnBarRoot">
            <div className="cnBarWrapper">
                <span>mindcall</span>
                <UserBadge nickName={nickName} avatarUrl={avatarUrl} id={id}></UserBadge>
            </div>
        </div>
    );
};

export default bar;