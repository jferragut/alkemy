import React,{useEffect,useState} from "react";
import {Link} from "gatsby";
import { Col, Row } from "reactstrap";
import { addJS } from "../utils/utils.js";
import Layout from "../components/layout";
import ScrollWrapper from "../components/scrollWrapper.jsx";
import BuildYourDream from "../components/BuildYourDream.jsx";
import SEO from "../components/seo";

/*
Layout props:
  pageTitle: SEO friendly title for the title bar
  headerTitle: array that defines subheader props
      [
        boolean (is there a subheader),
        {
            name: string (subheader text),
            url: string (link for subheader text)
        }
      ]
  bodyClasses: additional classes to add to body tag
*/

const PrivacyPolicy = ({ data }) => {
    // pageTitle: SEO friendly title for the title bar
    const pageTitle = { name: "Privacy Policy", url: "/privacy-policy" };

    const [state, setState] = useState(null);

    useEffect(() => {
        if (typeof window !== "undefined") {
            fetch(
                "https://app.termageddon.com/api/policy/UzJ0Vk5Va3hZa0V6WTFGU1UzYzlQUT09?no-title=true"
            )
                .then(res => res.text())
                .then(res => setState(res));
        }
    }, []);

    useEffect(() => {
        if (typeof window !== "undefined" && policy.current !== null) {
            policy.current.innerHTML = state;
        }
    });

    return (
        <ScrollWrapper onWindowScroll={handleScroll}>
            <Layout
                renderHeaderSolid={true}
                headerTitle={[true, pageTitle]}
                bodyClasses="privacy"
            >
                <SEO title={pageTitle.name} />

                {/* Section 1 */}
                <section
                    className="wrap alk-container my-5"
                    ref={policy}
                    data-policy-key="UzJ0Vk5Va3hZa0V6WTFGU1UzYzlQUT09"
                />

                <section ref={dreamForm}>
                    <BuildYourDream />
                </section>
            </Layout>
        </ScrollWrapper>
    );
};

const policy = React.createRef();
const dreamForm = React.createRef();

const handleScroll = () => {};

export default PrivacyPolicy;
