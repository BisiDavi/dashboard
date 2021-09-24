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

export type InventoryState = {
    product: {
        name: string;
        image: string;
        price: string;
        quantity: string;
        description: string;
    };
};

export type newsCategoryType =
    | "sports"
    | "technology"
    | "entertainment"
    | "business"
    | "health";

export type UIStateType = {
    sidebarMenu: boolean;
};

export type UIType = "TOGGLE_SIDEBAR_MENU";

export type UIActionType = {
    type: UIType;
};

export type stateFromReduxType =
    | { theme: string; toggleTheme: boolean }
    | { sidebarMenu: boolean }
    | { product: any };
