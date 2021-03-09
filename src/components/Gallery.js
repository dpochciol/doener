import React from 'react'

const Gallery = ({setCurrentPic}) => {
  console.log(setCurrentPic);
  const handleClick = src => {
    setCurrentPic(src);
  };

  return (
    <div></div>
  )
}

export default Gallery
