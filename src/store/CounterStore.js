import { observable, makeObservable,action,autorun,reaction,when } from "mobx";
import { Alert } from "react-native";

class CounterStore{
         counter=0;

         constructor(){
        
            makeObservable(this,{
                counter:observable,
                increment:action.bound,
                decrement:action.bound
            })
            /*when(
                ()=>this.counter===5,
                ()=>Alert.alert(`Tebrikler Counter: ${this.counter}`)
              )*/
            /*
            reaction(
                ()=>this.counter,
                (counter)=>{if(counter===5){
                  Alert.alert(`Tebrikler Counter: ${this.counter}`)
                }}
              ) 
            */
            /*autorun(()=>{
                Alert.alert(`${this.counter}`)
            })*/
         }

         increment () {this.counter++;}

         decrement () {this.counter--;}
}

export default new CounterStore();