import React from 'react'
import { Link, StaticQuery } from "gatsby"
import ReactNavbar from './Navbar.jsx'
import { Button, Col, Row } from "reactstrap"
import BlogSearch from './BlogSearch.jsx'

/*
_menuArray object details:
  name:  the title of the menu item (link text)
  id: id used for unique key. top level is numbered, submenu adds letters.
  drop: true/false, specifies if it is a dropdown menu
  url: the url for Link
  submenu: a nested array for dropdown menu items
*/

var _menuArray = [
  {
    name: 'Solutions',
    id: '1',
    drop: true,
    title: true,
    submenu: [
      {name: 'Responsive Web Design', id: '1a', url: '/responsive-web-design'},
      {name: 'Web Development', id: '1b', url: '/web-development'},
      {name: 'eCommerce Design', id: '1c', url: '/ecommerce-design'},
      {name: 'Digital Marketing', id: '1d', url: '/digital-marketing'},
    ]
  },
  {name: 'Alkemy Blog', title: true, id: '2', drop:false, url: '/alkemy-blog'},
  {name: 'About Alkemy', title: true, id: '3', drop:false, url: '/about-alkemy'},
  {name: 'Contact Alkemy', title: true, id: '4', drop:false, url: '/contact-alkemy'},
];

const windowGlobal = typeof window !== 'undefined' && window.location.pathname

const Header = ({
    pageTitle,
    hideHeader,
    renderHeaderSolid,
    search,
}) => (
    <StaticQuery
        query={graphql`
            query HeaderBlogQuery {
                siteSearchIndex {
                   index
                }
                allMarkdownRemark {
                   edges {
                       node {
                           fields {
                               slug
                           }
                           frontmatter {
                               path
                               date
                               title
                               tags
                               excerpt
                               cover {
                                   ...fluidImageSmall
                               }
                           }
                           children {
                               id
                           }
                       }
                   }
               }
            }
        `}
        render={data => (
            <>
                <header
                    className={
                        renderHeaderSolid
                            ? "header solid fadeInDown position-sticky"
                            : "header fadeInDown position-fixed"
                    }
                >
                    <ReactNavbar menuArray={_menuArray} />
                </header>
                {hideHeader === true ? (
                    <Row className="subHeader mx-0">
                        <Col xs={12} md={8}>
                            <h1 className="m-0 font-weight-normal">
                                <Link
                                    tag="h1"
                                    to={windowGlobal}
                                    className="m-0 text-white"
                                >
                                    {pageTitle}
                                </Link>
                            </h1>
                        </Col>
                        {search === true ? (
                            <Col xs={12} md={4}>
                                <BlogSearch
                                    searchIndex={
                                        data.siteSearchIndex.index
                                    }
                                />
                            </Col>
                        ) : null}
                    </Row>
                ) : null}
            </>
        )}
    />
)
export default Header
