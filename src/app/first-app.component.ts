import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
<h1>Root component</h1>
<fa-lifecycle *ngIf="!delete" [bindable]="boundValue">
<p #boundContent>{{test}}</p>
</fa-lifecycle>
<button (click)="delete =true">Click to delete</button>
<button (click)="test = 'Changed value'">Click to change content</button>
<button (click)="boundValue=2000">Click to change binding</button>
`,
  styles: [``]
})
export class AppComponent {
delete = false;
test = 'Starting value';
boundValue =1000;
}
