export const monthsEn = [
  'Janunary',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
]

export const monthsVn = [
  'Tháng 1',
  'Tháng 2',
  'Tháng 3',
  'Tháng 4',
  'Tháng 5',
  'Tháng 6',
  'Tháng 7',
  'Tháng 8',
  'Tháng 9',
  'Tháng 10',
  'Tháng 11',
  'Tháng 12'
]

export const getYears = () => {
  let startYear = 1970
  const years: number[] = []
  const currentYear = new Date().getFullYear()
  while (startYear <= currentYear) {
    years.push(startYear++)
  }
  return years
}

export const getDates = (year: number, month: number) => {
  const dates = []
  const date = new Date(year, month, 1)
  while (date.getMonth() === month) {
    dates.push(date.getDate())
    date.setDate(date.getDate() + 1)
  }
  return dates
}
