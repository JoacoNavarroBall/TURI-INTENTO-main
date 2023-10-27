import React from "react";
import '../styles/home.css'

import { Container, Row, Col} from 'reactstrap';
import heroImg from '../assets/images/hero-img01.jpg';
import heroImg02 from '../assets/images/hero-img02.jpg';
import heroVideo from '../assets/images/hero-video.mp4';
import worldImg from '../assets/images/world.png';
import experienceImg from "../assets/images/experience.png";

import Subtitle from './../shared/Subtitle';

import SearchBar from "../shared/SearchBar";
import ServiceList from "../services/ServiceList"
import FeatureTourList from "../components/Featured-tours/FeturedTourList";



const Home = () => {
    return(
        <>
            {/* ----------- Seccion Principal------------- */}
            <section>
                <Container>
                    <Row>
                        <Col lg='6'>
                            <div className="hero__content">
                                <div className="hero__subtitle d-flex align-items-center">
                                    <Subtitle subtitle={'Conoce antes de visitar'}/>
                                    <img src={worldImg} alt="" />
                                </div>
                                <h1>
                                    Viajar abre las puertas&nbsp; 
                                    <span className="highlight">
                                        de lo desconocido
                                    </span> 
                                </h1>
                                <p>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque voluptate minima adipisci saepe provident expedita impedit inventore. Doloribus tenetur odio quo dolor eos tempore nostrum amet sed quisquam. Explicabo, maiores.
                                </p>
                            </div>
                        </Col>
                        <Col lg="2">
                            <div className="hero__img-box">
                                <img src={heroImg} alt="" />
                            </div>
                        </Col>
                        <Col lg="2">
                            <div className="hero__img-box mt-4">
                                <video autoPlay muted loop src={heroVideo} alt="" />
                            </div>
                        </Col>
                        <Col lg="2">
                            <div className="hero__img-box mt-5">
                                <img src={heroImg02} alt="" />
                            </div>
                        </Col>
                        
                        <SearchBar/>
                    </Row>
                </Container>
            </section>
            {/* ----------- Seccion Principal------------- */}
            <section>
                <Container>
                    <Row>
                        <Col lg="3">
                            <h5 className="services__subtitle">
                                Que Ofrecemos
                            </h5>
                            <h5 className="services__title">
                                Ofertamos los mejores servicios
                            </h5>
                        </Col>
                        <ServiceList/>
                    </Row>
                </Container>
            </section>
            {/* ----------- Seccion de tour destacados inicio------------- */}
            <section>
                <Container>
                    <Row>
                        <Col lg="12" className="mb-5">
                            <Subtitle subtitle={"Explora"}/>
                            <h2 className="featured__tour-title">
                                Nuestros tours destacados
                            </h2>
                        </Col>
                        <FeatureTourList/>
                    </Row>
                </Container>
            </section>
            {/* ----------- Seccion de tour destacados final------------- */}

            {/*------------- Seccion de Experiencia Inicio -------------- */}
            <section>
                <Container>
                    <Row>
                        <Col lg='6'>
                            <div className="experience__content">
                                <Subtitle subtitle={'Experiencia'}/>
                                <h2 >
                                    Con toda nuestra Experiencia
                                    <br/>
                                    Estamos para servirte
                                </h2>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                    <br/>
                                    Quas aliquam, hic tempora inventore suscipit unde.
                                </p>
                            </div>
                            <div className="counter__wrapper d-flex align-items-center gap-5">
                                <div className="counter__box">
                                    <span>
                                        12k+
                                    </span>
                                    <h6>
                                        Viajes Existosos
                                    </h6>
                                </div>
                                <div className="counter__box">
                                    <span>
                                        2k+
                                    </span>
                                    <h6>
                                        Clientes frecuentes
                                    </h6>
                                </div>
                                <div className="counter__box">
                                    <span>
                                        5
                                    </span>
                                    <h6>
                                        Anos de experiencia
                                    </h6>
                                </div>
                            </div>
                        </Col>
                        <Col lg="6">
                            <div className="experience__img">
                                <img src={experienceImg} alt="" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            {/*------------- Seccion de Experiencia Final -------------- */}
        </>
    );
};
export default Home;