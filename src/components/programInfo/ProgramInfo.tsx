import * as React from 'react';
import { ProgramInfoParams } from '../../store/modules/ProgramInfo';

interface Props {
  params: ProgramInfoParams;
}

const ProgramInfo: React.SFC<Props> = ({
  params,
}) => (
  <div>
    <div className="programinfo_detail">
      <div>프로그램명: {params.programName}</div>
      <div>일시: {params.startDate}</div>
      <div>봉사활동 시간: {params.volunteerTime}</div>
      <div>모집인원 수: {params.recruitmentNumber}</div>
      <div>남은 자리 수: {params.remainingNumber}</div>
      <div>담당자 전화번호: {params.callNumber}</div>
    </div>
    <div className="programinfo_volunteerContent">
      <div>봉사활동 내용: {params.volunteerExplanation}</div>
    </div>
    <div className="programinfo_map">
      <div>지도: {params.googleMap}</div>
    </div>
    <span>
      <div className="heartButton">
        <button>하트</button>
      </div>
      <a href={params.tel}>전화번호</a>
    </span>
  </div>
);

export default ProgramInfo;