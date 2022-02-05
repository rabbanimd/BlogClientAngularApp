import { Component, OnInit } from '@angular/core';
import { Blog } from 'src/app/model/blog';
import { AngularEditorConfig } from '@kolkov/angular-editor';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  error_message = '';

  newPost : Blog = {};

  MAX_TITLE_LENGTH = 255;
  MIN_TITLE_LENGTH = 2;
  MAX_DESC_LENGTH = 500;
  MIN_DESC_LENGTH = 10;
  MAX_CONTENT_LENGTH = 3000;
  MIN_CONTENT_LENGTH = 10;
  count_title = 0;
  count_desc = 0;
  count_content = 0;



  constructor() {
  }

  
  
  ngOnInit(): void {

    this.newPost.title = localStorage.getItem('post_title') || undefined;
    this.newPost.description = localStorage.getItem('post_desc') || undefined;
    this.newPost.content = localStorage.getItem('post_content') || undefined;
  }

  titleChanged(){
    this.count_title = this.newPost.title?.length || 0;
    localStorage.setItem('post_title', this.newPost.title || '');

  }
  descChanged(){
    this.count_desc = this.newPost.description?.length || 0;
    localStorage.setItem('post_desc', this.newPost.description || '')
  }

  contentChanged() {
    this.count_content = this.newPost.content?.length || 0;
    localStorage.setItem('post_content', this.newPost.content || '')
  }


  savePost(){
    this.newPost.title = this.newPost.title?.trim();
    this.newPost.description = this.newPost.description?.trim();
    this.newPost.content = this.newPost.content?.trim();
    if((this.newPost.title?.length || 0) < this.MIN_TITLE_LENGTH){
      this.error_message = 'Title length must be greater than 2.'
    }else if((this.newPost.title?.length || 0) >= this.MAX_TITLE_LENGTH){
      this.error_message = 'Title length exceeded !';
    }else if((this.newPost.description?.length || 0) < this.MIN_DESC_LENGTH){
      this.error_message = 'Description length must be greater than '+this.MIN_DESC_LENGTH;
    }else if((this.newPost.description?.length || 0) > this.MAX_DESC_LENGTH){
      this.error_message = 'Description length exceeded !';
    }else if((this.newPost.content?.length || 0) < this.MIN_CONTENT_LENGTH){
      this.error_message = 'Content length must be greater than '+this.MIN_CONTENT_LENGTH;
    }else if((this.newPost.content?.length || 0) > this.MAX_CONTENT_LENGTH){
      this.error_message = 'Content length exceeded !';
    }
    else{
      // sAVE post
      console.log("Accepted !");
      this.error_message = '';
    }
  }




editorConfig: AngularEditorConfig = {
    editable: true,
      spellcheck: true,
      height: 'auto',
      minHeight: '0',
      maxHeight: 'auto',
      width: 'auto',
      minWidth: '0',
      translate: 'yes',
      enableToolbar: true,
      showToolbar: true,
      placeholder: 'Enter text here...',
      defaultParagraphSeparator: '',
      defaultFontName: '',
      defaultFontSize: '',
      fonts: [
        {class: 'arial', name: 'Arial'},
        {class: 'times-new-roman', name: 'Times New Roman'},
        {class: 'calibri', name: 'Calibri'},
        {class: 'comic-sans-ms', name: 'Comic Sans MS'}
      ],
      customClasses: [
      {
        name: 'quote',
        class: 'quote',
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: 'titleText',
        class: 'titleText',
        tag: 'h1',
      },
    ],

    // uploadUrl: 'v1/image',             Set image upload endpoint https://api.exapple.com/v1/image/upload and return response with imageUrl key. {"imageUrl" : }
    // upload : (file: File) => {},       Set image upload function

    uploadWithCredentials: false,
    sanitize: true,
    toolbarPosition: 'top',
    toolbarHiddenButtons: [
      [
        'undo',
        'redo',
        'bold',
        'italic',
        'underline',
        'strikeThrough',
        'subscript',
        'superscript',
        'justifyLeft',
        'justifyCenter',
        'justifyRight',
        'justifyFull',
        'indent',
        'outdent',
        'insertUnorderedList',
        'insertOrderedList',
        'heading',
        'fontName'
      ],
      [
        'fontSize',
        'textColor',
        'backgroundColor',
        'customClasses',
        'link',
        'unlink',
        'insertImage',
        'insertVideo',
        'insertHorizontalRule',
        'removeFormat',
        'toggleEditorMode'
      ]
    ]
};
  

}
