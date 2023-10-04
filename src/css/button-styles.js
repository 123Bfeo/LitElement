import {css} from 'lit';

const buttonStyles = css`
.button-primary{
    background-color:#9EBE1D;
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
.button-primary:hover{
    box-shadow: 0 6px 8px 0 rgb(0,0,0,0.24)
}
.button-primary:disabled,
.button-primary[disabled]{
    background-color:#cccccc;
    color:#f6f6f6;
    pointer-events:none
}

.button-second{
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

.button-tertiary{
    width:100%;
    background-color:#73D0FB;
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
.button-tertiary:hover{
    box-shadow: 0 6px 8px 0 rgb(0,0,0,0.24)
}
.button-tertiary:disabled,
.button-tertiary[disabled]{
    background-color:#cccccc;
    color:#f6f6f6;
    pointer-events:none
}
`;
export default buttonStyles;