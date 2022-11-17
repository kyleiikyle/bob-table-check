import { useCallback } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./tables.css"
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Grid from "@material-ui/core/Grid";
import { styled } from '@mui/material/styles';




const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

//component template

const tableNum = [
    {Table:"1"},
    {Table:"2"},
    {Table:"3"},
    {Table:"4"},
    {Table:"5"},
  ];

const TableOverview = () => {


    

    
    const navigate = useNavigate();
  
    const onComponent1ContainerClick = useCallback(() => {
      navigate("../../table");
    }, [navigate]);

    return (
        <Grid container spacing={8}>
          {tableNum.map(row => (
            <Grid item xs={6}>
              <Item>       <div onClick={onComponent1ContainerClick}>
              <img
          
          alt=""
          src="../restaurant-1@2x.png"
        />
        <div >Last Check - 20min</div>
        <div >Table {row.Table}</div>
        <div  />
      </div>  </Item>
            </Grid>
          ))}
        </Grid>
      );
    };
    
    export default TableOverview;

