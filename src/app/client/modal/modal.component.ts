import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, MAT_DATE_LOCALE, DateAdapter, MAT_DATE_FORMATS, NativeDateAdapter } from '@angular/material/core'
import { DatePipe } from '@angular/common'; 

export const MY_DATE_FORMATS = { parse: { dateInput: 'yyyy-MM-dd', }, display: { dateInput: 'yyyy-MM-dd', monthYearLabel: 'MMM yyyy', dateA11yLabel: 'LL', monthYearA11yLabel: 'MMMM yyyy', }, };

@Component({
  selector: 'app-modal',
  imports: [MatFormFieldModule, MatInputModule, FormsModule, MatButtonModule, MatDialogModule, MatDatepickerModule, ReactiveFormsModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css',
  providers: [DatePipe, { provide: DateAdapter, useClass: NativeDateAdapter }, { provide: MAT_DATE_LOCALE, useValue: 'en-GB' }, { provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMATS }]
})
export class ModalComponent {
  client: any = {};

  constructor(
    public dialogRef: MatDialogRef<ModalComponent>,
    private datePipe: DatePipe,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    if (data) {
      this.client = { ...data.client };
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onOkClick(): void {
    const formattedClient = { ...this.client, startDate: this.formatDate(this.client.startDate), endDate: this.formatDate(this.client.endDate) };
    this.dialogRef.close(formattedClient);
  }

  formatDate(date: Date): string { return this.datePipe.transform(date, 'yyyy-MM-dd')!; }
}
