import React, { useState, useEffect } from "react";

function ListItem(props){
  const [content, setContent] = useState(0);

  useEffect(() => {
    if(props.content !== content) setContent(props.content);
  });

  const update = (e) => {
    setContent(e.target.value);
  }

  return (
    <div>
      <span>{props.id}: </span>
      <input type="text" value={content} onChange={update}/>
      <button onClick={() => props.removeItem(props.id)}>Remove Me</button>
    </div>
  )
}

export default ListItem;