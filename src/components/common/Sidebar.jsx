
import { faCartShopping, faChartColumn, faGear, faHomeAlt, faTags, faUserGroup, faVest,faCartFlatbed, faPlus, faList} from "@fortawesome/free-solid-svg-icons"


import { faCartShopping, faChartColumn, faGear, faHomeAlt, faTags, faUserGroup, faVest,faCartFlatbed, faClipboardList} from "@fortawesome/free-solid-svg-icons"

import { faCartShopping, faChartColumn, faGear, faHomeAlt, faTags, faUserGroup, faVest, faCartFlatbed } from "@fortawesome/free-solid-svg-icons"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"
import styled from "styled-components"
import styles from "./Sidebar.module.css"

const SidebarWrapper = styled.div`
  background-color: white;  
  font-size: 1.3rem;
  font-weight: 300;
  min-width: 250px;
  max-width: 270px;
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
            <FontAwesomeIcon icon={faTags} className={styles.icon} />
            <MenuItemText>Productos</MenuItemText>
          </Link>
        </MenuItem>
        <MenuItem>
          <Link to={"/clientes"} className={styles.link}>
            <FontAwesomeIcon icon={faUserGroup} className={styles.icon} />
            <MenuItemText>Clientes</MenuItemText>
          </Link>
        </MenuItem>
        <MenuItem>
          <Link to={"/alquileres"} className={styles.link}>
            <FontAwesomeIcon icon={faVest} className={styles.icon} />
            <MenuItemText>Alquileres</MenuItemText>
          </Link>
        </MenuItem>
        <MenuItem>
          <Link to={"/PuntodeVenta"} className={styles.link}>
            <FontAwesomeIcon icon={faCartShopping} className={styles.icon} />
            <MenuItemText>Punto de Venta</MenuItemText>
          </Link>
        </MenuItem>
        <MenuItem>
          <Link to={"/inventarios"} className={styles.link}>
            <FontAwesomeIcon icon={faCartFlatbed} className={styles.icon} />
            <MenuItemText>Inventario</MenuItemText>
          </Link>
        </MenuItem>
        <MenuItem>

          <Link to={"/ListadoSku"} className={styles.link}>
            <FontAwesomeIcon icon={faList} className={styles.icon} />
            <MenuItemText>Listado Skus</MenuItemText>

          <Link to={"/comprobantes"} className={styles.link}>
            <FontAwesomeIcon icon={faClipboardList} className={styles.icon} />
            <MenuItemText>Comprobantes</MenuItemText>
          <Link to={"/Almacen"} className={styles.link}>
            <FontAwesomeIcon icon={faCartFlatbed} className={styles.icon} />
            <MenuItemText>Almacen</MenuItemText>

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
