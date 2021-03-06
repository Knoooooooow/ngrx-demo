import { Observable, Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { RESET } from './../../core/pet-tag.actions';
import { PetTag } from './../../core/pet-tag.model';

@Component({
    selector: 'app-complete',
    templateUrl: './complete.component.html'
})
export class CompleteComponent implements OnInit, OnDestroy {
    tagState$: Observable<PetTag>;
    private tagStateSubscription: Subscription;
    petTag: PetTag;

    constructor(private store: Store<any>) {
        this.tagState$ = store.select('petTag');
    }

    ngOnInit() {
        this.tagStateSubscription = this.tagState$.subscribe((state) => {
            this.petTag = state;
        });
    }

    ngOnDestroy() {
        this.tagStateSubscription.unsubscribe();
    }

    newTag() {
        this.store.dispatch({
            type: RESET
        });
    }

}