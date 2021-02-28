import {Component} from '@angular/core'

@Component({

    selector:'dash-board',
    templateUrl:'./dashboard.component.html',
    styleUrls:['./dash-board.component.css']
})
export class DashBoardComponent{

  //carousel
  slides = [{'image': ''},{'image': ''},{'image': ''},{'image': ''},{'image': ''},{'image': ''},{'image': ''},{'image': ''},{'image': ''},{'image': ''}];

 
 
  SLIDELANDS = [
    {locale:"Malbereign 67%",perc:"67"},
    {locale:"Malborough 69%",perc:"69"},
    {locale:"Borrowdale 70%",perc:"70"},
    {locale:"Mnt Pleasant 90%",perc:" 90"},
    {locale:"Chisipite 55%",perc:" 55"},
    {locale:"Damofalls 66%",perc:" 66"},
    {locale:"Greendale 22%",perc:" 22"},
    {locale:"Waterfalls 19%",perc:" 19"},
    {locale:"GlenView 12%",perc:" 12"},
    {locale:"Braeside 10%",perc:" 10"},
    {locale:"Croborough 27%",perc:"27"},
    {locale:"Arundel 79%",perc:"79"},
    {locale:"Avondale 37%",perc:"37"},
    {locale:"Craneborn 40%",perc:" 40"},
    {locale:"Chitungwiza 75%",perc:" 75"},
    {locale:"Seke 26%",perc:" 26"},
    {locale:"Eastlea 52%",perc:" 52"},
    {locale:"Warren Park 9%",perc:" 9"},
    {locale:"Budiriro 10%",perc:" 10"},
    {locale:"Glendale 30%",perc:" 30"}
  ]
  

  indice = Math.floor(Math.random()*this.SLIDELANDS.length)
  index = Math.floor(Math.random()*this.SLIDELANDS.length)
  
  
}
