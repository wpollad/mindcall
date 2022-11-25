
import Logo from "../Logo";
import NewArtIcon from "../NewArtIcon";
import UserBadge from "../UserBadge";
import "./style.css";

const Bar = ({
    nickName,
    avatarUrl,
    id,
}) => {
    return(
        <div className="cnBarRoot">
            <div className="cnBarWrapper">
                <Logo />
                <NewArtIcon />
                <UserBadge nickName={nickName} avatarUrl={avatarUrl} id={id}></UserBadge>
            </div>
        </div>
    );
};

export default Bar;