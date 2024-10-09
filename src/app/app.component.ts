import { Component } from '@angular/core';
import { Post } from './post';
import jsonFile from '../../public/db.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'praticaS9L3';
  posts: Post[] = []

  posts:{id: number, title:string, body: string, userId: number, tags: string[], active: boolean}= jsonFile
  }
}
