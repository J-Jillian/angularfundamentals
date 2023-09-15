import { Component } from "@angular/core";

@Component({
  selector:'events-list',
  templateUrl:'./events-list-component.html'
})

export class EventsListComponent{
  event = {
    id: 1,
    name:'Angular Connect',
    date: '9/09/2028',
    time:'10:00 am',
    price: '599,99',
    imageUrl:'/assets/images/green-pathern.jpg',
    location: {
      address:'1057 DT',
      city:'London',
      country:'Engalnd'
    }

  }

}
