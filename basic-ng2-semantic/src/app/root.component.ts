import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="ui center aligned container">
      <h1 class="ui icon header">
        <i class="code icon"></i>
        <div class="content">
          {{helloMessage}}
          <div class="sub header">{{subMessage}}</div>
        </div>
      </h1>
      <hr>
    </div>
  `
})
export class RootComponent {
  private helloMessage : string = 'Angular2 with SemanticUI!';
  private subMessage : string = 'This is a project all about learning stuff...';
}
