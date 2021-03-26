import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DxScrollViewComponent } from 'devextreme-angular/ui/scroll-view';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'my-app';

  @ViewChild('scrollView') scrollView?: DxScrollViewComponent;

  ngOnInit(): void {
    setTimeout(() => {
      console.log(this.scrollView?.instance.scrollWidth());
      this.scrollView?.instance.scrollTo(100);
      console.log(this.scrollView?.instance.clientWidth());
    }, 200);
  }

}
