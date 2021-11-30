import { Component, Inject, OnInit } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
@Component({
  selector: 'app-cuadro-modal',
  templateUrl: './cuadro-modal.component.html',
  styleUrls: ['./cuadro-modal.component.css']
})
export class CuadroModalComponent implements OnInit {

  constructor(
    public dialogo: MatDialogRef<CuadroModalComponent>,
    @Inject(MAT_DIALOG_DATA) public mensaje: string) {}

  cerrar():void {
    this.dialogo.close(false);
  }

  confirmado(): void {
    this.dialogo.close(true);
  }
  
  ngOnInit() {
  }
}
