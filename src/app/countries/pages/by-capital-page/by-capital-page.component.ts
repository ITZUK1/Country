import { Component } from '@angular/core';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles:[]
})
export class ByCapitalPageComponent {

  searchBycapital(term: string): void {
    console.log('desde by capitalpage')
    console.log({ term });
  }
  

}
