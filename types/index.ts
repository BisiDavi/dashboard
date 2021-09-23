export type cardContentType = {
    btnVariant: "outlined" | "contained" | "text";
    title: string;
    info: string;
    btnText: string;
    icon: string;
};

export interface NewsCardProps {
    content: {
        author?: string;
        source: {
            id?: string;
            name?: string;
        };
        title: string;
        description?: string;
        url?: string;
        urlToImage?: string;
        publishedAt?: string;
        content?: string;
    };
}

export type contentType = {
    author?: string;
    source: {
        id?: string;
        name?: string;
    };
    title: string;
    description?: string;
    url?: string;
    urlToImage?: string;
    publishedAt?: string;
    content?: string;
};
