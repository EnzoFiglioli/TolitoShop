const ReponsiveMenu = ({toggleMenu}) => {

  return (
      <div 
        className="menu-hamburguesa"
        onClick={toggleMenu} >
          <div style={{ border: '1px solid black' }}></div>
          <div style={{ border: '1px solid black', width: '70%' }}></div>
          <div style={{ border: '1px solid black' }}></div>
      </div>
  );
};

export default ReponsiveMenu;
