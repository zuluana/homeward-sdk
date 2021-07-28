export interface SaveToHomeParams {
    name: string;
    description?: string;
    letter: string;
    link: string;
    backgroundColor: string;
    themeColor: string;
    payload?: any;
    devServer?: string;
    prodServer?: string;
}
export declare const saveToHome: (params: SaveToHomeParams) => void;
