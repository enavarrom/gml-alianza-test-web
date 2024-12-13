import { Component, inject, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button'; 
import { MatCardModule } from '@angular/material/card'; 
import { MatTableModule } from '@angular/material/table'; 
import { MatIconModule } from '@angular/material/icon'; 
import { MatInputModule } from '@angular/material/input'
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { ClientService } from '../services/client.service';
import { Client } from '../services/client';
import { ModalComponent } from './modal/modal.component';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-client',
  imports: [MatButtonModule, MatCardModule, MatTableModule, MatIconModule, MatInputModule, MatFormFieldModule, FormsModule],
  templateUrl: './client.component.html',
  styleUrl: './client.component.css'
})
export class ClientComponent implements OnInit{
  clients: Client[] = []; 
  displayedColumns: string[] = ['sharedKey', 'businessId', 'email', 'phone', 'dateAdded', 'actions'];
  sharedKeySearch: string = '';
  readonly dialog = inject(MatDialog);

  constructor(private clientService: ClientService) {}

  ngOnInit(): void {
    this.clientService.getClients().subscribe(data => { this.clients = data; }); 
  }

  onSearch(): void { 
    this.clientService.searchClientsBySharedKey(this.sharedKeySearch).subscribe( data => this.clients = data, error => console.error('There was an error!', error) );
  }

  openDialog(client?: Client): void {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '600px',
      data: { client }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        if (client) {
          result.sharedKey = client.sharedKey;
          this.clientService.editClient(result).subscribe( () => this.ngOnInit(), error => console.error('Error al editar el cliente', error) );
        } else {
          this.clientService.createClient(result).subscribe( () => this.ngOnInit(), error => console.error('Error al crear el cliente', error) );
        }
      }
      this.ngOnInit();
    });
  }
  
}
