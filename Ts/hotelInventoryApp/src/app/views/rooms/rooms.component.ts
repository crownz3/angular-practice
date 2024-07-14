import { AfterViewChecked, AfterViewInit, ChangeDetectionStrategy, Component, DoCheck, OnChanges, OnDestroy, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { RoomList, Rooms } from './room'
import { CommonModule } from '@angular/common';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { RoomsListComponent } from './rooms-list/rooms-list.component';
import { HeaderComponent } from '../header/header.component';
@Component({
  selector: 'hinv-rooms',
  standalone: true,
  imports: [CommonModule, ButtonsModule, RoomsListComponent, HeaderComponent],
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RoomsComponent implements OnInit, DoCheck, AfterViewInit, AfterViewChecked ,OnDestroy{
  hide: boolean = true;
  numberOfRooms: number = 10;
  selectedRoom!: RoomList;
  title: string = '';
  rooms: Rooms = {
    availableRooms: 10,
    bookedRooms: 30,
    totalRooms: 40
  };

  roomList: RoomList[] = [
    {
      roomType: 'Deluxe',
      amaeties: 'AC , Free Wifi',
      price: 500,
      photos: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fgos3.ibcdn.com%2F3b71b7c43b6e11ea88740242ac11000a.jpeg&tbnid=hbrOPJv11pAH4M&vet=12ahUKEwiUvc-jqaOHAxVh1TgGHVVDCqEQMygBegQIARBq..i&imgrefurl=https%3A%2F%2Fwww.makemytrip.com%2Fhotels%2Fk_a_hotel-details-tirunelveli.html&docid=xUm2BAVVbZcajM&w=1000&h=667&q=hotel&ved=2ahUKEwiUvc-jqaOHAxVh1TgGHVVDCqEQMygBegQIARBq',
      checkInTime: new Date('11-July-2023'),
      checkOutTime: new Date('14-July-2023')
    },
    {
      roomType: 'Normal',
      amaeties: 'AC',
      price: 300,
      photos: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fcontent.jdmagicbox.com%2Fcomp%2Ftirunelveli%2Fr9%2F0462px462.x462.140602123128.x9r9%2Fcatalogue%2Fk-a-hotel-kulavanikarpuram-tirunelveli-hotels-rs-1001-to-rs-2000--3niybpw.jpg&tbnid=Anf6-z1REUDVnM&vet=12ahUKEwiUvc-jqaOHAxVh1TgGHVVDCqEQMygGegQIARB0..i&imgrefurl=https%3A%2F%2Fwww.justdial.com%2FTirunelveli%2FK-A-Hotel-Near-New-Bustand-Kulavanikarpuram%2F0462PX462-X462-140602123128-X9R9_BZDET&docid=feiXxy2rxtAAVM&w=738&h=653&q=hotel&ved=2ahUKEwiUvc-jqaOHAxVh1TgGHVVDCqEQMygGegQIARB0',
      checkInTime: new Date('12-July-2023'),
      checkOutTime: new Date('13-July-2023')
    },
    {
      roomType: 'Private Suite',
      amaeties: 'AC',
      price: 600,
      photos: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fcontent.jdmagicbox.com%2Fcomp%2Ftirunelveli%2Fr9%2F0462px462.x462.140602123128.x9r9%2Fcatalogue%2Fk-a-hotel-kulavanikarpuram-tirunelveli-hotels-rs-1001-to-rs-2000--3niybpw.jpg&tbnid=Anf6-z1REUDVnM&vet=12ahUKEwiUvc-jqaOHAxVh1TgGHVVDCqEQMygGegQIARB0..i&imgrefurl=https%3A%2F%2Fwww.justdial.com%2FTirunelveli%2FK-A-Hotel-Near-New-Bustand-Kulavanikarpuram%2F0462PX462-X462-140602123128-X9R9_BZDET&docid=feiXxy2rxtAAVM&w=738&h=653&q=hotel&ved=2ahUKEwiUvc-jqaOHAxVh1TgGHVVDCqEQMygGegQIARB0',
      checkInTime: new Date('12-July-2023'),
      checkOutTime: new Date('13-July-2023')
    },
  ]

  @ViewChild(HeaderComponent, { static: true }) headerComponent!: HeaderComponent;

  @ViewChildren(HeaderComponent) headerChildrenComponent!: QueryList<HeaderComponent>
  ngOnInit(): void {
    // console.log(this.headerComponent)

    console.log("Init");

  }

  ngDoCheck(): void {
    console.log("on changes called");

  }

  ngAfterViewInit(): void {
    // console.log(this.headerComponent)
    this.headerComponent.title = 'Room Header ';
    this.headerChildrenComponent.last.title = "Last";
    this.headerChildrenComponent.get(1)!.title = 'second'
    // this.headerChildrenComponent.


  }

  ngAfterViewChecked(): void {

  }

  ngOnDestroy(): void {
    console.log('destroy')
  }

  toggle() {
    this.hide = !this.hide;
    this.title = 'Room List'
  }

  selectRoom(room: RoomList) {
    console.log(room);
    this.selectedRoom = room;
  }

  addRoom() {
    const room: RoomList = {
      roomType: "Normal",
      amaeties: "AC",
      price: 250,
      checkInTime: new Date('11-July-2023'),
      checkOutTime: new Date('14-July-2023')
    };

    this.roomList = [...this.roomList, room]
  }
}
