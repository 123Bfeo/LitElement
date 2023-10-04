import {css} from 'lit';

const buttoStyles = css`
 .containerB {
    width:90%;
    margin-left: auto;
    margin-right: auto;
    padding-right: 15px;
    padding-left: 15px;
    padding-top: 20px;
  }
.button-second{
    width:100%;
    background-color:#F71906;
    border:none;
    color:white;
    padding:10px 10px;
    text-align: center;
    text-decoration:none;
    display:inline-block;
    font-size:14px;
    border-radius:5px;
    font-family:'Lucida Console','Courier New','monospace'
}
.button-second:hover{
    box-shadow: 0 6px 8px 0 rgb(0,0,0,0.24)
}
.button-second:disabled,
.button-second[disabled]{
    background-color:#cccccc;
    color:#f6f6f6;
    pointer-events:none
}


`;
export default buttoStyles;