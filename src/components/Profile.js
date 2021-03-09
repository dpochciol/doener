import React, {useState} from 'react';
import Gallery from './Gallery';

const Profile = ({values}) => {
  console.log(values[0].fields.profilePicture.fields.file.url);
  const[currentPic, setCurrentPic] = useState(values[0].fields.profilePicture.fields.file.url)

  return (
    <div>
      <div><img src="{currentPic}"/></div>
      <div><Gallery setCurrentPic={setCurrentPic}/></div>
    </div>
  )
}

export default Profile;
