import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalvarService } from '../../globalvar.service';

@Component({
  selector: 'app-hal1',
  templateUrl: './hal1.component.html',
  styleUrls: ['./hal1.component.css']
})
export class Hal1Component implements OnInit {
  judul=""
  isi=""
  tanggal=""
  constructor(private globalvar:GlobalvarService,private router:Router) { }

  data
  ngOnInit() {
    this.data=this.globalvar.getData()
  }
  tambah(){
    let dataBaru={
      judul:this.judul,
      isi:this.isi,
      tanggal:this.tanggal,
      favorite:"tidak"
    }
    this.globalvar.addData(dataBaru)
    this.data=this.globalvar.getData()    
  }
  detail(index){
    this.router.navigate(['/hal2/'+index])
  }

}