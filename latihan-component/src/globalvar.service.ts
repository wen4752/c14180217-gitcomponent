import { Injectable } from '@angular/core';

@Injectable()
export class GlobalvarService {

  constructor() { }
  private data=[]
  public addData(data){
    this.data.push(data)
  }
  public getData(){
    return this.data
  }
  public getbyIndex(index){
    return this.data[index]
  }
  public updatestatus(index){
    if(this.data[index].favorite=="ya"){
      this.data[index].favorite="tidak"
    }else{
      this.data[index].favorite="ya"
    }
  }
  
}