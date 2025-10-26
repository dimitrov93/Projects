import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../../responsive";
import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import * as productService from "../../services/productService";
import { useAuthContext } from "../../context/AuthContext";
import { addProduct } from "../../redux/cartRedux";
import { useDispatch } from "react-redux";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({ padding: "10px", flexDirection: "column" })}
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
  ${mobile({ height: "40vh" })}
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;
  &:hover {
    background-color: #f8f4f4;
  }
`;

const ProductDetails = () => {
  const navigate = useNavigate();
  const productId = useParams();
  const { user } = useAuthContext();
  const dispatch = useDispatch()
  const [product, setProduct] = useState([]);
  const [productsAmount, setProductsAmount] = useState(1);
  const [color, setColor] = useState('');
  const [size, setSize] = useState("");

  useEffect(() => {
    productService
      .getOne(productId.id)
      .then((res) => {
        setProduct(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  let isOwner = product.owner === user._id;

  const productDeleteHandler = () => {
    const confirmation = window.confirm(
      "Are you sure you want to delete this item?"
    );

    if (confirmation) {
      productService
        .remove(productId.id)
        .then(() => {
          navigate("/catalog");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  const increaseAmountHandler = (handler) => {
    if (handler == true) {
      setProductsAmount((oldState) => oldState + 1);
    } else {
      setProductsAmount((oldState) => oldState - 1);
    }
  };

  const addToCartHandler = () => {
    dispatch(addProduct({...product,productsAmount, color, size}))
  }

  return (
    <Container>
      <Wrapper>
        <ImgContainer>
          <Image src={product.img} />
        </ImgContainer>
        <InfoContainer>
          <Title>Denim Jumpsuit</Title>
          <Desc>{product.description}</Desc>
          <Price>$ {product.price}</Price>
          <FilterContainer>
            <Filter>
                <FilterColor color={product.color} onClick={(e) => setColor(product.color)} />
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize onClick={(e) => setSize(e.target.value)}>
                <FilterSizeOption key={product.size}>{product.size}</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove onClick={() => increaseAmountHandler(false)} />
              <Amount>{productsAmount}</Amount>
              <Add onClick={() => increaseAmountHandler(true)} />
            </AmountContainer>
            <Button onClick={addToCartHandler}>ADD TO CART</Button>
            {isOwner && (
              <>
                <Link to={`/catalog/${productId.id}/edit`}>
                  <Button>Edit</Button>
                </Link>
                <Button onClick={productDeleteHandler}>Delete</Button>
              </>
            )}
          </AddContainer>
        </InfoContainer>
      </Wrapper>
    </Container>
  );
};

export default ProductDetails;
