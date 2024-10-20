import { Component, OnInit } from '@angular/core';
import { SharedDataService } from '../../services/shared-data/shared-data.service';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { Bet } from '../../models/Bet';

@Component({
  selector: 'app-my-bets',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './my-bets.component.html',
  styleUrl: './my-bets.component.scss'
})
export class MyBetsComponent implements OnInit{

  constructor(private sharedDataService: SharedDataService) {}

  bets: Bet[] = [];

  ngOnInit(): void {
    this.sharedDataService.data$.subscribe(
      (data:any) => {
        this.bets = data;
      }
    )
  }

}
