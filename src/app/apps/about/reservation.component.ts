import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ServiceblogService } from '../blog/blog-service.service';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent {
  

  constructor(public service:ServiceblogService) {
    this.service.showEdit=false;
    
  }

}
