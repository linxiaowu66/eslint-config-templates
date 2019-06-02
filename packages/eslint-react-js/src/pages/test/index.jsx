import React, { useState, useEffect } from 'react'

function Test() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    setInterval(() => setCount(count + 1), 1000)
  }, [])

  return <div>count is {count}</div>
}

export default Test
