import React from 'react'
import { useState } from 'react'
import { Accordion, Button } from 'react-bootstrap'

export const About = () => {
    const divStyle={
        textAlign: "justify",
        marginTop: "10px"
    }

    return (
        <div className='container'>
            <div style={divStyle}>
                <h1>About Us</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, quasi laudantium. Corporis, delectus veritatis nam aspernatur ducimus facere iste optio a doloremque ex aut blanditiis voluptas! Eius reiciendis ut saepe. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam odio reiciendis, natus voluptatum eum adipisci nostrum inventore eaque repellendus, earum ipsa cupiditate ratione alias voluptatem magnam facilis recusandae ab aliquam? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae inventore eveniet eos sed vel dolores suscipit accusantium exercitationem, dicta nobis iste neque placeat. Porro harum quam maxime impedit delectus non. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum ea reiciendis vitae ut culpa doloremque tempora est? Laborum, repellat saepe voluptates et reiciendis magnam, mollitia, eos vero facere tenetur nisi?</p>
                <h2>How do we work?</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, quasi laudantium. Corporis, delectus veritatis nam aspernatur ducimus facere iste optio a doloremque ex aut blanditiis voluptas! Eius reiciendis ut saepe. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam odio reiciendis, natus voluptatum eum adipisci nostrum inventore eaque repellendus, earum ipsa cupiditate ratione alias voluptatem magnam facilis recusandae ab aliquam? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae inventore eveniet eos sed vel dolores suscipit accusantium exercitationem, dicta nobis iste neque placeat. Porro harum quam maxime impedit delectus non. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum ea reiciendis vitae ut culpa doloremque tempora est? Laborum, repellat saepe voluptates et reiciendis magnam, mollitia, eos vero facere tenetur nisi?</p>
                <h2>Our Ethics</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, quasi laudantium. Corporis, delectus veritatis nam aspernatur ducimus facere iste optio a doloremque ex aut blanditiis voluptas! Eius reiciendis ut saepe. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam odio reiciendis, natus voluptatum eum adipisci nostrum inventore eaque repellendus, earum ipsa cupiditate ratione alias voluptatem magnam facilis recusandae ab aliquam? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae inventore eveniet eos sed vel dolores suscipit accusantium exercitationem, dicta nobis iste neque placeat. Porro harum quam maxime impedit delectus non. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum ea reiciendis vitae ut culpa doloremque tempora est? Laborum, repellat saepe voluptates et reiciendis magnam, mollitia, eos vero facere tenetur nisi?</p>
            </div>
        </div>
    )
}

// module.exports = About;