import { Component } from '@angular/core';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'LearnAngular';
}
