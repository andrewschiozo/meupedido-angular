export interface Store {
    
    getData(): any;

    remove(id: number): boolean;

    getById(id: number): any;

    save(data: any): any;

    load(): void;

    getEntityToEdit(): any | null;

    setEntityToEdit(data: any): void;

    clearEntityToEdit(): void;
}