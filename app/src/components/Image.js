import React from 'react';
import {Image} from 'react-bootstrap';

class CTImage extends React.Component{
    render () {
      const style = {
        height: '360px',
        width: '360px',
        background: 'lightgray',
        margin:'10px'
      };
  
  
      if (this.props.name[0]==='K' && this.props.fileProps['Measurements']==='2' ) {
        var fileString = `../catalog1/${this.props.name}${this.props.fileProps['Index']}A.jpg`;
      }
      else{
        fileString = `../catalog1/${this.props.name}${this.props.fileProps['Index']}.jpg`;
      }
  
  
      return (
        <>
            <Image src={fileString} style={style} alt='' thumbnail/>
        </>
      );
    }
  }

  export default CTImage;