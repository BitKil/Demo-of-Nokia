const arr = [1, [2, 3, [4, 5]]]
const res = []
function a (temp) {
  for (let i = 0; i < temp.length; i++) {
    if (!(temp[i] instanceof Array)) {
      res.push(temp[i])
    }
    else {
      a(temp[i])
    }
  }
}
a(arr)
console.log(res)