import React from 'react';

class MeasPanel extends React.Component{
    render (){
      if (this.props.fileProps['Measurements']===2){
        //console.log(this.props.fileProps['CBone']);
        return(
          <div>
            <font color="lightgray">
              <p> {"Blank"} <br /></p>
              </font>
              <font color="green">
              <h3>Measurements</h3>
            </font>
            <p> <b>Soft Tissue: </b>
              Liver = {this.props.fileProps['Liver']} HU,
              Fat = {this.props.fileProps['Fat']} HU,
              Spleen = {this.props.fileProps['Spleen']} HU </p>
            <p> <b>Bone: </b>
              Trabecular Bone = {this.props.fileProps['TBone']} HU,
              Cortical Bone = {this.props.fileProps['CBone']} HU </p>
            <p> <b>Dose: </b>
              CTDIvol = {this.props.fileProps['CTDIvol']} mGy,
              DLP = {this.props.fileProps['DLP']} mGy.cm </p>
            <p> <b>Noise: </b>
              Liver Region of Interest (RoI) = {this.props.fileProps['Noise']} SD </p>
          </div>
        );
      }
      else{
        return null;
      }
    }
  }

  export default MeasPanel;