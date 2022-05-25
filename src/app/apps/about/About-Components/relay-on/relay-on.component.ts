import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpHeaders, HttpClient } from "@angular/common/http";
import { Router } from '@angular/router';
import { __values } from 'tslib';

@Component({
  selector: 'app-relay-on',
  templateUrl: './relay-on.component.html',
  styleUrls: ['./relay-on.component.css']
})
export class RelayOnComponent implements OnInit {

  ShowDetails1 = false;
  ShowDetails2 = false;
  ShowDetails3 = false;
  ShowDetails4 = false;
  ShowDetails5 = false;
  ShowDetails6 = false;
  ShowDetails7 = false;
  ShowDetails8 = false;
  ShowDay1 = false;
  ShowDay2 = false;
  ShowDay3 = false;
  ShowDay4 = false;
  ShowDay5 = false;
  ShowDay6 = false;
  day: any;
  num: any;

  relayOn = [
    {
      field: 'Mercredi',
      slot1: '8h - 10h',
      slot2: '10h30h - 12h30',
      slot3: '13h30 - 15h30',
      slot4: '16h - 18h',
    },
    {
      field: 'Jeudi',
      slot1: '8h - 10h',
      slot2: '10h30h - 12h30',
      slot3: '13h30 - 15h30',
      slot4: '16h - 18h',
    },
    {
      field: 'Vendredi',
      slot1: '8h - 10h',
      slot2: '10h30h - 12h30',
      slot3: '13h30 - 15h30',
      slot4: '16h - 18h',
    },
    {
      field: 'Samedi',
      slot1: '8h - 10h',
      slot2: '10h30h - 12h30',
      slot3: '13h30 - 15h30',
      slot4: '16h - 18h',
    },
    {
      field: 'Dimanche',
      slot1: '8h - 10h',
      slot2: '10h30h - 12h30',
      slot3: '13h30 - 15h30',
      slot4: '16h - 18h',
    },
    {
      field: 'Lundi',
      slot1: '8h - 10h',
      slot2: '10h30h - 12h30',
      slot3: '13h30 - 15h30',
      slot4: '16h - 18h',
    },
  ];


  constructor(public http: HttpClient,
    private router: Router) { }

  ngOnInit(): void {
  }

  showLocation(num: any) {
    // console.log("numéro transmit  >>> ", num);
    this.ShowDetails1 = false;
    this.ShowDetails2 = false;
    this.ShowDetails3 = false;
    this.ShowDetails4 = false;
    if (num == 1) {
      this.ShowDetails1 = true;
    };
    if (num == 2) {
      this.ShowDetails2 = true;
    };
    if (num == 3) {
      this.ShowDetails3 = true;
    };
    if (num == 4) {
      this.ShowDetails4 = true;
    };
  }

  showDay(day: any) {
    // console.log("jour transmit  >>> ", day);
    this.ShowDay1 = false;
    this.ShowDay2 = false;
    this.ShowDay3 = false;
    this.ShowDay4 = false;
    this.ShowDay5 = false;
    this.ShowDay6 = false;
    if (day == "Dimanche") {
      this.ShowDay1 = true;
    };
    if (day == "Mercredi") {
      this.ShowDay2 = true;
    };
    if (day == "Jeudi") {
      this.ShowDay3 = true;
    };
    if (day == "Vendredi") {
      this.ShowDay4 = true;
    };
    if (day == "Samedi") {
      this.ShowDay5 = true;
    };
    if (day == "Lundi") {
      this.ShowDay6 = true;
    };
  }

  showDetails(num: any) {
    this.ShowDetails5 = false;
    this.ShowDetails6 = false;
    this.ShowDetails7 = false;
    this.ShowDetails8 = false;
    if (num == 5) {
      this.ShowDetails5 = true;
    };
    if (num == 6) {
      this.ShowDetails6 = true;
    };
    if (num == 7) {
      this.ShowDetails7 = true;
    };
    if (num == 8) {
      this.ShowDetails8 = true;
    };
  }

  onSubmit(form: NgForm) {
    form.value.dimanche =  this.ShowDay1;
    form.value.mercredi =  this.ShowDay2;
    form.value.jeudi =  this.ShowDay3;
    form.value.vendredi =  this.ShowDay4;
    form.value.samedi =  this.ShowDay5;
    form.value.lundi =  this.ShowDay6;
    form.value.Vence =  this.ShowDetails1;
    form.value.Tourrettes =  this.ShowDetails2;
    form.value.Lacolle =  this.ShowDetails3;
    form.value.bar =  this.ShowDetails4;
    form.value.huit =  this.ShowDetails5;
    form.value.dixtrente =  this.ShowDetails6;
    form.value.treizetrente =  this.ShowDetails7;
    form.value.seize =  this.ShowDetails8;
    console.log(form.value);
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }
    if (form.valid) {
      this.http
        .post("https://formspree.io/f/xyyozook", form.value, httpOptions).subscribe(results => {
          // console.log(results)
        });
      this.router.navigate(['/send']);
    }
    alert("Super, Merci pour votre inscription. Nous nous chargeons de vous envoyer rapidement une confirmation !");
  }
}
