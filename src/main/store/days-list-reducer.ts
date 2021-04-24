type Product = {
  name: string
}

export const Types = {
  ADD: 'dayList/ADD',
}

type InitialStateType = {
  items: Product[]
}

interface ReducerType {
  items: InitialStateType['items']
}

const initialState: InitialStateType = {
  items: [],
}

export default function reducer<InitialStateType>(
  state = initialState,
  action: { type: any; payload: Product },
): ReducerType {
  switch (action.type) {
    case Types.ADD:
      return { ...state, items: [...state.items, action.payload] }

    default:
      return state
  }
}

export function add() {
  return {
    type: Types.ADD,
  }
}
