class RangeValidator {
  constructor(from, to) {
    this.from = from;
    this.to = to;
  }

  get from() {
    return this._from;
  }
  set from(value) {
    if (typeof value !== 'number') {
      throw new TypeError(`From must be a number`);
    }
    if (value >= this._to) {
      throw new RangeError('From cannot be bigger or equal to');
    }
    this._from = value;
  }

  get to() {
    return this._to;
  }
  set to(value) {
    if (typeof value !== 'number') {
      throw new TypeError('To is not a number');
    }

    if (value <= this._from) {
      throw new RangeError('To cannot be smaller or equal from');
    }

    this._to = value;
  }

  getRange() {
    const arrFromRange = [];
    for (let i = this._from; i <= this._to; i++) arrFromRange.push(i);
    return arrFromRange;
  }
}

const range1 = new RangeValidator(-5, 10);
console.log(range1);
console.log(range1.getRange());
