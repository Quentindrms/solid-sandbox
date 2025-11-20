import { Controller } from "../libs/Controller";

export class GlobalController extends Controller{

    hello(){
        this.response.send('Hello world');
    }

}