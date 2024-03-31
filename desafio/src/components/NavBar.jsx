
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
      <nav>
        <ul>
          <li><NavLink className={({isActive}) => isActive ? 'activa' : ''} to="/">Home</NavLink></li>
          <li><NavLink className={({isActive}) => isActive ? 'activa' : ''} to="/characters">Pokemones</NavLink></li>
        </ul>
      </nav>
    )
  }
  
  export default Navbar