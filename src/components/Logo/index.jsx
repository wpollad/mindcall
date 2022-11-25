import { useNavigate } from "react-router-dom";
import "./style.css"

const Logo = () => {
    const navigate = useNavigate();

    const onLogoClick = () => {
        navigate("/");
    };

    return(
        <div className="cnLogoRoot" onClick={onLogoClick}>
            <div className="cnLogoText">
                mindcall
            </div>
        </div>
    );
};

export default Logo;