import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pricing-table';

  cards = [
    {
      title: "Free",
      price: "$0",
      user: "Single User",
      storage: "5GB",
      unlimited_public_projects: true,
      community_access: true,
      unlimited_private_projects: false,
      dedicated_phone_support: false,
      free_subdomain: false,
      monthly_reports: false
    },
    {
      title: "Plus",
      price: "$9",
      user: "5 Users",
      storage: "50GB",
      unlimited_public_projects: true,
      community_access: true,
      unlimited_private_projects: true,
      dedicated_phone_support: true,
      free_subdomain: true,
      monthly_reports: false
    },
    {
      title: "Pro",
      price: "$49",
      user: "Unlimited Users",
      storage: "150GB",
      unlimited_public_projects: true,
      community_access: true,
      unlimited_private_projects: true,
      dedicated_phone_support: true,
      free_subdomain: true,
      monthly_reports: true
    }
  ]
}
