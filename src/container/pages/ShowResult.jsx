import React, { useState, useEffect } from 'react';
export default function ShowResult({ getList }) {
  const [list, setList] = useState([]);

  useEffect(() => {
    setList(getList());
    console.log('component did update');
  }, [getList]);

  return list.map((data) => {
    <div key={data}>{data}</div>;
  });
}
