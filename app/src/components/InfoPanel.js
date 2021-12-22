import React from 'react';
import ucd from '../images/UCD.png';
import norway from '../images/Norway.png';

class InfoPanel extends React.Component{
    render (){
      return(
        <>
          <h2> <font color = "blue">
          CTSim </font> (v2.0) is licensed by </h2>
          <p>
          <img src={ucd} alt='UCD'/>
          <img src={norway} alt='Norway'/>
          <br /> Developed by Dr. John Stowe (UCD) and Jim(Nongyu) Yang under a <br />
            <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">
              Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License  </a>
            <img src={'https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png'} alt=''/>
            <br /><br />
          </p>
       </>
      );
  }
}

export default InfoPanel;