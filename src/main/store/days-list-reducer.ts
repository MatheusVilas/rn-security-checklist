import moment from 'moment'

export type CheckList = {
  id: string
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
      id: '01',
      day: moment().subtract(1, 'days').toDate(),
      savedAt: moment().subtract(1, 'days').toDate(),
      status: true,
    },
    {
      id: '02',
      day: moment().subtract(2, 'days').toDate(),
      savedAt: moment().subtract(2, 'days').toDate(),
      status: true,
    },
    {
      id: '03',
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
      return {
        ...state,
        list: [
          {
            id: moment().toString(),
            day: moment().toDate(),
            savedAt: moment().toDate(),
            status: true,
          },
          ...state.list,
        ],
      }

    default:
      return state
  }
}

export function add() {
  return {
    type: Types.ADD,
  }
}
