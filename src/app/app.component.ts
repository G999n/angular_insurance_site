import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./navbar/navbar.component";
import { BannerComponent } from "./banner/banner.component";
import { FeaturesComponent } from "./features/features.component";
import { AboutIncepComponent } from "./about-incep/about-incep.component";
import { InsServicesComponent } from './ins-services/ins-services.component';
import { CompanyFeaturesComponent } from './company-features/company-features.component';
import { ExperienceMembersComponent } from './experience-members/experience-members.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { BlogComponent } from './blog/blog.component';
import { SubsComponent } from './subs/subs.component';
import { FooterComponent } from "./footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, BannerComponent, FeaturesComponent, AboutIncepComponent, InsServicesComponent, CompanyFeaturesComponent, ExperienceMembersComponent, ReviewsComponent, BlogComponent, SubsComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ang_ins';
}
