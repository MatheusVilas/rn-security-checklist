import RemoteLoadProtectiveEquipament from '../../../data/usecases/remote-load-protective-equipament'
import { LoadProtectiveEquipament } from '../../../domain/usecases'
import makeApiUrl from '../http/api-url-factory'
import makeAxiosHttpClient from '../http/axios-http-client-factory'

const makeRemoteLoadSurveyResult = (): LoadProtectiveEquipament =>
  new RemoteLoadProtectiveEquipament(makeApiUrl(), makeAxiosHttpClient())

export default makeRemoteLoadSurveyResult
