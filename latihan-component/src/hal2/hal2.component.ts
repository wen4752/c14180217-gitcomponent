import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GlobalvarService } from '../globalvar.service';

@Component({
  selector: 'app-hal2',
  templateUrl: './hal2.component.html',
  styleUrls: ['./hal2.component.css']
})
export class Hal2Component implements OnInit {

  constructor(private aRoute:ActivatedRoute,private globalvar:GlobalvarService) { }
  paramIndex
  data
  ngOnInit() {
    this.paramIndex=this.aRoute.snapshot.paramMap.get("index")
    this.data=this.globalvar.getbyIndex(this.paramIndex)
  }

  status(){
    this.globalvar.updatestatus(this.paramIndex)
    this.data=this.globalvar.getbyIndex(this.paramIndex)
  }

}