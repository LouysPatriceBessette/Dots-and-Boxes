import {
  setClipboard,
  deepCopy,
  randomReactKey,
  shuffleArray,
  deepEqual,
  realTypeOf,
  whatChanged,
  geoDistance,
  blobToBase64,
  capitalize,
} from './utils'

describe('setClipboard function', () => {
  // Clipboard API is difficult to test in a Jest environment due to its reliance on user permissions and browser context.
  // Therefore, we will mock the navigator.clipboard object.

  beforeAll(() => {
    Object.assign(navigator, {
      clipboard: {
        write: jest.fn().mockResolvedValue(),
      },
    })
  })

  it('should call navigator.clipboard.write with correct data', async () => {
    const text = 'Hello, Clipboard!'
    await setClipboard(text)

    expect(navigator.clipboard.write).toHaveBeenCalledTimes(1)
    const clipboardData = navigator.clipboard.write.mock.calls[0][0]
    expect(clipboardData[0]).toBeInstanceOf(ClipboardItem)
  })
})

describe('deepCopy function', () => {
  it('should create a deep copy of a nested object', () => {
    const original = { a: 1, b: { c: 2 } }
    const copied = deepCopy(original)

    expect(copied).toEqual(original)
    expect(copied).not.toBe(original) // Ensure it's a different reference
    expect(copied.b).not.toBe(original.b) // Ensure nested object is also a different reference
  })

  it('should create a deep copy of an array', () => {
    const original = [1, '2', { a: 3 }]
    const copied = deepCopy(original)

    expect(copied).toEqual(original)
    expect(copied).not.toBe(original) // Ensure it's a different reference
    expect(copied[2]).not.toBe(original[2]) // Ensure nested object is also a different reference
  })
})

describe('randomReactKey function', () => {

  const min = 1000
  const MinPercentage = 1

  const max = 10000000  // 10 million
  const MaxPercentage = 0.95

  it('should return a number', () => {
    const key = randomReactKey()
    expect(typeof key).toBe('number')
  })

  it(`should return different key values - ${MinPercentage * 100}% of the times for ${min} resquests`, () => {
    const keys = new Set()
    for (let i = 0; i < min; i++) {
      keys.add(randomReactKey())
    }
    expect(keys.size).toBeGreaterThanOrEqual(min * MinPercentage)
  })

  it(`should return different key values - ${MaxPercentage * 100}% of the times for ${max} resquests`, () => {
    const keys = new Set()
    for (let i = 0; i < max; i++) {
      keys.add(randomReactKey())
    }
    expect(keys.size).toBeGreaterThanOrEqual(max * MaxPercentage)
  })
})

describe('shuffleArray function', () => {
  it('should return an array with the same elements in different order', () => {
    const original = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 8, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50]
    const shuffled = shuffleArray(original)

    expect(shuffled).toHaveLength(original.length)
    expect(shuffled).toEqual(expect.arrayContaining(original))
    expect(shuffled).not.toEqual(original) // There's a small chance this could fail if shuffle returns the same order
  })

  it('should not modify the original array', () => {
    const original = [1, 2, 3, 4, 5]
    const originalCopy = [...original]
    shuffleArray(original)

    expect(original).toEqual(originalCopy)
  })
})

describe('deepEqual function', () => {
  it('should return true for deeply equal objects', () => {
    const obj1 = { a: 1, b: { c: 2 } }
    const obj2 = { a: 1, b: { c: 2 } }

    expect(deepEqual(obj1, obj2)).toBe(true)
  })

  it('should return false for different objects', () => {
    const obj1 = { a: 1, b: { c: 2 } }
    const obj2 = { a: 1, b: { c: 3 } }

    expect(deepEqual(obj1, obj2)).toBe(false)
  })

  it('should return true for deeply equal arrays', () => {
    const arr1 = [1, 2, { a: 3 }]
    const arr2 = [1, 2, { a: 3 }]

    expect(deepEqual(arr1, arr2)).toBe(true)
  })

  it('should return false for different arrays', () => {
    const arr1 = [1, 2, { a: 3 }]
    const arr2 = [1, 2, { a: 4 }]

    expect(deepEqual(arr1, arr2)).toBe(false)
  })
})

describe('realTypeOf function', () => {
  it('should return correct types for various inputs', () => {
    expect(realTypeOf(null)).toBe('null')
    expect(realTypeOf([])).toBe('array')
    expect(realTypeOf({})).toBe('object')
    expect(realTypeOf(42)).toBe('number')
    expect(realTypeOf('hello')).toBe('string')
    expect(realTypeOf(true)).toBe('boolean')
    expect(realTypeOf(undefined)).toBe('undefined')
    expect(realTypeOf(() => {})).toBe('function')
  })
})

describe('whatChanged function', () => {
  it('should detect type mismatches', () => {
    const changes = whatChanged(42, '42')
    expect(changes).toEqual([{ parent: ['main'], type: 'mismatch', a: 'number', b: 'string' }])
  })

  it('should detect changes in primitive values - boolean', () => {
    const changes = whatChanged(true, false)
    expect(changes).toEqual([{ parent: ['main'], type: 'boolean', a: true, b: false }])
  })

  it('should detect changes in primitive values - text', () => {
    const changes = whatChanged('Germaine', 'Róberr')
    expect(changes).toEqual([{ parent: ['main'], type: 'string', a: 'Germaine', b: 'Róberr' }])
  })

  it('should detect changes in primitive values - number', () => {
    const changes = whatChanged(4, 5)
    expect(changes).toEqual([{ parent: ['main'], type: 'number', a: 4, b: 5 }])
  })

  it('should detect changes in object keys', () => {
    const changes = whatChanged({ a: 1 }, { b: 1 })
    expect(changes).toEqual([{ parent: ['main'], type: 'Not same keys', keys_a: ['a'], keys_b: ['b'] }])
  })

  it('should detect changes in nested objects', () => {
    const changes = whatChanged({ a: { b: 1 } }, { a: { b: 2 } })
    expect(changes).toEqual([{ parent: ['main', 'a', 'b'], type: 'number', a: 1, b: 2 }])
  })

  it('should detect changes in array lengths', () => {
    const changes = whatChanged([1, 2, 3], [1, 2])
    expect(changes).toEqual([{ parent: ['main'], type: 'Not same length', a: 3, b: 2 }])
  })

  it('should detect changes in array elements', () => {
    const changes = whatChanged([1, 2, 3], [1, 4, 3])
    expect(changes).toEqual([{ parent: ['main', 1], type: 'number', a: 2, b: 4 }])
  })
})

describe('geoDistance function', () => {
  const coord1 = [ 52.5200, 13.4050 ] // Berlin
  const coord2 = [ 48.8566, 2.3522 ]  // Paris

  it('should calculate the correct distance between two coordinates - In kilometer', () => {
    const distance = geoDistance(coord1, coord2)
    expect(distance).toBe(877.46)
  })

  it('should calculate the correct distance between two coordinates - In meter', () => {
    const distance = geoDistance(coord1, coord2, 0.001)
    expect(distance).toBe(877463.33)
  })
})

describe('blobToBase64 function', () => {
  const text = 'Hello, world!'
  const blob = new Blob([text], { type: 'text/plain' })

  it('should convert a Blob to a base64 string - discarding the dataUrl description', async () => {

    const base64 = await blobToBase64(blob)

    expect(base64).toBe('SGVsbG8sIHdvcmxkIQ==')
  })

  it('should convert a Blob to a base64 string - Keeping the dataUrl description', async () => {
    const base64 = await blobToBase64(blob, true)

    expect(base64).toBe('data:text/plain;base64,SGVsbG8sIHdvcmxkIQ==')
  })
})

describe('capitalize function', () => {
  it('should capitalize the first letter of a string', () => {
    expect(capitalize('hello')).toBe('Hello')
    expect(capitalize('world')).toBe('World')
  })

  it('should handle empty strings', () => {
    expect(capitalize('')).toBe('')
  })

  it('should not modify the rest of the string', () => {
    expect(capitalize('hELLO')).toBe('HELLO')
    expect(capitalize('wORLD')).toBe('WORLD')
  })
})