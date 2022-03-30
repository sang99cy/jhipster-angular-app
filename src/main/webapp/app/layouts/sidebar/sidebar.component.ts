import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../login/login.service';
import { AccountService } from '../../core/auth/account.service';
import { ProfileService } from '../profiles/profile.service';
import { Router } from '@angular/router';

@Component({
  selector: 'jhi-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  inSideBar?: boolean;
  constructor(
    private loginService: LoginService,
    private accountService: AccountService,
    private profileService: ProfileService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.inSideBar = false;
  }
}
