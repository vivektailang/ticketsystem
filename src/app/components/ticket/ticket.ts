import { Issue } from './issue';

export class Ticket {
    id: string = '';
    desc: string = '';
    status: string = '';
    subject: string = '';
    colorStatus: string = '';
    issues: Issue[] = [];
}
