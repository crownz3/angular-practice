import { Component, Input, Output ,EventEmitter, OnChanges, SimpleChanges, OnInit, OnDestroy} from '@angular/core';
import { RoomList } from '../room';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'hinv-rooms-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rooms-list.component.html',
  styleUrl: './rooms-list.component.css'
})
export class RoomsListComponent implements OnChanges ,OnDestroy{
  @Input() rooms : RoomList[] = [];
  @Input() title : string = '';
  @Output() selectedRoom = new EventEmitter<RoomList>();
  
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
    if(changes['title']){
      this.title = changes['title'].currentValue.toUpperCase()
    }
  }

  selectRoom(room:RoomList){
    this.selectedRoom.emit(room)
  }

  ngOnDestroy(): void {
    console.log('destroy')
  }

}
