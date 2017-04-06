import { Component } from '@angular/core';
import { Slides } from 'ionic-angular';

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {
  constructor() {

  }
  
   slides = [
    {
      title: "Computerized Accounting!",
      description: "The <b>Ionic Component Documentation</b> showcases a number of useful components that are included out of the box with Ionic.",
      image: "img/accounting.jpg",
    },
    {
      title: "Mastering Animations",
      description: "<b>Ionic Framework</b> is an open source SDK that enables developers to build high quality mobile apps with web technologies like HTML, CSS, and JavaScript.",
      image: "img/animations.jpg",
    }
];
  
  
  
}
