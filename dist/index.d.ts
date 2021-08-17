export interface SaveToHomeParams {
    manifest: any;
    link: string;
    payload?: any;
    server?: string;
}
export declare const saveToHome: (params: SaveToHomeParams) => void;
