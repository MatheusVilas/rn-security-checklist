import UnexpectedError from '../../domain/errors/unexpected-error'
import { LoadProtectiveEquipament } from '../../domain/usecases'
import { HttpClient, HttpStatusCode } from '../protocols/http'

export default class RemoteLoadProtectiveEquipament
  implements LoadProtectiveEquipament {
  constructor(
    private readonly url: string,
    private readonly httpClient: HttpClient<LoadProtectiveEquipament.Model>,
  ) {}

  async load(): Promise<LoadProtectiveEquipament.Model> {
    const httpResponse = await this.httpClient.request({
      url: this.url,
      method: 'get',
    })

    const remoteProtectiveEquipament = httpResponse.body

    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok:
        return remoteProtectiveEquipament

      default:
        throw new UnexpectedError()
    }
  }
}
