import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
      <nav-bar></nav-bar>
      <h1>Hello {{name}}</h1>
    `,
})
export class AppComponent  {
  name = 'Steve';

  public isActive(): boolean {
    return true;
  }

}
