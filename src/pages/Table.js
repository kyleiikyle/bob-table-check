import { useCallback } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./Table.css";

const Table = () => {
  const navigate = useNavigate();

  const onVectorIconClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="table-div">
      <img className="ellipse-icon" alt="" src="../ellipse-1.svg" />
      <div className="group-div">
        <img
          className="restaurant-2-icon"
          alt=""
          src="../restaurant-2@2x.png"
        />
        <div className="table-01-details">Table 01 Details</div>
        <div className="covers-2">Covers : 2</div>
        <div className="table-1">Table : 1</div>
        <div className="group-div1">
          <div className="customer-seated-div">Customer Seated</div>
          <Form.Check className="rectangle-formcheck" />
        </div>
        <Form.Check className="group-formcheck" label="Order Taken" />
        <Form.Check className="group-formcheck1" label="Bill Delivered" />
        <Form.Check className="group-formcheck2" label="Drinks Delivered" />
        <div className="group-div2">
          <div className="customer-seated-div">Food Delivered</div>
          <Form.Check className="rectangle-formcheck" />
        </div>
        <Button className="group-button" variant="primary">
          {" "}
          Check
        </Button>
      </div>
      <img
        className="vector-icon"
        alt=""
        src="../vector.svg"
        onClick={onVectorIconClick}
      />
      <div className="last-check-20min">Last Check - 20min</div>
    </div>
  );
};

export default Table;
