import React from 'react'
import styled from "styled-components";
const Section = styled.section`

`
const Profil = styled.div`
    width: 100%;
    max-width: 500px;
    margin: 2em auto 1rem;
    padding: .5em;
    border: .3em solid cornflowerblue;
    border-radius: .5rem;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    color: #444;
    background-color: hsla(0, 0%, 94.1%, .8);
    box-shadow: 0 0 1em 0 #000;
    text-align: center;
`

const Image = styled.img`
    width: 7em;
    height: 7em;
    margin: auto;
    display: block;
`

const Title = styled.h3`
    text-decoration: underline;
`

const flexDiv = styled.div`
    display: flex;
`


const Profile = () => {
  return (
    <Section>
        <Profil >
            <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKW7D6lGORGITe7TYh0coX0095pzvy3qVM353MdqwmZA&s' alt='error'></Image>
            <Title>User info: </Title>
            <flexDiv>
                <p>Username: </p>
                <p>Username: </p>
            </flexDiv>
            <flexDiv>
                <p>Email: </p>
                <p>Email: </p>
            </flexDiv>
            <flexDiv>
                <p>Purchases: </p>
                <p>Purchases: </p>
            </flexDiv>
        </Profil>
    </Section>

  )
}

export default Profile