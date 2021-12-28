import React from "react";
// import { RouteComponentProps } from 'react-router';
import { useHistory, useParams } from "react-router-dom";

interface ProductRouteProps {
  id: string;
}

// const ProductDetail = (props: RouteComponentProps<{ id: string }>) => {
const ProductDetail = () => {
  const history = useHistory();
  const params = useParams<ProductRouteProps>();

  // let paramId = props.match.params.id;
  let paramId = params.id;

  const list = [
    { id: 0, name: "Macbook Air M1" },
    { id: 1, name: "Mac Mini M1" },
    { id: 2, name: "iPhone 12" },
  ];

  return (
    <div>
      <h1>Products</h1>
      <div onClick={() => history.goBack()} style={{ cursor: "pointer" }}>
        Go back
      </div>
      {paramId && <span> {list[Number(paramId)].name} </span>}
    </div>
  );
};

export default ProductDetail;
