import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tic-toe',
  templateUrl: './tic-toe.component.html',
  styleUrls: ['./tic-toe.component.scss']
})
export class TicToeComponent implements OnInit {
  public player1="1";
  public player2="2";
  public start=true;
  public gameend=false;
  public multi:number[][] = [[0,0,0],[0,0,0],[0,0,0]]  
  constructor() {
    console.log(this.multi)
   }
  ngOnInit(): void {
  }
  public player: any;
  public count=0
  public color:any;
  public colorarray=['','','','','','','','','']
  action(x:any,y:any,z:any) {

    if(this.multi[x][y]==0) {
      if(this.start) {
        this.player=this.player1
        this.colorarray[z]="pink"
      }
     
      else {
  
        this.player=this.player2
        this.colorarray[z]="blue"
  
      }
      this.multi[x][y]=this.player

      console.log('multi',this.multi)
      this.start=!this.start
      this.count++;
      if(this.count>=3) {
        for (let i = 0; i < 3; i++) {
          if((this.multi[i][0]==this.multi[i][1]) && (this.multi[i][2]==this.multi[i][1]) && (this.multi[i][0]==this.multi[i][2]) && this.multi[i][0]!=0) {
            // console.log("winner row",this.player);
            this.gameend=true
          }
        }
        for (let i = 0; i < 3; i++) {
          if((this.multi[0][i]==this.multi[1][i]) && (this.multi[0][i]==this.multi[2][i]) && (this.multi[1][i]==this.multi[2][i]) && this.multi[0][i]!=0) {
            // console.log("winner col",this.player);
            this.gameend=true
          }
        }
        if((this.multi[0][0]==this.multi[1][1]) && (this.multi[0][0]==this.multi[2][2]) && (this.multi[1][1]==this.multi[2][2]) && this.multi[0][0]!=0 && this.multi[1][1]!=0 && this.multi[2][2]!=0) {
          // console.log("winner diag",this.player);
          this.gameend=true
        }
      }
    }

 
   

    
  }

}
