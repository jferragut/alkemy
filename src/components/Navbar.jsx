import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import {
  Collapse,
  NavbarToggler,
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  Button,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap"
import alkemyLogo from '../assets/images/alkemy_logo.png'


export default class ReactNavbar extends React.Component {
  constructor(props) {
    super(props);

    this.toggleMobileMenu = this.toggleMobileMenu.bind(this);
    this.toggle = this.toggle.bind(this);
    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);

    this.state = {
      isOpen: false,
      dropdownOpen: false,
      mobileMenuClasses: "d-block d-lg-none mobileMenu",
      togglerClasses: "mr-2 d-lg-none hamburger hamburger--slider"
    };
  }

  componentDidMount(){

  }

  // Navbar Toggler Function
  toggleMobileMenu(prevState) {
    this.setState({
      isOpen: !this.state.isOpen,
    });

    if(this.state.isOpen){
      this.setState({
        mobileMenuClasses: "d-block d-lg-none mobileMenu open",
        togglerClasses: "mr-2 d-lg-none hamburger hamburger--slider is-active"
      });
      document.body.classList.add('open');
    }else{
      this.setState({
        mobileMenuClasses: "d-block d-lg-none mobileMenu",
        togglerClasses: "mr-2 d-lg-none hamburger hamburger--slider"
      });
    }
  }

  // Functions for Dropdown menu
  toggle = () => {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    })
  }

  onMouseEnter = () => {
    this.setState({dropdownOpen: true});
  }

  onMouseLeave = () => {
    this.setState({dropdownOpen: false});
  }

  renderMenuLinks = () => {
    return this.props.menuArray.map(item=>{
      if(!item.drop){
        return(
          <NavItem className="ml-4 my-auto" key={item.id}>
            <Link to={item.url} className="text-white">{item.name}</Link>
          </NavItem>
        );
      }else{
        return(
          <Dropdown className="ml-4 my-auto" onMouseOver={this.onMouseEnter} onMouseLeave={this.onMouseLeave} isOpen={this.state.dropdownOpen} toggle={this.toggle} key={item.id}>
            <DropdownToggle tag="p" className="text-white my-auto" caret>{item.name}</DropdownToggle>
            <DropdownMenu tag="ul" style={{background: 'rgba(8,11,13,.70)'}}>
            {
              item.submenu.map(subitem=>{
                return(
                  <DropdownItem tag="li" toggle={this.state.toggle} key={subitem.id}>
                    <Link to={subitem.url} className="text-white">{subitem.name}</Link>
                  </DropdownItem>
                );
              })
            }
            </DropdownMenu>
          </Dropdown>
        );
      }
    });
  }

  renderMobileLinks = () => {
    return this.props.menuArray.map(item=>{
      if(item.drop){
        return(
          <div key={item.id}>
            <NavItem className="text-center font-weight-bold siteTitle">
              <p className="text-white">{item.name}</p>
            </NavItem>
            <ul className="mobileSubMenu list-unstyled mx-auto text-center mb-5">
              {
                item.submenu.map(subitem=>{
                  return(
                    <NavItem key={subitem.id}>
                      <Link to={subitem.url} className="text-white">{subitem.name}</Link>
                    </NavItem>
                  )
                })
              }
            </ul>
          </div>
        )
      }else{
        return(
          <NavItem className="mx-auto font-weight-bold" key={item.id}>
            <Link to={item.url} className="text-white">{item.name}</Link>
          </NavItem>
        )
      }
    })
  }

  render() {
    return (
      <>
        <Navbar fixed='top' expand="lg" dark>
          <NavbarBrand to="/" className="mr-lg-auto mx-auto">
            <img src={alkemyLogo} alt="Alkemy, Inc." style={{maxHeight:'100px'}} />
          </NavbarBrand>
          <NavbarToggler
            onClickCapture={this.toggleMobileMenu}
            className={this.state.togglerClasses}
            >
            <span className="hamburger-box">
              <span className="hamburger-inner"></span>
            </span>
          </NavbarToggler>
          <Collapse className="d-none d-lg-block" navbar>
            <p className="callUs">Call Us Today! 877-4ALKEMY (425-5369)</p>
            <Nav className="ml-auto" navbar style={{marginTop:'2rem'}}>
              {this.renderMenuLinks()}
              <Button outline color="light" className="ml-4">Reserve Appointment</Button>
            </Nav>
          </Collapse>
        </Navbar>
        <div className={this.state.mobileMenuClasses} >
          <hr/>
          <Nav className="mx-auto" navbar>
            {this.renderMobileLinks()}
            <Button outline color="light" className="mx-auto">Reserve Appointment</Button>
            <p className="mx-auto">Call Us Today! 877-4ALKEMY (425-5369)</p>
          </Nav>
        </div>
      </>
    );
  }
}

ReactNavbar.propTypes = {
  menuArray: PropTypes.array
}
