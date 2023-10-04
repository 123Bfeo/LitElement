import { css } from "lit";

const tablaStyles = css`
  table{
    border-collapse: collapse;
    border-spacing:0;
    width:25%;
    background-color:#4fc3f7;
  }
  th{
    text-align:center;
    padding: 10px;
  }
  td{
    text-align:center;
    padding:10px;
    font-weight:normal
  }
  tr:nth-child(even){
    background-color:#b3e5fc;
  }
`;
export default tablaStyles;
