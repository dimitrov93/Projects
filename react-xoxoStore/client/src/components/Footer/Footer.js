import {
  Facebook,
  GitHub,
  Instagram,
  LinkedIn,
  Mail,
  Phone,
  Room,
} from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../../responsive";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  ${mobile({ flexDirection: "column" })}

`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: "none" })}
`;
const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ backgroundColor: "#fff8f8" })}

`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
  width: 50%;
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;
const ListItem = styled.li`
  width: 50%;
`;

const Logo = styled.h1``;
const Description = styled.p`
  margin: 20px 0px;
`;

const SocialContainer = styled.div`
  display: flex;
`;
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: write;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>Web application made by Ceko</Logo>
        <Description>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quidem
          iste necessitatibus laboriosam nihil consequuntur culpa rerum possimus
          provident magni, molestias, architecto fuga. Voluptate, suscipit
          libero repellendus dolorum quas sunt tenetur magni ex ipsa inventore
          reprehenderit ullam aspernatur minus placeat aliquid nesciunt
          accusantium fuga expedita nostrum, ad ut dicta vitae?
        </Description>
        <SocialContainer>
          <SocialIcon color="3B5998">
          <Link to={'/'} style={{ textDecoration: 'none',color: "inherit" }} >
            <Facebook />
            </Link>
          </SocialIcon>
          <SocialIcon color="125688">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="cb2027">
            <GitHub />
          </SocialIcon>
          <SocialIcon color="007bb5">
            <LinkedIn />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Usefull links</Title>
        <List>

          <ListItem><Link to={'/'} style={{ textDecoration: 'none',color: "inherit" }} >Home </Link></ListItem> 
          <ListItem><Link to={'/cart'} style={{ textDecoration: 'none',color: "inherit" }} >Cart </Link></ListItem> 
          <ListItem><Link to={'/catalog/men'} style={{ textDecoration: 'none',color: "inherit" }} >Man Fashion </Link></ListItem> 
          <ListItem><Link to={'/catalog/woman'} style={{ textDecoration: 'none',color: "inherit" }} >Women Fashion </Link></ListItem> 
          <ListItem><Link to={'/catalog/kids'} style={{ textDecoration: 'none',color: "inherit" }} >Kids Fashion </Link></ListItem> 
          <ListItem><Link to={'/profile'} style={{ textDecoration: 'none',color: "inherit" }} >My Account </Link></ListItem> 
          <ListItem><Link to={'/terms'} style={{ textDecoration: 'none',color: "inherit" }} >Terms and conditions </Link></ListItem> 
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{ marginRight: "10px" }} /> Bulgaria, Montana
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: "10px" }} /> +359 884 334 998
        </ContactItem>
        <ContactItem>
          <Mail style={{ marginRight: "10px" }} /> ts.dimitrov93@gmail.com
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  );
};

export default Footer;
