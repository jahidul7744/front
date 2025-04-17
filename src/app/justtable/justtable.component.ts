import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-justtable',
  templateUrl: './justtable.component.html',
  styleUrls: ['./justtable.component.scss']
})
export class JusttableComponent {

  menuOpen = false;

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }
}
