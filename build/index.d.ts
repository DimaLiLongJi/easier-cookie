export = Cookie;
export as namespace Cookie;

declare namespace Cookie{
    function set(name: string, value: any, options?: any): void;
    function get(name: string): any;
    function remove(name: string): boolean;
}
