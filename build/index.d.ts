declare module "easier-cookie" {
    interface Cookie {
        set: Function,
        get: Function,
        remove: Function,
    }
    let Cookie: Cookie;   
    export default Cookie;
}