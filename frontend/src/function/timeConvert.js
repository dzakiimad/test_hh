
export function   secondsToDhms(seconds) {

    seconds = Number(seconds)
    var d = Math.floor(seconds / (3600 * 24))
    var h = Math.floor((seconds % (3600 * 24)) / 3600)
    var m = Math.floor((seconds % 3600) / 60)
    var dDisplay = d > 0 ? d + " hari " : ""
    var hDisplay = h > 0 ? h + " jam " : ""
    var mDisplay = m > 0 ? m + " menit " : ""
    return dDisplay + hDisplay + mDisplay
  }