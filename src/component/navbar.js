import * as React from "react";
import styled from "styled-components";
import { Navbar, NavbarBrand, Nav, NavItem } from "reactstrap";

import logout from "../image/logout.png";
import profile from "../image/Profile.svg";
import logo from "../image/logo.jpg";

const CustomNavbar = styled(Navbar)`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  
  margin-bottom: 0px;
  position:fixed;
  background-color:white;
`;

const Logo = styled.img`
  width: 124.82px;
  margin-left: 22px;
`;

const Brand = styled(NavbarBrand)`
  margin-right: 2px;
`;

const LogoLabel = styled(NavItem)`
  font-size: 10px;
  color: #5b5b5b;
  padding-top: 20px;
`;

const MiniLogo = styled.img`
  width: 72.46px;
  margin-left: 4px;
`;

const User = styled.div`
  margin-right: 22px;
`;

const CompanyName = styled.p`
  font-size: 10px;
  color: #727272;
  margin: 0px;
`;

const Profile = styled.img`
  width: 32px;
  margin-right: 22px;
`;

const Logout = styled.img`
  margin-right: 3.5rem;
`;

/**
 * @returns {React.Node}
 */
export default function NavBar() {
  return (
    <React.Fragment>
        <CustomNavbar color="#ffffff" light expand="md" fixed="top">
          <Brand>
            <Logo src={logo} alt="Logo" />
          </Brand>
          <Nav className="mr-auto" navbar>
            <LogoLabel>
              <span>powered by</span>
              <MiniLogo src={logo} alt="Logo" />
            </LogoLabel>
          </Nav>
          <User>
            <span>Username</span>
            <CompanyName>Company Name</CompanyName>
          </User>
          <Profile src={profile} alt="profile" />
          <Logout src={logout} alt="Logout" />
        </CustomNavbar>
    </React.Fragment>
  );
}
