
import {useState , useEffect} from 'react'

const useLocalStorage =(key, initialValue)=> {
const [value , setValue]= useState(()=> {

try  {
    const localValue = window.localStorage.getItem(key);
    return localValue? JSON.parse(localValue): initialValue ;

} catch(erro){
    return initialValue;
}
});
useEffect(()=>{
    window.localStorage.setItem(key, JSON.stringify(value));
}, [key,value]);

return[value,setValue];

}; //end of useLocalStorage function

export default useLocalStorage;