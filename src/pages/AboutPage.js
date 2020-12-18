import React from 'react';
import Content from '../components/Content';

import Hero from '../components/Hero';

function AboutPage(props) {
    return (
        <div>
            <Hero title={props.title} />

            <Content>
                <p>Hi there, my name is Adrian. I am currently a full stack engineer at JPMorgan Chase & Co. working with back-end microservices in a cloud infrastructure.</p>
                <p>I have experince with modern-day development practices such as cloud, CICD, functional programming and agile with exposure to various frameworks.</p>
                <p>I enjoy participating in mentorship and other leadership roles within my organization while always looking for opportunities to learn new skills both in and out of the office!</p>
            </Content>
        </div>
    );
}

export default AboutPage;