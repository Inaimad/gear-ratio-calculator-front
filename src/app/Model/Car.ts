import {Gearbox} from './Gearbox';
import {Wheel} from './Wheel';

export class Car {
  carType: string;
  finalDriveRation: number;
  gearbox: Gearbox;
  id: number;
  model: string;
  platform: string;
  redline: number;
  transmissionType: string;
  wheel: Wheel;
}
