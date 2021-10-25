import React, { useState } from 'react';
import { useBetween } from 'use-between';

const useShareableState = () => {
  const [username, setUsername] = useState('Abrar');
  const [count, setCount] = useState(0);
  return {
    username,
    setUsername,
    count,
    setCount
  }
}


const HookComponent = () => {
  const { username, setUsername, count } = useBetween(useShareableState);

  const handleChange = (e) => {
    setUsername(e.target.value);
  }

  return (
    <div>
      <input name="userName" value={username} onChange={handleChange}/>
      <p>{username}</p>
      <p>From HookComponent: {count}</p>
    </div>
  )
}


const HookComponent2 = () => {
  const { count, setCount } = useBetween(useShareableState);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}