import { Pipe, PipeTransform } from '@angular/core';
import * as numberToWords from 'number-to-words';

@Pipe({
  name: 'numToWord'
})
export class NumToWordPipe implements PipeTransform {

  transform(value: number): string {
    if(value>=0 && value<=1000000){
      return numberToWords.toWords(value);
    }
    else{
      return 'InvalidNumber';
    }  
}
}
