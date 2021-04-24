import { useSelector, TypedUseSelectorHook } from 'react-redux'
import { RootState } from '../../main/store'

const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector

export default useTypedSelector
