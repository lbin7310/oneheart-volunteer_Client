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

function heartToggle(id: number) {
  return {
    type: HEARTTOGGLE,
    meta: {
      id
    }
  };
}

export const actionCreators = {
  heartToggle
};
// reducers

const initialState: ProgramInfoParams = {
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
};

export function programInfoReducer(
  state=initialState, action: programInfoActionTypes
): ProgramInfoParams {
  switch (action.type) {
    case HEARTTOGGLE:
      const copyState = {...state};
      if (copyState.id === action.meta.id) {
        copyState.heartCheckDone = !copyState.heartCheckDone;
        return copyState;
      }
    default:
      return state;
  }
}