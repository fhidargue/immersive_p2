const Spinner = () => {
    return (
      <div className="spinner__wrapper">
        <svg className="spinner" viewBox="0 0 100 100">
          <circle className="spinner__circle" cx="50" cy="50" r="25" strokeWidth="5" fill="none"/> 
        </svg>
      </div>
    );
  };
  
  Spinner.propTypes = {};
  
  Spinner.defaultProps = {};
  
  export default Spinner;
  