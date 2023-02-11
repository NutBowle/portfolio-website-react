import { Col, Row, Container } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from "../assets/img/frog.jpeg";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
            // The naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0},
            items: 1
        }
    };

    return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>
                                Skills
                            </h2>
                            <p>This is just some random boiler text</p>
                            <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                                <div className="item">
                                    <img scr={meter1} alt="Image" />
                                    <h5>Some information about the skill choice</h5>
                                </div>

                                <div className="item">
                                    <img scr={meter1} alt="Image" />
                                    <h5>Some information about the skill choice</h5>
                                </div>

                                <div className="item">
                                    <img scr={meter1} alt="Image" />
                                    <h5>Some information about the skill choice</h5>
                                </div>

                                <div className="item">
                                    <img scr={meter1} alt="Image" />
                                    <h5>Some information about the skill choice</h5>
                                </div>

                                <div className="item">
                                    <img scr={meter1} alt="Image" />
                                    <h5>Some information about the skill choice</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" scr={colorSharp} />
        </section>
    )

}