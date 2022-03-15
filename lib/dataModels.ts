import {Timestamp} from 'firebase/firestore'

export interface cluster {
    id?: string,
    severity: string,
    description: string,
    occurredAt: string | Timestamp
}