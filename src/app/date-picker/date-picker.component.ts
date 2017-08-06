import { Component, OnInit, ElementRef, Input, EventEmitter, Output } from '@angular/core';

var $ = require('jquery');
var datepicker = require("../../../node_modules/jquery-ui/ui/widgets/datepicker");

@Component({
  selector: 'date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.css']
})

export class DatePickerComponent {
  @Input() label: string;
  @Input() minDate: Date;
  private fromDate: any;
  private toDate: any;

  @Input() selectedFrom: Date;
  @Output() selectedFromChanged = new EventEmitter();

  @Input() selectedTo: Date;
  @Output() selectedToChanged = new EventEmitter();

  constructor(private element: ElementRef) {
  }

  ngOnInit() {
    var that = this;
    this.fromDate = $(this.element.nativeElement.querySelector('#from')).datepicker({
      defaultDate: "+1w",
      changeMonth: true,
      numberOfMonths: 1,
      minDate: this.minDate,
      onSelect: () => that.updateDateFilters("minDate", this.fromDate[0].value, this.toDate, true)
    });

    this.toDate = $(this.element.nativeElement.querySelector('#to')).datepicker({
      defaultDate: "+1w",
      changeMonth: true,
      numberOfMonths: 1,
      minDate: this.minDate,
      onSelect: () => that.updateDateFilters("maxDate", this.toDate[0].value, this.fromDate, false)
    });
  }

  updateDateFilters(attribute: string, value: Date, picker: any, isFrom: boolean) {
    picker.datepicker("option", attribute, value);
    if (isFrom) {
      this.selectedFromChanged.emit(value);
      window.setTimeout($.proxy(function () {
        picker.focus();
      }, this), 10);
    } else {
      this.selectedToChanged.emit(value);
    }
  }
}

