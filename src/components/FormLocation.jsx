import getRandomNumber from "../utils/getRandomNumber";

const FormLocation = ({ setIdLocation }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const inputValue = e.target.inputId.value.trim()
    if(inputValue === '' || inputValue === '0') {
        setIdLocation(getRandomNumber(126))
       
    }else {
        setIdLocation(inputValue)
    }
    e.target.inputId.value = ''
  
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input id="inputId" style={{ boxShadow: "1px 1px 10px " }} type="text" />
      <button style={{ backgroundColor: "green", color: "white" }}>
        Search
      </button>
    </form>
  );
};
export default FormLocation;
