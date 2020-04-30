import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-block-view',
  templateUrl: './block-view.component.html',
  styleUrls: ['./block-view.component.scss']
})

export class BlockViewComponent implements OnInit {
  
  @Input() 
  public block;
  public selectedBlock;

  constructor() { }

  ngOnInit(): void {
  }

}
