function produceDrivingRange(blockRange) {
  return (startBlk, endBlk) => {
    let result = parseInt(endBlk) - parseInt(startBlk);
    if (result <= blockRange) {
      let b = blockRange - result;
      return `within range by ${b}`
    } else if (result > blockRange) {
      let b = result - blockRange
      return `${b} blocks out of range`
    }
  }
}

function produceTipCalculator(percentage) {
  return (billAmt) => billAmt * percentage
}

function createDriver() {
  let driverId = 0;
  return class {
    constructor(name) {
      this.id = ++driverId;
      this.name = name;
    }
  }
}
