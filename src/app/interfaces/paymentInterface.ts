export interface Payment {
  value: number,
  comment?: string,
  date: Date

}


export interface PayDay {
  date: Date | string,
  payments: Payment[]
}

export function getPayment(val: number, com: string, dat: Date | string) {
  return {
    value: val,
    comment: com ? com : '',
    date: new Date(dat)
  }
}

export function getPayday(val: number, com: string, dat: Date | string) {
  return {
    date: new Date(dat),
    payments: [{
      value: val,
      comment: com ? com : '',
      date: new Date(dat)
    }]
  }
}

