import { ProtectiveEquipamentModel } from '../models'

export interface LoadProtectiveEquipament {
  load: () => Promise<LoadProtectiveEquipament.Model>
}

export namespace LoadProtectiveEquipament {
  export type Model = ProtectiveEquipamentModel
}
