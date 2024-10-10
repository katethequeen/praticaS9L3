import { iPost } from '../../Models/post';
import { iJSONresponse } from './../../Models/jsonresponse';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  postInEvidenza!: iPost;
  arrPosts: iPost[] = [];

  ngOnInit(): void {
    fetch('db.json')
      .then((res) => <Promise<iJSONresponse>>res.json())
      .then((res) => {
        console.log(res);

        this.postInEvidenza = res.posts[0];
        this.arrPosts = res.posts.slice(0, 4);
      })
      .catch((error) => console.log(error));
  }
}
