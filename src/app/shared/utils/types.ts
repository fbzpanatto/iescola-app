type phone = {
  "phone1"?: number,
  "phone2"?: number
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

export type employee = {
  "id": number,
  "registration": string,
  "person_id": number,
  "person": {
    "name": string
  }
  "contract_id": number,
  "contract": {
    "name": string
  },
  "spot": string
}

export type period = {
  "id": number,
  "name": number,
  "start": string,
  "end": string
}

export type school_year = {
  "id": number,
  "year": number,
  "start": string,
  "end": string
}

export type class_type = {
  "id": number,
  "name": string
}

export type discipline = {
  "id": number,
  "name": string,
  "active": boolean
}


