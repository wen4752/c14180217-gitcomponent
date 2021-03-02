import { Component, OnInit } from '@angular/core';
import { GlobalvarService } from '../globalvar.service';

@Component({
  selector: 'app-hal3',
  templateUrl: './hal3.component.html',
  styleUrls: ['./hal3.component.css']
})
export class Hal3Component implements OnInit {

  constructor(private globalvar:GlobalvarService) { }
  data=[]
  ngOnInit() {
    let temp=this.globalvar.getData()
    for(var i=0;i<this.globalvar.getData().length;i++){
      if(temp[i].favorite=="ya"){
        this.data.push(temp[i])
      }
    }
  }

}