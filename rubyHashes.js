class Hash {
  constructor(x){
    this.object = x
  }

  isEmpty(){
    if (Object.keys(this.object).length > 0){
      return true }
    else {
      return false
        }
  }
  isKey(testKey){
    for(var key in this.object){
      if (key == testKey){
        return true
      }
    }
  return false
  }
  merge(anotherHash){
    let newObject = new Object
    for (var key in this.object){
      newObject[key] = this.object[key]
    for (var key in anotherHash.object){
      if (this.isKey(key) == false){
        newObject[key] = anotherHash.object[key];
      }

    }
    // return newObject
  }
  var c = new Hash(newObject)
// return result
return c
  }
    invert(){
      let result = {}
      for (var key in this.object){
        result[this.object[key]] = key
      }
      return result
    }
    keys(){
      let result = []
      for(var key in this.object){
        result.push(key)
      }
      return result
    }
    values(){
      let result = []
      for(var key in this.object){
        result.push(this.object[key])
      }
      return result
    }
    inspect(){
      let result = '{'
      for(var key in this.object){
        result += `${key}=>${this.object[key]}, `
    }
      result  += "}"
      return result
}
  }

// var a = new Hash({a:1,b:2,c:3})
// var b = new Hash({c:3,d:4,e:5})
// // console.log();
//
// // console.log(a);
// // console.log(a.isKey("a"))
// // console.log(a.isKey("d"))
// c =((a.merge(b)));
// // console.log(newO);
// // console.log(newO.invert());
// console.log(c.inspect());
// console.log(c.invert())
