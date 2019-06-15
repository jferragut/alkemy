import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import '../utils/utils.js'
import { Button, Col, Row } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Layout from '../components/layout'
import ScrollWrapper from '../components/scrollWrapper.jsx'
import BuildYourDream from '../components/BuildYourDream.jsx'
import SEO from "../components/seo"

/*
Layout props:
  renderHeaderSolid: Whether the top navigation should be solid or start transparent
  headerTitle: array that defines subheader props
      [
        boolean (is there a subheader),
        string (subheader text)
      ]
  bodyClasses: additional classes to add to body tag
*/


const AlkemyBlog = ({data}) => {
    // pageTitle: SEO friendly title for the title bar
    const pageTitle = "About Alkemy"

    return(
		<ScrollWrapper onWindowScroll={handleScroll}>
			<Layout
			renderHeaderSolid={true}
			headerTitle={[true,pageTitle]}
			bodyClasses="blog"
			>
			<SEO title={pageTitle} />

			{/* Section 1 */}
			<section className="">
				<Row className="align-items-center h-100">
				<Col xs={12} sm={6} className="text-center h-100">
				
				</Col>
				<Col xs={12} sm={6}>
					
				</Col>
				</Row>
			</section>

			{/* Section 2 */}
			<section className="py-4">
				<Row className="px-5 py-4">
				<Col xs={12} md={8}>
					
				</Col>
				</Row>
			</section>

			{/* Section 3 */}
			<section className="py-4">
				<Row className="py-2">
				<Col xs={12}>
					
				</Col>
				</Row>
			</section>

			<section ref={dreamForm}>
				<BuildYourDream />
			</section>
			</Layout>
		</ScrollWrapper>
  	)
}

const dreamForm = React.createRef();

const handleScroll = () => {

}

export const query = graphql`
{
  
}
`;


export default AboutAlkemy
