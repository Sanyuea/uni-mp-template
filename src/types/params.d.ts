declare type LoginResult = {
  id: number
  avator: string
  account: string
  nickname?: string
  mobile: string
  token: string
}
declare type LoginParams = {
  code: StorageManager
}
