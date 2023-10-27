import React from "react";
import ServiceCard from "./ServiceCard"
import {Col} from "reactstrap"

import weatherImg from '../assets/images/weather.png'
import guideImg from '../assets/images/guide.png'
import customizationImg from '../assets/images/customization.png'

const servicesData = [
    {
        imgUrl: weatherImg,
        title: "Calcular clima",
        desc: "19º"
    },
    {
        imgUrl: guideImg,
        title: "Guia de Tour",
        desc: "lorem ipsum"
    },
    {
        imgUrl: customizationImg,
        title: "Personalizacion",
        desc: "lorem ipsum"
    }
]


const ServiceList = () => {
    return( 
        <>
            {
                servicesData.map((item,index)=> 
                <Col lg='3' key={index}>
                    <ServiceCard item={item}/>
                </Col>)
            }
    
        </>
    );
};

export default ServiceList;