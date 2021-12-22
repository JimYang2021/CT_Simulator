import ImagePanel from './components/ImagePanel';
import InfoPanel from './components/InfoPanel';
import InputPanel from './components/InputPanel';
import MeasPanel from './components/MeasPanel';
import React from 'react';
import Papa from 'papaparse';
import {Container,Row,Col} from 'react-bootstrap';

class App extends React.Component {
  state = {
    'kVP' : '1',
    'Kernal' : '1',
    'mAS' :'1',
    'Slice' : '1',
    'Detector Size' : '1',
    'Measurements' : '1',
    'Index' : '11111',
    'Liver' : '11',
    'Fat' : '22',
    'Spleen' : '33',
    'TBone' : '44',
    'CBone' : '55',
    'CTDIvol' : '66',
    'DLP' : '77',
    'Noise' : '0.0'
  };
  
  updateMeasurement
  handleChange = (inputName, value) => {
    let newState = this.state;
    newState[inputName] = value;
    // addition of [ ""+ ] needed for stability as type of return was changing
    let indexKVP = ""+this.state['kVP'];
    let indexMA = ""+this.state['mAS'];
    let indexDet = ""+this.state['Detector Size'];
    let indexSlice = ""+this.state['Slice'];
    let indexKernal = ""+this.state['Kernal'];
    let Measurement = ""+this.state['Measurements'];
    if(indexMA === 10)
    {
      indexMA = 'A';
    }
    let indexNum = indexKVP + indexMA + indexDet + indexSlice + indexKernal;
    this.setState({'Index' : indexNum});
    let config = {
      delimiter: "",	// auto-detect
      newline: "",	// auto-detect
      header: false,
      dynamicTyping: false,
      preview: 0,
      encoding: "",
      worker: false,
      comments: false,
      step: undefined,
      complete: undefined,
      error: undefined,
      download: false,
      skipEmptyLines: false,
      chunk: undefined,
      fastMode: undefined,
      beforeFirstChunk: undefined,
      withCredentials: undefined
    }

    let showMeas = (data) => {
      // Does this need to go in handle change?
      let extract = {};
      extract = data[0];
      let arrayLength = data.length;
      for (let i = 0; i < arrayLength; i++) {
      extract = data[i];
      if (extract[0]===indexNum) {
         i=arrayLength;
         }
      }
      this.setState({
        'Liver' : extract[1],
        'Fat' : extract[2],
        'Spleen' : extract[3],
        'TBone' : extract[4],
        'CBone' : extract[5],
        'CTDIvol' : extract[6],
        'DLP' : extract[7],
        'Noise' : extract[8]
      });
      console.log("@@@",newState);
      this.setState(newState);
    };

    function parseData(url, callBack) {
      Papa.parse(url, {
        download: true,
        dynamicTyping: true,
        complete: function(results) {
            callBack(results.data);
        }
      });
    }

    parseData("./src/catalog1/0MeasCatalogV4.csv", showMeas);

    console.log(indexNum);
  }



  render() {
    const background = {background : 'lightgray'}
    return (
      <Container fluid>
        <Row style={background}>
          <Col md={8}>
            <ImagePanel fileProps = {this.state}/>
          </Col>
          <Col md={4}>
            <Row>
              <InfoPanel fileProps = {this.state}/>
            </Row>
            <Row>
              <InputPanel alertParent = {this.handleChange}/>
            </Row>
            <Row>
              <MeasPanel fileProps = {this.state}/>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
} // Put Meas last after debug

export default App;
