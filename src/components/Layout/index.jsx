import Bar from "../Bar";
import "./style.css";

const Layout = ({
    children,
    nickName,
    avatarUrl,
    id,
}) => {
    return(
        <div className="cnLayoutRoot">
            <Bar nickName={nickName} avatarUrl={avatarUrl} id={id}></Bar>
            <div className="cnLayoutBody">
                {children}
            </div>
        </div>
    );
};

export default Layout;