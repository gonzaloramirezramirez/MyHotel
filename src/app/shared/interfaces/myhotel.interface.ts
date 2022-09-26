export interface RoomType{
    Id: number;
    RoomType: string;
}


export interface Reserve {
    Id: number;
    Assigned: string;
    Subject: string;
}

export interface Bedroom {
    ID: number;
    Name: string;
    Price: number;
    Position: string;
    Picture: string;
    BirthDate: string;
    HireDate: string;
    Notes: string;
    Address: string;
  }