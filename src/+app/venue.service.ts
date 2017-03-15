import { Injectable } 	from '@angular/core';
import { Venue } 		from './venue';
import { VENUES } 		from './venues';

@Injectable()
export class VenueService {
	getVenues(): Promise<Venue[]> {
    	return Promise.resolve(VENUES);
  	}
}