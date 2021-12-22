import React from 'react';
import CTImage from './Image';
import {Row,Col} from 'react-bootstrap';

class ImagePanel extends React.Component{
    render() {
      return (
        <>
        <Row>
            <Col>
                <CTImage name="KSimage" fileProps = {this.props.fileProps}/>
            </Col>
            <Col>
                <CTImage name="KBimage" fileProps = {this.props.fileProps}/>
            </Col>
        </Row>
        <Row>
            <Col>
                <CTImage name="CRimage" fileProps = {this.props.fileProps}/>
            </Col>
            <Col>
                <CTImage name="SRimage" fileProps = {this.props.fileProps}/>
            </Col>
        </Row>
        </>
      );
    }
  }

  export default ImagePanel;