export interface Rooms {
    totalRooms?: number;
    availableRooms?: number;
    bookedRooms?: number;
}

export interface RoomList {
    roomType: string;
    amaeties: string;
    price: number;
    photos?: string;
    checkInTime: Date;
    checkOutTime: Date;
}

