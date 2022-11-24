import "./style.css"

const Comments = ({
    nickName,
    text,
}) => {
    return(
        <div className="cnCommentsRoot">
            <span className="cnCommentsName">{nickName}: </span>
            <span>{text}</span>
        </div>
    );
};

export default Comments;