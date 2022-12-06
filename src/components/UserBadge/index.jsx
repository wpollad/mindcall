import "./style.css";

const UserBadge = ({
    nickName,
}) => {
    return (
            <span className="cnUsenBadgeName">{nickName}</span>

    );
};

export default UserBadge;