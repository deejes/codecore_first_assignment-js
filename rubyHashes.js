class Hash {
  constructor(x){
    this.object = x
  }

  isEmpty(){
    if (Object.keys(myObj).length > 0){
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
    for (var key in anotherHash){
      if (this.isKey(key) == false){
        this.object[key] = anotherHash[key];
      }
    }
    return this.object
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

// console.log(a);
// console.log(a.isKey("a"))
// console.log(a.isKey("d"))
// console.log(a.merge({c:3,d:4,e:5}));
// console.log(a.invert());
// console.log(a.inspect());
