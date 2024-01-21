import { faBookmark } from '@fortawesome/free-regular-svg-icons'
import { faBookBookmark, faBox, faCartShopping, faChartColumn, faFilePen, faGear, faHomeAlt, faUserGroup } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import styles from './Sidebar.module.css'

const SidebarWrapper = styled.div`
  background-color: white;  
  font-size: 1.3rem;
  font-weight: 300;
  min-width: 270px;
  max-width: 300px;
  min-height: calc(100vh - 80px);
`

const Menu = styled.ul`
  padding-left: 0;
  list-style: none;
  padding: 15px;
`

const MenuItem = styled.li`
  margin-bottom: 10px;
`

const MenuItemText = styled.span`
  margin-left: 4px;
`

export const Sidebar = () => {
  return (
    <SidebarWrapper className="d-none d-lg-block shadow-sm">
      <Menu>
        <MenuItem>
          <Link to={"/"} className={styles.link}>
            <FontAwesomeIcon icon={faHomeAlt} className={styles.icon} />
            <MenuItemText>Inicio</MenuItemText>
          </Link>
        </MenuItem>
        <MenuItem>
          <Link to={"/inventarios/productos"} className={styles.link}>
            <FontAwesomeIcon icon={faBox} className={styles.icon} />
            <MenuItemText>Productos</MenuItemText>
          </Link>
        </MenuItem>
        <MenuItem>
          <Link to={"/"} className={styles.link}>
            <FontAwesomeIcon icon={faUserGroup} className={styles.icon} />
            <MenuItemText>Clientes</MenuItemText>
          </Link>
        </MenuItem>
        <MenuItem>
          <Link to={"/"} className={styles.link}>
            <FontAwesomeIcon icon={faFilePen} className={styles.icon} />
            <MenuItemText>Reservas</MenuItemText>
          </Link>
        </MenuItem>
        <MenuItem>
          <Link to={"/"} className={styles.link}>
            <FontAwesomeIcon icon={faBookBookmark} className={styles.icon} />
            <MenuItemText>Alquileres</MenuItemText>
          </Link>
        </MenuItem>
        <MenuItem>
          <Link to={"/"} className={styles.link}>
            <FontAwesomeIcon icon={faCartShopping} className={styles.icon} />
            <MenuItemText>Punto de Venta</MenuItemText>
          </Link>
        </MenuItem>
        <MenuItem>
          <Link to={"/"} className={styles.link}>
            <FontAwesomeIcon icon={faChartColumn} className={styles.icon} />
            <MenuItemText>Reportes</MenuItemText>
          </Link>
        </MenuItem>
        <MenuItem>
          <Link to={"/"} className={styles.link}>
            <FontAwesomeIcon icon={faGear} className={styles.icon} />
            <MenuItemText>Configuración</MenuItemText>
          </Link>
        </MenuItem>
      </Menu>
    </SidebarWrapper>
  )
}
