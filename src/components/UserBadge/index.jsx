import { useNavigate } from "react-router-dom";
import "./style.css";

const UserBadge = ({
    nickName,
    avatarUrl,
    id,
}) => {
    const navigate = useNavigate();

    const onUserBadgeClick = () => {
        navigate(`/${id}/`);
    };
    return (
        <div className="cnUserBadgeRoot" onClick={onUserBadgeClick}>
            {/* {avatarUrl ? <img src={avatarUrl} alt="logo" className="cnUserBadgeAvatar"  /> : <div className="cnUserBadgePlaceholder" />} */}
            <span className="cnUsenBadgeName">{nickName}</span>
        </div>
    );
};

export default UserBadge;