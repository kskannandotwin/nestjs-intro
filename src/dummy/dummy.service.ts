/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';

@Injectable()
export class DummyService {
    public work(): string {
        return 'worke done!';
    }
}
