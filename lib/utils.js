const getDocStatus = (status)=>  {
  if (status.pending === true && !status.txstamp) {
    return 'paymentRequired'
  } else if (status.txstamp && !status.blockstamp) {
    return 'confirming'
  } else if (status.blockstamp) {
    return 'confirmed'
  }
}


module.exports = {
  getDocStatus
}
