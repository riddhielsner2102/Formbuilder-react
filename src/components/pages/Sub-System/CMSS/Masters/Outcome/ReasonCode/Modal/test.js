const arr1 = [12, 54, 2, 4, 6, 34, 3];
const arr2 = [54, 2, 5, 12, 4, 1, 3, 34];
const unCommonArray = (first, second) => {
   const res = [];
   for(let i = 0; i < first.length; i++){
      if(second.indexOf(first[i]) === -1){
         res.push(first[i]);
      }
   };
   for(let j = 0; j < second.length; j++){
      if(first.indexOf(second[j]) === -1){
         res.push(second[j]);
      };
   };
   return res;
};
console.log(unCommonArray(arr1, arr2));