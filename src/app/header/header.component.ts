import { Component, OnInit } from '@angular/core';
import {ServiceService} from '../../app/services/service.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private http:ServiceService) { }
  // heroImage = "https://greenwhale.eu/wp-content/uploads/2021/11/biciu-vasko-drobele-maisto-plevele-panaudojimas-1024x1024.jpg"

  // heroImage = "./assets/greenAroundTheWorld.jpg";
  // heroImage = "./assets/heroImage_beewax_wrap.webp";


  // logo="url(data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%280, 0, 0, 0.55%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e);"

  heroImage='';
  logo=''
  title=''
  name=''

  ngOnInit(): void {

    this.http.gethomepage().subscribe(res=>{

         this.heroImage = res.data.attributes.HeroImage.data.attributes.formats.large.url;

         this.logo = res.data.attributes.logo.data.attributes.url;

         this.title=res.data.attributes.Title;

         this.name=res.data.attributes.Companyname;


    })

    console.log(this.logo);


  }

}
