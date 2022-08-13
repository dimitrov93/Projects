import styled from "styled-components";
import Products from "../Catalog/Products";
import {mobile} from "../../responsive";
import ProductsWomen from "./ProductsWomen";
import ProductsMen from "./ProductsMen";
import ProductsKids from "./ProductsKids";
import { useLocation } from "react-router-dom";
import { useState } from "react";

const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
`;
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Filter = styled.div`
  margin: 20px;
  ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ marginRight: "0px" })}
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({ margin: "10px 0px" })}
`;
const Option = styled.option``;

const CatalogList = ({all, women, men, kids}) => {
  const location = useLocation();
  const cat = location.pathname.split('/')[2];
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState('newest');

  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value,
    })
  }

  return (
    <Container>
      <Title>All products</Title>
      <FilterContainer>
        <Filter>
          <FilterText>FIlter Products</FilterText>
          <Select name="color" onChange={handleFilters}>
            <Option disabled selected>
              Color
            </Option>
            <Option>white</Option>
            <Option>black</Option>
            <Option>red</Option>
            <Option>blue</Option>
            <Option>yellow</Option>
            <Option>green</Option>
          </Select>
          <Select name="size" onChange={handleFilters}>
            <Option disabled>
              Size
            </Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select onChange={e => setSort(e.target.value)} >
            <Option value={'asc'}>Price (asc)</Option>
            <Option value={'desc'}>Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>

      {all && <Products filters={filters} sort={sort} />}
      {women && <ProductsWomen />}
      {men && <ProductsMen />}
      {kids && <ProductsKids />}


    </Container>
  );
};

export default CatalogList;
