import { css } from "lit";
const selectStyles = css`
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
  .colorSelect {
    height:54px;
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
  .colorSelect:focus{
    border:none;
    outline:none;
    border-bottom:3px solid gray;
  }
  .colorSelect:disabled,
  .colorSelect[disabled]{
    background-color:#cccccc;
    color:#f6f6f6;
    pointer-events:none
  }
  .space {
    margin-top: 5px;
  }
  .msgError{
    width: 244px;
    height:20px;
    font-size:12px;
    color:#FFF;
    padding:5px 0;
    text-align:center;
    background-color:var(--error-msg);
    font-family:'Lucida Console','Courier New','monospace';
  }
`;

export default selectStyles;
