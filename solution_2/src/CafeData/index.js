
 const mergeArrays = (arrayOne = [], arrayTwo = []) => {
    let res = [];
    res = arrayOne.map(obj => {
       const index = arrayTwo.findIndex(el => el["id"] == obj["place_id"]);
       const { street_no,locality,postal_code,lat,long} = index !== -1 ? arrayTwo[index] : {};
       return {
          ...obj,
          street_no,
          locality,
          postal_code,
          lat,
          long
       };
    });
    return res;
 };

 
 module.exports = {
    mergeArrays
 }