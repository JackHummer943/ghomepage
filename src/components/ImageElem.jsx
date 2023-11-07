import React from 'react';
function ImageElem({ img }) {
  return (
    <div className="image_block_wrapper">
      <div className="image_block">
        <img className="image_block__image" src={img} alt="Image" />
      </div>
    </div>
  );
}

export default ImageElem;
