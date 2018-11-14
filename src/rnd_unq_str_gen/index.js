function lookupNum(idx) {
  switch (idx) {
    case 0: return '1';
    case 1: return '9';
    case 2: return '0';
    case 3: return '2';
    case 4: return '5';
    case 5: return '8';
    case 6: return '4';
    case 7: return '3';
    case 8: return '7';
    case 9: return '6';
  }
}

function lookupAlphaNum(idx) {
  switch (idx) {
    case 0: return 'X';
    case 1: return 'j';
    case 2: return 'N';
    case 3: return '6';
    case 4: return '7';
    case 5: return '0';
    case 6: return 'a';
    case 7: return 'k';
    case 8: return 'V';
    case 9: return 'd';
    case 10: return 'U';
    case 11: return 'c';
    case 12: return 'M';
    case 13: return 'B';
    case 14: return '8';
    case 15: return 'S';
    case 16: return 'e';
    case 17: return 'q';
    case 18: return 'K';
    case 19: return 's';
    case 20: return 'A';
    case 21: return 'n';
    case 22: return 'E';
    case 23: return 't';
    case 24: return '5';
    case 25: return 'w';
    case 26: return 'v';
    case 27: return 'o';
    case 28: return 'r';
    case 29: return 'u';
    case 30: return 'p';
    case 31: return 'i';
    case 32: return 'O';
    case 33: return '9';
    case 34: return 'F';
    case 35: return 'b';
    case 36: return 'g';
    case 37: return 'H';
    case 38: return 'Q';
    case 39: return '1';
    case 40: return 'x';
    case 41: return '3';
    case 42: return 'R';
    case 43: return 'I';
    case 44: return 'P';
    case 45: return 'J';
    case 46: return 'D';
    case 47: return '4';
    case 48: return 'm';
    case 49: return '2';
    case 50: return 'y';
    case 51: return 'h';
    case 52: return 'T';
    case 53: return 'f';
    case 54: return 'L';
    case 55: return 'C';
    case 56: return 'z';
    case 57: return 'Z';
    case 58: return 'W';
    case 59: return 'Y';
    case 60: return 'l';
    case 61: return 'G';
  }
}

function lookupLowerChars(pos2, pos3, pos4, pos5) {
  return lookupAlphaNum(pos2) + lookupAlphaNum(pos3) + lookupAlphaNum(pos4) + lookupAlphaNum(pos5);
}

function fillLowerChars() {
  let arr = [];
  for (let pos2 = 0; pos2 < 62; pos2++) {
    for (let pos3 = 0; pos3 < 62; pos3++) {
      for (let pos4 = 0; pos4 < 62; pos4++) {
        for (let pos5 = 0; pos5 < 62; pos5++) {
          arr.push(lookupLowerChars(pos2, pos3, pos4, pos5));
        }
      }
    }
  }
  return arr;
}

var _lowerCharsArr = fillLowerChars();
const _lowerCharsLen = _lowerCharsArr.length;

let _pos0Num = 0;
let _pos1Num = 0;
// let _pos2AlphaNum = 0;
let _lowerCharsIdx = 0;

function lookupUpperChars() {
  return lookupNum(_pos0Num) + lookupNum(_pos1Num);
}

let _upperChars = lookupUpperChars();

export function generate() {
  var res = _upperChars + _lowerCharsArr[_lowerCharsIdx++];
  if (_lowerCharsIdx % _lowerCharsLen === 0) {
    _lowerCharsIdx = 0;
    _pos1Num += 1;
    if ((_pos1Num % 10) === 0) {
      _pos1Num = 0;
      _pos0Num += 1;
      if ((_pos0Num % 10) === 0) {
        _pos0Num = 0;
      }
    }
    _upperChars = lookupUpperChars();
  }
  return res;
}
