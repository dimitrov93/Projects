import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background-color: teal;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 17px;
`;

const Announcement = () => {
  return (
    <Container>
      THE BEST DEAL TODAY! Free shipping on Orders over $50! Buy now!
    </Container>
  );
};

export default Announcement;
