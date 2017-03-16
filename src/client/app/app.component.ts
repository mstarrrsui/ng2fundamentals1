import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
      <nav-bar></nav-bar>
      <hops-list></hops-list>
    `,
})
export class AppComponent  {
  name = 'Steve';

  public isActive(): boolean {
    return true;
  }

}
