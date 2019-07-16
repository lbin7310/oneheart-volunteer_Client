// state of programinfoparams

// types

export interface ProgramInfoParams {
  id: number;
  programName: string;
  startDate: string;
  volunteerTime: string;
  recruitmentNumber: string;
  remainingNumber: string;
  callNumber: string;
  volunteerExplanation: string;
  googleMap: string;
  tel: string;
  heartCheckDone: boolean;
}

export interface ProgramInfoState {
  programinfo: ProgramInfoParams;
}

export const HEARTTOGGLE = "HEARTTOGGLE";

interface HeartToggleAction {
  type: typeof HEARTTOGGLE;
  meta: {
    id: number;
  };
}

export type programInfoActionTypes = 
  | HeartToggleAction;

// actions

function heartToggle() {
  return {
    type: HEARTTOGGLE
  };
}

export const actionCreators = {
  heartToggle
};
// reducers

const initialState: ProgramInfoState = {
  programinfo: {
    id: 0,
    programName: '',
    startDate: '',
    volunteerTime: '',
    recruitmentNumber: '',
    remainingNumber: '',
    callNumber: '',
    volunteerExplanation: '',
    googleMap: '',
    tel: '',
    heartCheckDone: false
  }
};

export function programInfoReducer(
  state=initialState, action: programInfoActionTypes
): ProgramInfoState {
  switch (action.type) {
    case HEARTTOGGLE:
      const copyState = {...state};
        console.log(state.programinfo.heartCheckDone, 'state before');
        console.log(copyState.programinfo.heartCheckDone, "before");
        copyState.programinfo.heartCheckDone = !copyState.programinfo.heartCheckDone;
        console.log(copyState.programinfo.heartCheckDone, "after");
      return copyState;
    default:
      return state;
  }
}