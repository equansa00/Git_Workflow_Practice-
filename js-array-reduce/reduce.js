function extractValue(arr, key) {
    return arr.map(function(item) {
      return item[key];
    });
  }
  
  function vowelCount(str) {
    const vowels = 'aeiou';
    let strToLower = str.toLowerCase();
    let count = {};
    for(let char of strToLower) {
      if(vowels.includes(char)) {
        count[char] = (count[char] || 0) + 1;
      }
    }
    return count;
  }
  
  function addKeyAndValue(arr, key, value) {
    return arr.map(function(item) {
      item[key] = value;
      return item;
    });
  }
  
  function partition(arr, callback) {
    return arr.reduce(function(acc, val) {
      if(callback(val)) {
        acc[0].push(val);
      } else {
        acc[1].push(val);
      }
      return acc;
    }, [[],[]]);
  }
  function extractValue(arr, key) {
    return arr.map(function(item) {
      return item[key];
    });
  }
  
  function vowelCount(str) {
    const vowels = 'aeiou';
    let strToLower = str.toLowerCase();
    let count = {};
    for(let char of strToLower) {
      if(vowels.includes(char)) {
        count[char] = (count[char] || 0) + 1;
      }
    }
    return count;
  }
  
  function addKeyAndValue(arr, key, value) {
    return arr.map(function(item) {
      item[key] = value;
      return item;
    });
  }
  
  function partition(arr, callback) {
    return arr.reduce(function(acc, val) {
      if(callback(val)) {
        acc[0].push(val);
      } else {
        acc[1].push(val);
      }
      return acc;
    }, [[],[]]);
  }
    