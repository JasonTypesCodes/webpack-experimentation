import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<h1>{{helloMessage}}</h1>'
})
export class RootComponent {
  private helloMessage : string = 'Hello From Angular2!';
}
