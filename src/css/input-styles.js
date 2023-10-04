import { css } from "lit";

export const inputStyles = css`
  :host {
    --primary-color: #9ebe1d;
    --default-color: #f3efee;
    --secondary-color: #72d0fb;
    --warning-color: #71906;
    --error-msg: #cd5c5c;
  }
  .container {
    display: flex;
    flex-direction: column;
  }
  input {
    width: 235px;
    height:40px;
    padding:5px;
    margin-top:5px;
    font-size:16px;
    border:0;
    border-radius:5px;
    border-bottom:3px solid #000;
    background: transparent;
    background-color:var(--primary-color);
    font-family:'Lucida Console','Courier New','monospace';
  }
  
  input:focus{
    border:none;
    outline:none;
    border-bottom:3px
  }
  input:disabled,
  input[disabled]{
    background-color:#cccccc;
    color:#f6f6f6;
    pointer-events:none
  }
  .require{
    font-family:'Lucida Console','Courier New','monospace';
    font-size:12px;
  }
  .msgError{
    width:244px;
    height:20px;
    font-size:12px;
    color:#FFF;
    padding:5px 0;
    margin-top:5px;
    text-align:center;
    background-color:var(--error-msg);
    font-family:'Lucida Console','Courier New','monospace';
  }
`;
