import React, { useState } from 'react'

export const useCurrentNode = () => {
  const {currentNode,setCurrentNode} = useState(null);
  return (
    <div>useCurrentNode</div>
  )
  return {currentNode,setCurrentNode};
}
