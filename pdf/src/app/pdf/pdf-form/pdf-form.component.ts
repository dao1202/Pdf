import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as _ from 'lodash';
import { Subject } from 'rxjs'
import { takeUntil } from 'rxjs/operators';
import {MenuItem} from 'primeng/api';

/**
 * Component to manage the communication list.
 *
 * @Author Markus Juettner (IBM Client Innovation Center Germany GmbH)
 */
@Component({
  selector: 'pdf-form',
  templateUrl: './pdf-form.component.html'
})
export class PdfFormComponent implements OnInit, OnDestroy {

  /** array of WorkExperience */
  workExperiences: WorkExperience[];

  /** cloned array of WorkExperience */
  clonedWorkExperiences: { [s: string]: WorkExperience; } = {};

  /** Langague used for new messages. */
  usedLanguage: string;

  /** Items to configurate the quick menu component */
  items: MenuItem[] = [
    {
      label: 'test1',
     // icon: 'rc-i-line rc-i-task',
     // command: () => this.openCreateTaskDialog()
    },
    {
      label: 'test2',
      // icon: 'rc-i-line rc-i-document',
      // command: () => this.openCreateMessageDialog(1)
    },
    {
      label: 'test3',
      // icon: 'rc-i-line rc-i-new-message',
      // command: () => this.openCreateMessageDialog(0)
    }
  ];

  /** Flag to show whether the quick menu is visible or not. */
  quickMenuVisible: boolean;

  /** Subject used to unsubscribe from open observables when component is destroyed. */
  ngUnsubscribe = new Subject();

  /**
   * Constructor for the {@link CustomerCommunicationComponent}.
   *
   * @param {ActivatedRoute} route - The injected router state.
   */
  constructor(
    private route: ActivatedRoute
  ) {}

  /**
   *  Called when initializing.
   */
  ngOnInit() {
    this.route.params.pipe(takeUntil(this.ngUnsubscribe)).subscribe((params: any) => {
    });
  }

  /**
   * Called when destroying.
   */
  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  onRowEditInit(workExperience: WorkExperience) {
    this.clonedWorkExperiences[workExperience.id] = {...workExperience};
  }

  onRowEditSave(workExperience: WorkExperience) {
    if (workExperience.time || workExperience.categrory) {
        delete this.clonedWorkExperiences[workExperience.id];    }  
  }

  onRowEditCancel(workExperience: WorkExperience, index: number) {
      this.workExperiences[index] = this.clonedWorkExperiences[workExperience.id];
      delete this.clonedWorkExperiences[workExperience.id];
  }

  onUpload($event) {

  }

  createEntry() {
    
    if(!this.workExperiences) {
      this.workExperiences = [];
    }
    var newEntry: WorkExperience = {
      id: this.workExperiences.length+1,
      time: "",
      categrory: ""
    }
   
    this.workExperiences.push(newEntry);
  }
}

export class WorkExperience {
  id: number;
  time: string;
  categrory: string;
}
