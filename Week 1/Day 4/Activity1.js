function concat(arrays) {
    let totalLength = arrays.reduce((acc, curr) => acc + curr.length, 0);
    let result = new Uint8Array(totalLength);
    let offset = 0;
    arrays.forEach(array => {
      result.set(array, offset);
      offset += array.length;
    });
  
    return result;
  }