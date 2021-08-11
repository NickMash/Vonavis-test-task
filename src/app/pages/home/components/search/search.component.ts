import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  public loginForm: any = FormGroup;

  @Input() filter: any;
  @Output() updateValue = new EventEmitter();

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      searchRequest: ['', [Validators.required]],
      sorting: ''
    });
  }

  searchMethod(): void {
      this.updateValue.emit({ search: this.loginForm.get('searchRequest').value });
  }

}
