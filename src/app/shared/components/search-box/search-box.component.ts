import { Component, Input } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent {

@Input()
public placeholder:string = '';


  
}
