const Sub = (props) => {
    const updation = (event) => {
      event.preventDefault();
      const result = Number(props.variable.variable1) - Number(props.variable.variable2);
      props.setVariable({
        ...props.variable,
        "result": result,
      });
      console.log("result", result);
    };
  
    return (
    
        <button onClick={updation}>Sub </button>

    );
  };
  
  export default Sub;
  