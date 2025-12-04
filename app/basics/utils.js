export const createAction = (type, payload) => ({ type, payload });

export const randomGameId = (games) => {
  const number = Math.floor(Math.random() * 1000000)

  // Check if already exist
  if(games && games.find(game => game.id === number)) {
    return randomGameId()
  } else if(number.toString().split('').length < 6){
    return randomGameId()
  } else {
    return number
  }
}

export const tryParseJson = (string) => {
  let json
  try{
    json = JSON.parse(string)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch(error){
    json = null
  }

  return json
}

//
// Utilities from incoherences.org
//

export const setClipboard = async (text) => {
  const type = 'text/plain'
  const blob = new Blob([text], { type })
  const data = [new ClipboardItem({ [type]: blob })]
  await navigator.clipboard.write(data)
}

export const deepCopy = (complexObject) => JSON.parse(JSON.stringify(complexObject))

export const randomReactKey = () => Math.floor(Math.random() * 1000000000)

export const shuffleArray = (array) => {
  const newArray = deepCopy(array)
  let currentIndex = array.length

  // While there remain elements to shuffle...
  while (currentIndex !== 0) {

    // Pick a remaining element...
    let randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex--

    // And swap it with the current element.
    [newArray[currentIndex], newArray[randomIndex]] = [
      newArray[randomIndex], newArray[currentIndex]]
  }

  return newArray
}

export const deepEqual = (a, b) => JSON.stringify(a) === JSON.stringify(b)

export const realTypeOf = (x) => {
  let type = typeof(x)

  if(type === 'object'){
    type = Array.isArray(x) ? 'array' : type
    type = x === null ? 'null' : type
  }

  return type
}

export const whatChanged = (a, b, prevChanges=[], parent=['main']) => {

  let changes = []
  const aa = realTypeOf(a)
  const bb = realTypeOf(b)

  if(aa !== bb){
    changes = [{parent, type: 'mismatch', a: aa, b: bb}]
  }else{
    if((aa === 'boolean' || aa === 'string' || aa === 'number') && (a !== b)){
      changes = [{parent, type: aa, a, b}]
    }
    if(aa === 'object'){
      const keys_a = Object.keys(a)
      const keys_b = Object.keys(b)

      if(!deepEqual(keys_a, keys_b)){
        changes = [{parent, type: 'Not same keys', keys_a, keys_b}]
      }else{
        changes = keys_a.map((k) => {
          parent.push(k)
          const recRes = whatChanged(a[k],b[k], prevChanges, [...parent])
          parent.pop()
          return recRes
        })
      }
    }

    if(aa === 'array'){
      if(a.length !== b.length){
        changes = [{parent, type: 'Not same length', a: a.length, b: b.length}]
      }else{
        changes = a.map((k,i) => {
          if(k !== b[i]){
            parent.push(i)
            const recRes = whatChanged(k,b[i], prevChanges, [...parent])
            parent.pop()
            return recRes
          }

          return []
        })
      }
    }
  }

  return prevChanges.concat(changes).flat()
}

/**
 * geoDistance
 * @param {number} coord_a - array[latitude, longitude]
 * @param {number} coord_b - array[latitude, longitude]
 * @param {number} precision - 1km by default, pass 0.001 to get the result in meters
 * @returns
 */
export const geoDistance = (coord_a, coord_b, precision=1) => {
  // reverse precision
  precision = 1/precision

  // Coords in radians
  const [lat_a, lng_a] = coord_a.map((n) => n * Math.PI/180)
  const [lat_b, lng_b] = coord_b.map((n) => n * Math.PI/180)

  // Earth radius
  const R = 6371 // km - Radius of earth

  // sub calculations
  const halfRadDiff = (a, b) => (a-b)/2
  const sin2 = (x) => Math.pow(Math.sin(x), 2)

  const inKM = 2*R * Math.asin(
    Math.sqrt(
      sin2(halfRadDiff(lat_a, lat_b)) +
        Math.cos(lat_a) * Math.cos(lat_b) *
          sin2(halfRadDiff(lng_a, lng_b))
    )
  )

  // Limit to 2 decimals.
  const inMeters = Math.round(inKM * precision * 100) / 100

  return inMeters
}

export const blobToBase64 = (blob, keepDataUrl=false) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onloadend = () => {
      if(keepDataUrl){
        resolve(reader.result)
      }else{
        resolve(reader.result.split(',')[1])
      }
    }
    reader.onerror = reject
    reader.readAsDataURL(blob)
  })
}

export const capitalize = (string) => string.charAt(0).toUpperCase() + string.slice(1)