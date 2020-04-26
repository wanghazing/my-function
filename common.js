/* 
生成指定长度的裴波那契数列
*/
function pbnc(n){
  return [...Array(n).keys()].reduce((pv, cv) => pv.concat([(pv[pv.length-1] || 1) + (pv[pv.length-2] || 0)]), [])
}

/* 
指定childkey树转数组
*/

function treeToArr(childKey){
  return function fn(pv, cv) {
    if(cv[childKey]){
      return pv.concat(cv[childKey].reduce(fn, []))
    }
    return pv.concat([cv])
  }
}
// 使用 tree[childKey].recude(treeToArr('child'), [])

/* 
生成指定前缀的自增器

*/
function unq(prefix, start){
  let s = start || 0
  let p = prefix || 0
  return function(){
    return p + s++
  }
}
/* 
使用
var getUnique = unq('node-', 400)
getUnique() --> node-400
getUnique() --> node-401
getUnique() --> node-402
*/

