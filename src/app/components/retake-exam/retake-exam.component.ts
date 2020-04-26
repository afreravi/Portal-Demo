import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-retake-exam',
  templateUrl: './retake-exam.component.html',
  styleUrls: ['./retake-exam.component.css']
})
export class RetakeExamComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<RetakeExamComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
  }

}
