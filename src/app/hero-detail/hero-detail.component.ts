import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Hero } from '../hero';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  constructor(private messageService: MessageService) { }

  ngOnInit() {
   
  }
  
  @Input() hero: Hero;

  ngOnChanges(){
    this.messageService.add('Hero Detail: Loaded - ' + this.hero.name);
  }
}
