import "./posts.scss"
import Post from "../post/Post"
const Posts = () => {

  const posts = [
    {
      id: 1,
      name: "James Smith",
      userId: 1,
      profilePic: "https://img.hotimg.com/b7a424fa178ea03e67e7398d1d36eebb.jpeg",
      desc: "Fount the amazing place in Bulgaria where you can spend your time. Brovets - Bulgaria",
      img: "https://img.hotimg.com/fbbf1ff206a17e59910a916b99b2a75f.jpeg",
    },
    {
      id: 2,
      userId: 2,
      name: "John Sparrow",
      profilePic: "https://img.hotimg.com/167ae4065bd58e4aaf3f9776a1e74db5.jpeg",
      desc: "Greece - Hydra Island",
      img: "https://img.hotimg.com/104bb6f525f6a9e702da2faf68916a5d.jpeg",
    },
    {
      id: 3,
      userId: 3,
      name: "Kate Brown",
      profilePic: "https://img.hotimg.com/0ad03b9c1720450f11659ec3395afa12.jpeg",
      desc: "Today we visited Reichstag Domein Berlin. This is an amazing architectural masterpiece.",
      img: "https://img.hotimg.com/1425bafc1d83b243f4e139ee7eb75f8d.jpeg",
    },
  ];
  return (
    <div className="posts">
        {posts.map(post=>(
          <Post post={post} key={post.id}/>
        ))}
    </div>
  )
}

export default Posts