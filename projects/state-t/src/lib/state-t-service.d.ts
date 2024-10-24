declare module 'state-t-service' {
    export interface StateComponent<T> {
        state: T;
    }

    export class StateTService<T, H = T> {
        constructor();
        setState(componentId: string, state: T): void;
        getState(componentId: string): T | undefined;
        getStateOtherType(componentId: string, typeFilter?: new (...args: any[]) => H): H | undefined;
        getStateObservable(componentId: string): Observable<T> | undefined ;
        getAllStates(): Map<string, StateComponent<T>> ;
        clearAllStates(): void;
    }
}
