type Art = {
    id: string;
    title: string;
    accession_number: string;
    creation_date?: string;
    creation_date_latest: number;
    department: string;
    creators: Creator[];
    images: { web: { url: string; width: string; height: string; filesize: string; filename: string } };
};

type Creator = {
    biography: null;
    birth_year: string;
    death_year: string;
    description?: string;
    extent: null;
    id: number;
    name_in_original_language: null | string;
    qualifier: null;
    role: string;
};

export type { Art, Creator };
