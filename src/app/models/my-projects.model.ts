export interface MyProjects {
    image: string;
    title: string;
    links?: Link[];
    imagePosition: string;
}

interface Link {
    url: string;
    text: string;
}
