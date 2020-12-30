export interface People {
    id:string,
    name: string,
    otherName?: string,
    lastName: string,
    otherLastName?: string,
    country: string,
    gender: string,
    dateBirth: string,
    gdpr_consent?: boolean,
    created_at?: string,
    updated_at?: string,
    deleted_at?: string
}
