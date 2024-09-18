import { Component } from '@angular/core';

@Component({
  selector: 'app-sidemenu-component',
  standalone: true,
  imports: [],
  templateUrl: './sidemenu-component.component.html',
  styleUrl: './sidemenu-component.component.css'
})
export class SidemenuComponentComponent {
  userName: string="Pablo Ávila";
  theme: string="";
  widthMenu: number= 30;
  visibleMenu: boolean= true;
  coloMenu: boolean=false;
  imageUrl: string = 'https://pbs.twimg.com/profile_images/1396036445631098884/TKjDFy2J_400x400.jpg';
  setVisibilityMenu():boolean{
    this.visibleMenu = !this.visibleMenu;// flase -> true true.>false
    return this.visibleMenu;
  }

  setThemeColor(color: string): void {
    if (color=== 'lightgreen'&&this.coloMenu==true) {
      color = 'lightblue';
      this.coloMenu= false;
    }else{
      this.coloMenu= true;
    }
    this.theme = color;
    
  }

  setSizesMenu(){
    this.widthMenu+=10;
    if(this.widthMenu > 100){
      this.widthMenu = 30;
    }
  }
  
}
