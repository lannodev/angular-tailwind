import { HttpClient } from '@angular/common/http';
import { Component, OnInit, signal } from '@angular/core';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { User } from './model/user.model';
import { FormsModule } from '@angular/forms';
import { TableHeaderComponent } from './components/table-header/table-header.component';
import { TableFooterComponent } from './components/table-footer/table-footer.component';
import { TableRowComponent } from './components/table-row/table-row.component';
import { TableActionComponent } from './components/table-action/table-action.component';
import { toast } from 'ngx-sonner';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [
    AngularSvgIconModule,
    FormsModule,
    TableHeaderComponent,
    TableFooterComponent,
    TableRowComponent,
    TableActionComponent,
  ],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
})
export class TableComponent implements OnInit {
  users = signal<User[]>([]);

  constructor(private http: HttpClient) {
    this.http.get<User[]>('https://freetestapi.com/api/v1/users?limit=8').subscribe({
      next: (data) => this.users.set(data),
      error: (error) => this.handleRequestError(error),
    });
  }

  public toggleUsers(checked: boolean) {
    this.users.update((users) => {
      return users.map((user) => {
        return { ...user, selected: checked };
      });
    });
  }

  private handleRequestError(error: any) {
    const msg = 'An error occurred while fetching users';
    toast.error(msg, {
      position: 'bottom-right',
      description: error.message,
      action: {
        label: 'Undo',
        onClick: () => console.log('Action!'),
      },
      actionButtonStyle: 'background-color:#DC2626; color:white;',
    });
  }

  ngOnInit() {}
}
