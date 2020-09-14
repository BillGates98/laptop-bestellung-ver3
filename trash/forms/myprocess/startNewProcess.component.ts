import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CamundaRestService } from '../../camunda-rest.service';
import { StartProcessInstanceComponent } from '../general/start-prozess-instance.component';


@Component({
  selector: 'startNewProcess',
  templateUrl: './startNewProcess.component.html',
  styleUrls: []
})
export class startNewProcessComponent extends StartProcessInstanceComponent {
  submitted = false;
  model = new MyProcessData('', '', false);

  constructor(route: ActivatedRoute, camundaRestService: CamundaRestService) {
    super(route, camundaRestService);
  }

}
