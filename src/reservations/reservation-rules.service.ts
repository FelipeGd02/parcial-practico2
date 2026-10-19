import { ConflictException, Injectable, NotImplementedException } from '@nestjs/common';
import { ReservationEntity } from './entities/reservation.entity';

@Injectable()
export class ReservationRulesService {
  ensureCanCancel(reservation: ReservationEntity): void {
    if (reservation.status === 'cancelled') 
    // TODO 2: Implement the cancellation rule. Do not modify or save the reservation here.
    throw new NotImplementedException('reservation cancelled');
  }
}
