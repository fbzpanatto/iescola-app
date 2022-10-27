export type gender = {
  id: number,
  name: string,
  active: boolean
}

export type category = {
  id: number,
  name: string,
  active: boolean
}

type phone = {
  "phone1"?: number,
  "phone2"?: number
}

export type person = {
  "id"?: number,
  "name": string,
  "cpf": string,
  "rg": string,
  "person_category_id": number,
  "gender_id": number,
  "phone"?: phone
}

export type employee = {
  "id": number,
  "registration": string,
  "name": string,
  "contract_type": number,
  "start": string,
  "spot": string
}

