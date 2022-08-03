import { Component, OnInit } from '@angular/core';
import {ServiceService} from '../../app/services/service.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private http:ServiceService) { }

  heroImage='';
  title='';

  ngOnInit(): void {

    this.http.gethomepage().subscribe(res=>{

      this.heroImage = res.data.attributes.HeroImage.data.attributes.formats.large.url;



      this.title=res.data.attributes.Title;




 })


  }

}
