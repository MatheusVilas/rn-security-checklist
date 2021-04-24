import moment from 'moment'

export type CheckList = {
  day: Date
  status: boolean
  savedAt: Date
}

export const Types = {
  ADD: 'dayList/ADD',
}

type InitialStateType = {
  list: CheckList[]
}

interface ReducerType {
  list: InitialStateType['list']
}

const initialState: InitialStateType = {
  list: [
    {
      day: moment().subtract(1, 'days').toDate(),
      savedAt: moment().subtract(1, 'days').toDate(),
      status: true,
    },
    {
      day: moment().subtract(2, 'days').toDate(),
      savedAt: moment().subtract(2, 'days').toDate(),
      status: true,
    },
    {
      day: moment().subtract(3, 'days').toDate(),
      savedAt: moment().subtract(3, 'days').toDate(),
      status: true,
    },
  ],
}

export default function reducer<InitialStateType>(
  state = initialState,
  action: { type: any; payload: CheckList },
): ReducerType {
  switch (action.type) {
    case Types.ADD:
      return { ...state, list: [...state.list, action.payload] }

    default:
      return state
  }
}

export function add() {
  return {
    type: Types.ADD,
  }
}
