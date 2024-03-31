import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {
  const [count, setCount] = useState(3)
  const navigate = useNavigate()

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(count - 1)
    }, 1000);
    return () => clearInterval(interval)
  }, [count])

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigate('/')
    }, 3000);
    return () => clearTimeout(timeout)
  }, [])

  return (
    <div>
      <h1>La página actual no esta disponible</h1>
      <p>Se te enviará a la página principal en {count}</p>
    </div>
  )
}

export default NotFound