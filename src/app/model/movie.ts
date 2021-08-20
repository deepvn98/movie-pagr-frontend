import {UserApp} from "./user-app";
import {Cast} from "./cast";
import {Director} from "./director";

export interface Movie {
  id:number,
  nameMovie:String,
  url:String,
  img:String,
  userApp:UserApp,
  casts:Cast[],
  directors:Director[]
}
