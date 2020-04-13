import {LocationCoordinatesModel} from './location-coordinates.model';

export interface DisposalsModel {
  location: String;
  coordinates: LocationCoordinatesModel;
  garbageType: String;
  isRecyclable: boolean;
  points: number;
  amount: number;




}
