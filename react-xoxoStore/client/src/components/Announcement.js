import styled from "styled-components"

const Container = styled.div`
    height: 30px;
    background-color: teal;
    color: white;
    display:flex;
    align-items: center;
    justify-content: center;
    font-size: 17px;
`

const Announcement = () => {
  return (
    <Container>
        Black Friday only today!
    </Container>
  )
}

export default Announcement