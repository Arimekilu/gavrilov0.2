import { PayDay } from "../interfaces/paymentInterface";

export const arrPayments: PayDay[] = [{date: new Date('2022-11-29'), payments: [{value: 100, comment: '', date: new Date('2017-01-26')}, {
      value: -1100,
      comment: 'ru',
      date: new Date('2022-01-28')
    }]
  },
  {
    date: new Date('2022-11-28'),
    payments: [{value: 200, comment: '', date: new Date('2017-01-27')}, {
      value: -300,
      comment: 'mp',
      date: new Date('2017-01-27')
    }]
  },
  {
    date: new Date('2022-11-30'),
    payments: [{value: 100, comment: 'em', date: new Date('2017-01-30')}, {
      value: 100,
      comment: '',
      date: new Date('2017-01-30')
    }]
  }

];

// export const arrPayments = new Map()

// arrPayments.get( '2017-01-26')

// arrPayments.set('2017-01-26', [{value: 100, comment: '', date: new Date('2017-01-26')}, {
//   value: 100,
//   comment: 'ru',
//   date: new Date('2017-01-26')
// }])
// arrPayments.set('2022-11-28', [{value: 200, comment: '', date: new Date('2017-01-27')}, {
//   value: -300,
//   comment: 'mp',
//   date: new Date('2017-01-27')
// }])
// arrPayments.set('2022-11-30', [{value: 100, comment: 'em', date: new Date('2017-01-30')}, {
//   value: 100,
//   comment: '',
//   date: new Date('2017-01-30')
// }])
