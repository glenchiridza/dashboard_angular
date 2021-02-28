import {Injectable} from '@angular/core';
import { Stand } from './stand';
import {Subject, Observable} from 'rxjs';

@Injectable()
export class StandService {


    getStands(): Observable<Stand[]> {
        let subject = new Subject<Stand[]>()
        setTimeout( () => {subject.next(stands); subject.complete();},100);

        return subject;
    }

    getStand(id:string):Stand|any {
        return stands.find(stand => stand.id === id);
    }
}



  const stands: Stand[] = [
    {
        id:"@#@DFFDF",
      title: 'Malbereign stand',
      price: 300,
      location: "Extension B",
      description: '300 square meters'
    },
    {
        id:"sdf2f234e2",
      title: 'Mount pleasant stand',
      price: 300,
      location: "1132 Extention C",
      description:'400 square meters'
    },
    {
        id:"2324dsaf2afda",
      title:'WestGate Stand',
      price: 3000,
      location: "1789 highway B",
      description:'500 square meters',
    },
    {
        id:"2342sf vf2x",
      title: 'Arundel Stand',
      price: 2300,
      location: "King Goerge road",
      description: '1000 square meters'
    }
  ];