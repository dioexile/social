import React from 'react'
import { menu } from './dataMenu'
import { ListItemIcon } from '@mui/material';
import {useHistory} from 'react-router-dom'

const Menu:React.FC = () => {

  const history = useHistory()

  return (
    <ul className='sidebar-menu'>
      {menu.map(item => {
        return(
          <li className='sidebar-menu__item' key={item.title} onClick={() => history.push(item.link)}>
            <ListItemIcon className='sidebar-menu__icon'><item.icon/></ListItemIcon>
            <h5>{item.title}</h5>
          </li>
        )
        })}
    </ul>
  )
}

export default Menu