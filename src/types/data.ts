type Data = {
    data: Art[];
    status: "error" | "success" | "pending";
    error: string | undefined;
    isFetching: boolean;
    ref: (node?: Element | null | undefined) => void;
    inView: boolean;
};

type Art = {
    id: string;
    title: string;
    accession_number: string;
    creation_date?: string;
    creation_date_latest: number;
    department: string;
    technique: string;
    type: string;
    measurements: string;
    did_you_know: string;
    description: string;
    url: string;
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

export type { Art, Creator, Data };
