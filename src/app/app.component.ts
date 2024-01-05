import { Component, Input, Output } from '@angular/core';
import { NumToWordPipe } from './num-to-word.pipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers:[NumToWordPipe]
})
export class AppComponent {
  title = 'NumberToWords';
  @Input()
  nums!:number;
  
  @Output()
  Word!:string;

  constructor(private numToWordPipe : NumToWordPipe){}
  ngOninit(){
    console.log("OnInit");
  }
  
  convertToWords(){
    
      this.Word = this.numToWordPipe.transform(this.nums);
      console.log(this.Word);
    
    
  }
}
