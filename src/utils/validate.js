export function matchPwd(rule,value,callback){
  if(value === ''){
    callback(new Error("输入不能为空！"))
  }else if(value != this.form.password){
    console.log(value+'#');
    console.log(this.form.password+'!');
    callback(new Error("两次输入不一致"));
  }else{
    callback()
  }
}

