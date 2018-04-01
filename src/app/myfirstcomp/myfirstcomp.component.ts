import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-myfirstcomp',
  templateUrl: './myfirstcomp.component.html',
  styleUrls: ['./myfirstcomp.component.css']
})
export class MyfirstcompComponent implements OnInit {
    
       myName="Brandon";
       onSubmit(value:any)
       {
         console.log(value);
       }


      ngOnInit()
      {

      }
}
