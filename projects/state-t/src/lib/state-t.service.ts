import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
interface StateComponent<T> {
  state: T;
}
@Injectable({
  providedIn: 'root'
})
export class StateTService <T,H=T > {
  private componentStates = new Map<string, StateComponent<T>>();
  private stateSubjects = new Map<string, BehaviorSubject<T>>(); 

  constructor() { }

  setState(componentId: string, state: T): void {
    this.componentStates.set(componentId, { state });
    if (!this.stateSubjects.has(componentId)) {
      this.stateSubjects.set(componentId, new BehaviorSubject<T>(state));
    }
    this.stateSubjects.get(componentId)?.next(state);
  }
  getStateOtherType(componentId: string, typeFilter?: new (...args: []) => H): H | undefined {
    const state = this.getState(componentId) as H;
    if (state && typeFilter && !(state instanceof typeFilter)) {
      return undefined;  
    }
    return state;
  }

  getState(componentId: string): T | undefined {
    const stateWithMode = this.componentStates.get(componentId);
    return stateWithMode?.state;
  }
  getStateObservable(componentId: string): Observable<T> | undefined {
    return this.stateSubjects.get(componentId)?.asObservable() ;
  }
  getAllStates(): Map<string, StateComponent<T>> {
    return this.componentStates;
  }
  clearAllStates(): void {
    this.componentStates.clear();
  }
  

}
