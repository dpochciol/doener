import React, {useEffect, useState} from 'react'

import pic1 from '../img/pic1.jpg';
import pic2 from '../img/pic2.jpg';
import pic3 from '../img/pic3.jpg';
import pic4 from '../img/pic4.jpg';
import pic5 from '../img/pic5.jpg';

const Diashow = () => {
  const [pic, setPic] = useState([pic1, pic2, pic3, pic4, pic5]);
  const [count, setCount] = useState(0);
  const [current, setCurrent] = useState(pic1);

useEffect(() => {
  const interval = setInterval(() =>{
    setCurrent(pic[count]);
    if(count < pic.length - 1){
      setCount(count + 1);
    }else{
      setCount(0);
    }
  },[3000]);
  return () => clearInterval(interval);
});

  return (
    <div>
      <img style={{width:"100%"}} className="ui medium rounded image" src={current} />
    </div>
  )
}



export default Diashow;
