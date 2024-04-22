import "./stories.scss"
import { useContext } from "react";
import {AuthContext} from "../../context/authContext";

const Stories = () => {

  const {currentUser} = useContext(AuthContext)
  const stories =[
    {
      id: 1,
      name: "Maddeline Forbes",
      img: "https://img.hotimg.com/41bfb1f54b134e0056d4f0ea1c824649.jpeg",
    },
    {
      id: 2,
      name: "James Smith",
      img: "https://img.hotimg.com/b7a424fa178ea03e67e7398d1d36eebb.jpeg",
    },
    {
      id: 3,
      name: "John Sparrow",
      img: "https://img.hotimg.com/167ae4065bd58e4aaf3f9776a1e74db5.jpeg",
    },
    {
      id: 4,
      name: "Kate Brown",
      img: "https://img.hotimg.com/0ad03b9c1720450f11659ec3395afa12.jpeg"
    },
  ];
  return (
    <div className="stories">
       <div className="story">
            <img src={currentUser.profilePic} alt="" />
            <span>{currentUser.name}</span>
            <button>+</button>
        </div>
        {stories.map(story=>(
          <div className="story" key={story.id}>
            <img src={story.img} alt="" />
            <span>{story.name}</span>
          </div>
        ))}
    </div>
  )
}

export default Stories