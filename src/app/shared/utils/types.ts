//ok
export type person_contract = {
  "id": number,
  "person_id": number,
  "contract_id": number,
  "school_id_headquarter": number,
  "started_at": string,
  "ended_at": string | null
}

//ok
export type employee = {
  "id"?: number,
  "person_id": number,
  "registration": string,
  "active": boolean
}

export type contract = {
  "id": number,
  "name": string
}

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

export type person = {
  "id"?: number,
  "name": string,
  "cpf": string,
  "rg": string,
  "person_category_id": number,
  "gender_id": number,
  "phone"?: phone
}

export type period = {
  "id": number,
  "name": number,
  "start": string,
  "end": string
}

export type year = {
  "id"?: number,
  "year": string,
  "start": Date,
  "end": Date
}

export type classType = {
  "id"?: number,
  "name": string
}

export type discipline = {
  "id": number,
  "name": string,
  "active": boolean
}

type phone = {
  "phone1"?: number,
  "phone2"?: number
}


