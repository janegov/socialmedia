import "./profile.scss";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LanguageIcon from '@mui/icons-material/Language';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import InstagramIcon from '@mui/icons-material/Instagram';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Posts from "../../components/posts/Posts"

const Profile = () => {
  
  return (
    <div class="profile">
      <div className="images">
        <img src="https://img.hotimg.com/a3d76dd21795dca02a32ca56fda4dd5a.jpeg" alt="" className="cover" />
        <img src="https://img.hotimg.com/IMG_31219074a92e8836b785.jpeg" alt="" className="profilePic" />
      </div>
      <div className="profileContainer">
        <div className="userInfo">
          <div className="left">
            <a href="https://www.instagram.com/jane_govenko/">
              <InstagramIcon fontSize="large"/>
            </a>
          </div>
          <div className="center">
            <p>Jane Cooper</p>
            <div className="info">
              <div className="item">
                <LocationOnIcon/>
                <span>Bulgaria</span>
              </div>
              <div className="item">
                <LanguageIcon/>
                <span>travelshare.dev</span>
              </div>
            </div>
            <button>Follow</button>
          </div>
          <div className="right">
            <div className="right">
             <AlternateEmailIcon/>
             <MoreVertIcon/>
            </div>
          </div>
        </div>
      </div>
      <Posts/>
    </div>
  )
}

export default Profile