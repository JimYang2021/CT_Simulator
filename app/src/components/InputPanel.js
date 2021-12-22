import React from 'react';
import Input from './Input';
import {Col,Row} from 'react-bootstrap';

class InputPanel extends React.Component{
    render (){
      function generateList(start,end,increment){
        let listToBeReturned = [];
        for(let i=start; i<=end; i+=increment){
          listToBeReturned.push(i)
        }
        return listToBeReturned;
      }
  
      const blockstyle = {
        background : 'gray',
        border:'2px solid #000000',
        height: '270px',
        width: '600px',
        fontWeight: 'bold',
        align: "left"
      }

      // input options.
      const optionsKv = ['80','110','130']
      const optionsKernal = ['Very Smooth','Smooth','Standard','Sharp','Very Sharp']
      const optionsMa = generateList(50,500,50)
      const optionsSlice = ['1','2','3','4','6','10']
      const optionsDetect = ['0.6','1.2']
      const optionsMeasure = ['Off','On']
  
      return (
        <>
            <Row style={blockstyle}>
                <Col>
                    <Row>
                        <Input name="kVP" options = {optionsKv} alertParent = {this.props.alertParent}/>
                    </Row>
                    <Row>
                        <Input name="mAS" options = {optionsMa} alertParent = {this.props.alertParent}/>
                    </Row>
                    <Row>
                        <Input name="Kernal" options = {optionsKernal} alertParent = {this.props.alertParent}/>
                    </Row>
                </Col>
                <Col>
                    <Row>
                        <Input name="Slice" options = {optionsSlice} alertParent = {this.props.alertParent}/>
                    </Row>
                    <Row>
                        <Input name="Detector Size" options = {optionsDetect} alertParent = {this.props.alertParent}/>
                    </Row>
                    <Row>
                        <Input name="Measurements" options = {optionsMeasure} alertParent = {this.props.alertParent}/>
                    </Row>
                </Col>
            </Row>
        </>
      );
    }
}

export default InputPanel;