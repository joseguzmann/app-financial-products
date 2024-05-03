import {parse} from 'date-fns';
import {formatDateToString} from '@/helpers';

describe('formatDateToString', () => {
    it('formats a date correctly', () => {
        const date = parse('2023-01-01', 'yyyy-MM-dd', new Date());

        expect(formatDateToString(date)).toBe('01/01/2023');
    });

    it('formats a different date correctly', () => {
        const date = parse('2024-12-31', 'yyyy-MM-dd', new Date());

        expect(formatDateToString(date)).toBe('31/12/2024');
    });
});
