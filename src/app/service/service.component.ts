/*
 * AMRIT – Accessible Medical Records via Integrated Technology
 * Integrated EHR (Electronic Health Records) Solution
 *
 * Copyright (C) "Piramal Swasthya Management and Research Institute"
 *
 * This file is part of AMRIT.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see https://www.gnu.org/licenses/.
 */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css'],
})
export class ServiceComponent implements OnInit {
  servicesList: any = [];

  constructor(private router: Router) {}

  ngOnInit() {
    const servicesListStore = localStorage.getItem('services');
    if (servicesListStore !== null) {
      this.servicesList = JSON.parse(servicesListStore);
    }
  }
  handleKeyselectService(event: KeyboardEvent, service: any): void {
    if (event.key == 'Enter' || event.key == 'Spacebar' || event.key == ' ') {
      this.selectService(service);
    }
  }

  selectService(service: any): void {
    localStorage.setItem('providerServiceID', service.providerServiceID);
    sessionStorage.setItem('apimanClientKey', service.apimanClientKey);
    this.router.navigate(['/facility']);
  }
}
