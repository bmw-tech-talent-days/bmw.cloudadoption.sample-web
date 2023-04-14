import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Observable} from "rxjs";
import {Sample} from "./sample.model";
import {SampleService} from "./sample.service";

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.scss']
})
export class SampleComponent implements OnInit {

  sampleForm: FormGroup = this.fb.group({
    id: [''],
    firstname: [''],
    lastname: ['']
  });

  samples$ : Observable<Sample[]>
  constructor(private fb: FormBuilder, private sampleService: SampleService) {
    this.samples$ = this.sampleService.samples$;
  }

  async ngOnInit() {
    await this.sampleService.loadSamplesAsync();
  }

  async onRefresh() {
    await this.sampleService.loadSamplesAsync();
  }

  async onSubmit() {
    const sample = this.sampleForm.value;
    await this.sampleService.addSampleAsync(sample);
    this.sampleForm.reset();
    setTimeout(() => this.onRefresh(), 1000);
  }
}
