import { put, takeLatest } from "redux-saga/effects";
import { REGISTRATION } from "../action/types";


export function* registrationWorker(action){
console.log(action,"registration")
try{
if(action.name==="bruce" && action.email==="abc@gmail.com" && action.password==="123456"){
    localStorage.setItem("name",action.name)
    localStorage.setItem("email",action.email)
    localStorage.setItem("password",action.password)
yield action.onSuccess("Registration SuccessFul")
}else if(action.name==="" ||action.email==="" || action.password===""){
yield action.onError("Empty Fields")
}else{
yield action.onError("Invalid Credentials")

}
}catch(err){
    console.log(err)
yield action.onError("Something went wrong")

}
}

export function* watchRegistrationWorker(){
    yield takeLatest(REGISTRATION,registrationWorker)
}