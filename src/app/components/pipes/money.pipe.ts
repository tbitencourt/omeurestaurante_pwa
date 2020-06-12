import { Pipe, PipeTransform, Injectable } from '@angular/core';

@Injectable()
@Pipe({ name: '$' })
export class MoneyPipe implements PipeTransform {
  transform(value: number, symbol: string = null, decimalDelimiter: string = ",", thousandsDelimiter: string | null = "." ): any {
    if(!value) return symbol ? symbol + " -" : "";

    let roundValue = value.toFixed(Math.max(0, ~~2));
    let valueToReturn = roundValue.replace('.', decimalDelimiter);

    if(thousandsDelimiter) valueToReturn = this.setThousandsSign(valueToReturn, thousandsDelimiter);
    return symbol ? symbol + " " + valueToReturn : valueToReturn;
  }

  private setThousandsSign(value: string, delimiter: string): string {
    return value.split("").reverse().map((str, index) => {
      if(index <= 3) return str;

      return (index%3)===0 ? str+delimiter : str;
    }).reverse().join("");
  }
}