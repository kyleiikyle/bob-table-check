import { useCallback } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./TableDetails.css";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import TableOverview from "../components/tables/table.js"
import SimpleContainer from "../components/simpleComponents/container.js"


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


const TableDetails = () => {
  const navigate = useNavigate();

  const onComponent1ContainerClick = useCallback(() => {
    navigate("/table");
  }, [navigate]);

  const onComponent3ContainerClick = useCallback(() => {
    navigate("/table");
  }, [navigate]);

  const onComponent5ContainerClick = useCallback(() => {
    navigate("/table");
  }, [navigate]);

  const onComponent7ContainerClick = useCallback(() => {
    navigate("/table");
  }, [navigate]);

  const onComponent2ContainerClick = useCallback(() => {
    navigate("/table");
  }, [navigate]);

  const onComponent4ContainerClick = useCallback(() => {
    navigate("/table");
  }, [navigate]);

  const onComponent6ContainerClick = useCallback(() => {
    navigate("/table");
  }, [navigate]);

  const onComponent8ContainerClick = useCallback(() => {
    navigate("/table");
  }, [navigate]);

  return (
    <div className="table-details">
      <img className="group-icon" alt="" src="../logo.png" />
      <img className="vector-icon1" alt="" src="../vector1.svg" />
      <Form.Group  className="group-formgroup-search">
        <Form.Label></Form.Label>
        <Form.Control type="text" style={{textAlign: "center"}} placeholder="Search Table" />
        


        
      </Form.Group>          

          <TableOverview></TableOverview>
          


      
    </div>
    
  );
};

export default TableDetails;
