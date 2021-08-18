import { useState, useEffect } from 'react';

const FunctionComponent = ({ bg }) => {
  const [likes, setLikes] = useState(0);

  useEffect(() => {
    document.title = `Eu tenho ${likes} likes`;
  }, [likes]);

  const addLike = () => setLikes(likes + 1);

  return (
    <button style={{ backgroundColor: bg }} onClick={addLike}>likes | {likes}</button>
  );
}

export default FunctionComponent;