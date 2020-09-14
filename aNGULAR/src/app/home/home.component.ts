import { Component, OnInit } from '@angular/core';
import { CamundaRestService } from '../camunda-rest.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private fileToUpload: File = null;
  public SUCCESS = false;
  title = 'Hello';

  constructor(private camundaRestService: CamundaRestService, private router: Router) { }

  ngOnInit(): void {
    this.router.navigate(['/home/admin']);
  }

  // handleFileInput(files: FileList) {
  //   this.fileToUpload = files.item(0);
  //   this.uploadFileToActivity();
  // }

  // uploadFileToActivity() {
  //   this.camundaRestService.deployProcess(this.fileToUpload).subscribe(data => {
  //     this.SUCCESS = true;
  //     }, error => {
  //       console.log(error);
  //   });
  // }
}
