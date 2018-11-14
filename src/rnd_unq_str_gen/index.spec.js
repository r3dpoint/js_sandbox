import { expect } from 'chai';
import * as funcs from './index';

describe('generate', function () {
  it('generates a 6 character alpha numeric string', function() {
    let act = funcs.generate();
    expect(act).to.have.a.lengthOf(6);
    expect(act).to.match(/^[a-zA-Z0-9]*$/);
  });

  it.only('generates a unique and random string', function() {
    this.timeout(10000);
    let max = 1000000;
    let set = new Set();
    for (let i = 0; i < max; i++) {
      let act = funcs.generate();
      expect(set.has(act)).to.equal(false);
      set.add(act);
      expect(set.has(act)).to.equal(true);
    }
    expect(set.size).to.equal(max);
  });

  it('generates a (unique and) random string a lot of times', function () {
    console.log("uniqStrS=" + funcs.generate());
    let max = 100000000;
    console.log('max=' + max);
    let dStart = Date.now();
    for (let i = 0; i < max; i++) {
      // console.log(funcs.generate());
      funcs.generate();
    }
    let dEnd = Date.now();
    console.log('dStart=' + dStart);
    console.log('dEnd=' + dEnd);
    console.log('elapsed=' + (dEnd - dStart));
    console.log("uniqStrE=" + funcs.generate());
  });
});
