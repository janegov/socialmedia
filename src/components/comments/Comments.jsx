import { useContext } from "react";
import "./comments.scss"
import {AuthContext} from "../../context/authContext"


const Comments = () => {

    const {currentUser} = useContext(AuthContext)

    const comments = [
        {
            id: 1,
            desc: "Wow! Can You tell a little bit more what you can do there?",
            name: "John Sparrow",
            useId: 1,
            profilePicture: "https://img.hotimg.com/167ae4065bd58e4aaf3f9776a1e74db5.jpeg",
        },
        {
            id: 2,
            desc: "It is very interesting!",
            name: "Kate Brown",
            useId: 2,
            profilePicture: "https://img.hotimg.com/41bfb1f54b134e0056d4f0ea1c824649.jpeg",
        },
        {
            id: 3,
            desc: "I would love to go there too!",
            name: "Jane Cooper",
            useId: 3,
            profilePicture: "https://img.hotimg.com/IMG_31219074a92e8836b785.jpeg",
        },
    ];

  return (
    <div className="comments">
        <div className="write">
            <img src={currentUser.profilePic} alt="" />
            <input type="text" placeholder="write a comment" />
            <button>Send</button>
        </div>
        {comments.map(comment=>(
            <div className="comment">
                <img src={comment.profilePicture} alt="" />
                <div className="info">
                    <span>{comment.name}</span>
                    <p>{comment.desc}</p>
                </div>
                <span className="date">1 hour ago</span>
            </div>
        ))
    }
    </div>
  )
}

export default Comments