
import { NgModule } from "@angular/core";
import { MatChipsModule } from '@angular/material/chips';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTabsModule } from '@angular/material/tabs';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MAT_DATE_LOCALE, MatNativeDateModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatRadioGroup, MatRadioModule } from '@angular/material/radio';
import { MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';
import { MatAccordion, MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';

@NgModule({
  imports: [
    MatDialogModule,
    MatIconModule,
    MatAutocompleteModule,
    MatTooltipModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatChipsModule,
    MatSidenavModule,
    MatCheckboxModule,
    MatMenuModule,
    MatDatepickerModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatButtonToggleModule,
    MatSlideToggleModule,
    MatInputModule,
    MatToolbarModule,
    MatRadioModule,
    MatGridListModule,
    MatStepperModule,
    MatButtonModule,
    MatExpansionModule,
    MatListModule,
    MatCardModule,
    MatTabsModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatListModule,
    MatTableModule,
    MatFormFieldModule,
  ],
  providers: [
    // { 
    //   provide: MD_ERROR_GLOBAL_OPTIONS, 
    //   useValue: { 
    //     errorStateMatcher: showOnDirtyErrorStateMatcher
    //   }
    // },
  ],
  // exports: [
  //   MdIconModule,
  //   MatAutocompleteModule,
  //   MatTooltipModule,
  //   MdNativeDateModule,
  //   MatDatepickerModule,
  //   MatChipsModule,
  //   MatSidenavModule,
  //   MatCheckboxModule,
  //   MatMenuModule,
  //   MdDatepickerModule,
  //   MatDialogModule,
  //   MatProgressSpinnerModule,
  //   MatSelectModule,
  //   MatButtonToggleModule,
  //   MatSlideToggleModule,
  //   MatInputModule,
  //   MdToolbarModule,
  //   MatRadioModule,
  //   MatStepperModule,
  //   MdButtonModule,
  //   MatExpansionModule,
  //   MatListModule,
  //   MatCardModule,
  //   MatTabsModule
  // ]
})
export class MaterialModule { }

