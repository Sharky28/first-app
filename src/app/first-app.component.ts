import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
<h1>Root component</h1>
<fa-databinding></fa-databinding>
`,
  styles: [`
    h1 {
      color: red;
}`]
})
export class AppComponent {

}
