import * as React from "react";
import { Component } from "react";
import ProgramInfo from "../components/programInfo/ProgramInfo";
import { ProgramInfoParams } from "../store/modules/ProgramInfo";

export default class ProgramInfoView extends React.Component {
  render() {
    const Data: ProgramInfoParams = {
      id: 1,
      programName: 'data',
      startDate: 'data',
      volunteerTime: 'data',
      recruitmentNumber: 'data',
      remainingNumber: 'data',
      callNumber: 'data',
      volunteerExplanation: 'data',
      googleMap: 'data',
      tel: 'tel:010-2019-8642',
      heartCheckDone: false
    };
    
    return (
      <div>
        <ProgramInfo
          params={Data}
        />
      </div>
    );
  }
}
