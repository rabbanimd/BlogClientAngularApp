import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Blog } from 'src/app/model/blog';
import { PageResponse } from 'src/app/model/page-response.dto';
import serverConfig from '../config/server-config.json';

@Injectable({
  providedIn: 'root'
})


export class DataServiceService {

  server_url = `http://`+serverConfig.cred.server_address+':'+ serverConfig.cred.server_port + '/api/';

  constructor(private http:HttpClient) {}

  getAll() {
    let url = this.server_url + `posts`;
    return this.http.get<PageResponse>(url);
  }

  savePost(newPost : Blog) {
    let url = this.server_url + `posts`;
    return this.http.post<Blog>(url, newPost);
  }

  getContentById(postId:number){
    let url = this.server_url + `posts/`+postId;
    return this.http.get<Blog>(url);
  }

}
