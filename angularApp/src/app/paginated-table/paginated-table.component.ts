import { Component, OnInit } from '@angular/core';
import { UserService } from '../appServices/user.service';

@Component({
  selector: 'app-paginated-table',
  templateUrl: './paginated-table.component.html',
  styleUrls: ['./paginated-table.component.css']
})
export class PaginatedTableComponent implements OnInit{
  users:any[]=[];
  totalUsers: number = 0; //Store total users count
  pageSize: number = 5; //Default page size
  currentPage: number = 1; //Default page number

  constructor(private _userService:UserService){}

  ngOnInit(): void {
    this.fetchUserData()
  }

  fetchUserData(){
    this._userService.getUserData(this.currentPage, this.pageSize).subscribe((res:any)=>{
      console.log('response✅:=>', res);
        this.users=res.data;
        this.totalUsers = res.total;
    }, (error)=>{
      console.log('ERROR💥:=>', error);
    })
  }

  onPageChange(event: any) {
    this.currentPage = event.pageIndex + 1;
    this.pageSize = event.pageSize;
    this.fetchUserData();
  }
}
