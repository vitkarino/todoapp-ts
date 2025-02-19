class LocalStorage 
{
    static set<T>(key: string, value: T): void 
    {
        localStorage.setItem(key, JSON.stringify(value));
    }

    static get<T>(key: string): T | null 
    {
        try 
        {
            const item = localStorage.getItem(key);
            return item ? JSON.parse(item) : null;
        } catch (error) 
        {
            return null;
        }
    }
}
