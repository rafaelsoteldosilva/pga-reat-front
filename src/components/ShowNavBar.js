import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
export const PrimaryNav = styled.nav`
   width: 100%;
   z-index: 14;
   height: 50px;
   display: flex;
   background: #8bc34a;
   justify-content: space-between;
   padding: 0.18rem;
`;
export const MenuLink = styled(Link)`
   color: #fff;
   display: flex;
   cursor: pointer;
   font-weight: bold;
   align-items: center;
   text-decoration: none;
   padding: 0 1.2rem;
   height: 100%;
   &.active {
      color: #000000;
   }
`;
export const Menu = styled.div`
   display: flex;
   align-items: center;
   margin-right: -25px;
`;
const ShowNavBar = () => {
   return (
      <>
         <PrimaryNav>
            <Menu>
               <MenuLink to="/empresas">Empresas</MenuLink>
               <MenuLink to="/perfiles">Perfiles</MenuLink>
               <MenuLink to="/usuarios">Usuarios</MenuLink>
            </Menu>
         </PrimaryNav>
      </>
   );
};
export default ShowNavBar;
