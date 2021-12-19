export default function randomKey(hashLength = 9) {
  if (typeof Number(hashLength) != 'number') {
    return 'The arg "hashLength" must be a number!'
  }
  const ar = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '0',
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ]
  const hs = []
  const hl = Number(hashLength)
  const al = ar.length
  for (let i = 0; i < hl; i++) {
    hs.push(ar[Math.floor(Math.random() * al)])
  }

  return hs.join('')
  // return new Date().getTime() + parseInt(Math.random() * 10000)
}
