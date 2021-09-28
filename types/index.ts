import { useStyles } from "@styles/table.styles";

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
    products: {
        name: string;
        price: string;
        quantity: string;
        description: string;
    }[];
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
    | { products: any[] };

export interface Data {
    price: number;
    description: string;
    quantity: number;
    name: string;
    category: string;
}

export type Order = "asc" | "desc";

export interface EnhancedTableProps {
    classes: ReturnType<typeof useStyles>;
    numSelected: number;
    onRequestSort: (
        event: React.MouseEvent<unknown>,
        property: keyof Data,
    ) => void;
    onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
    order: Order;
    orderBy: string;
    rowCount: number;
}

export interface HeadCell {
    id: keyof Data;
    label: string;
}

export type formValues = {
    name: string;
    price: string;
    description: string;
    category: string;
    quantity: string;
};
