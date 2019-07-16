import * as React from 'react';
import ProgramInfo from '../components/programInfo/ProgramInfo';
import { connect } from 'react-redux';
import { StoreState } from '../store/modules';
import {
  ProgramInfoParams,
  actionCreators as programsActions
} from '../store/modules/ProgramInfo';
import { bindActionCreators } from 'redux';

interface Props {
  programInfo: ProgramInfoParams;
  ProgramActions: typeof programsActions;
}

class ProgramInfoContainer extends React.Component<Props> {
  onHeartToggle = ():void => {
    const { ProgramActions } = this.props;
    ProgramActions.heartToggle();
  }

  render() {
    const { programInfo } = this.props;
    const { onHeartToggle } = this;
    return (
      <ProgramInfo
        params={programInfo}
        onHeartDone={onHeartToggle}
      />
    );
  }
}

export default connect(
  ({programInfo}:StoreState) => ({
    programInfo: programInfo.programinfo
  }),
  (dispatch) => ({
    ProgramActions: bindActionCreators(programsActions, dispatch)
  })
)(ProgramInfoContainer);