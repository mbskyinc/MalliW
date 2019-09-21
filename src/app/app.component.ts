import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, elementAt } from 'rxjs/operators';
//import {MatGridListModule} from '@angular/material/grid-list';
//import {mat-button} from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'MalliWilliams';

  temp_file_json;
  //href='samplehref';
  show_carousel_image_number = 0;
  carousel_images = [];
  carouselFlag = false;
  breakpoint = 1;

  restItems: any;
  restItemsUrl = "https://www.westelm.com/services/catalog/v4/category/shop/new/all-new/index.json";

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.breakpoint = (window.innerWidth <= 800) ? 1 : 3;
    var json_url = "https://www.westelm.com/services/catalog/v4/category/shop/new/all-new/index.json";

    this.temp_file_json = JSON.parse(this.file_content);
    
    /* this.href = this.temp_file_json.groups[0].hero.href;
     console.log('ngOnInit:' +JSON.stringify(this.temp_file_json.groups[0]));
     console.log('ngOnInit:' + this.href);*/

    //this.getRestItems();
    /*
          fetch("https://www.westelm.com/services/catalog/v4/category/shop/new/all-new/index.json"
                   , {mode: 'no-cors'})
                   .then((res) => res.json())
                        .then((data) => {
                             console.log('Data:'+JSON.stringify(data));
                             //this.setState({ fetched_questionset: fetched_questionset[0] });
                             //this.setState({products:json_url});
                        })
                        .catch((err)=>{console.log('ERROR:'+err)});
    */
  }
  /*
      // Read all REST Items
    getRestItems(): void {
      this.restItemsServiceGetRestItems()
        .subscribe(
          restItems => {
            this.restItems = restItems;
            console.log(JSON.stringify(this.restItems));
          }
        )
    }
  
    // Rest Items Service: Read all REST Items
    restItemsServiceGetRestItems() {
      return this.http
        .get<any[]>(this.restItemsUrl)
        .pipe(map(data => data));
    }
  */
  file_content = '{"id":"shop/new/all-new","name":"All New","categoryType":"subcat","groups":[{"id":"flannel-herringbone-duvet-cover-shams-medium-gray-b2257","name":"Organic Flannel Herringbone Duvet Cover + Shams - Medium Gray","links":{"www":"https://www.westelm.com/products/flannel-herringbone-duvet-cover-shams-medium-gray-b2257/"},"priceRange":{"selling":{"high":199,"low":34}},"thumbnail":{"size":"m","meta":"","alt":"","rel":"thumbnail","width":363,"href":"https://www.westelm.com/weimgs/rk/images/wcm/products/201934/0078/flannel-herringbone-duvet-cover-shams-medium-gray-2-m.jpg","height":363},"hero":{"size":"m","meta":"","alt":"","rel":"hero","width":363,"href":"https://www.westelm.com/weimgs/rk/images/wcm/products/201934/0078/flannel-herringbone-duvet-cover-shams-medium-gray-2-m.jpg","height":363},"images":[{"size":"m","meta":"","alt":"","rel":"althero","width":363,"href":"https://www.westelm.com/weimgs/rk/images/wcm/products/201934/0078/flannel-herringbone-duvet-cover-shams-medium-gray-m.jpg","height":363},{"size":"m","meta":"","alt":"","rel":"althero","width":363,"href":"https://www.westelm.com/weimgs/rk/images/wcm/products/201922/0020/full-moon-felted-pillow-slate-m.jpg","height":363}],"swatches":[],"messages":[],"flags":[{"bopisSuppress":false,"rank":3,"id":"newcore"},{"bopisSuppress":false,"rank":7,"id":"organic"}],"reviews":{"recommendationCount":0,"likelihood":0,"reviewCount":0,"averageRating":0,"id":"flannel-herringbone-duvet-cover-shams-medium-gray-b2257","type":"GROUP_REVIEWS"}},{"id":"organic-flannel-solid-duvet-cover-shams-b2832","name":"Organic Flannel Solid Duvet Cover + Shams","links":{"www":"https://www.westelm.com/products/organic-flannel-solid-duvet-cover-shams-b2832/"},"priceRange":{"selling":{"high":199,"low":34}},"thumbnail":{"size":"m","meta":"","alt":"","rel":"thumbnail","width":363,"href":"https://www.westelm.com/weimgs/rk/images/wcm/products/201934/0078/organic-flannel-solid-duvet-cover-shams-1-m.jpg","height":363},"hero":{"size":"m","meta":"","alt":"","rel":"hero","width":363,"href":"https://www.westelm.com/weimgs/rk/images/wcm/products/201934/0078/organic-flannel-solid-duvet-cover-shams-1-m.jpg","height":363},"images":[{"size":"m","meta":"","alt":"","rel":"althero","width":363,"href":"https://www.westelm.com/weimgs/rk/images/wcm/products/201934/0078/organic-flannel-solid-duvet-cover-shams-m.jpg","height":363}],"swatches":[],"messages":[],"flags":[{"bopisSuppress":false,"rank":3,"id":"newcore"},{"bopisSuppress":false,"rank":7,"id":"organic"}],"reviews":{"recommendationCount":0,"likelihood":0,"reviewCount":0,"averageRating":0,"id":"organic-flannel-solid-duvet-cover-shams-b2832","type":"GROUP_REVIEWS"}},{"id":"crinkle-velvet-duvet-cover-shams-dusty-blush-b2260","name":"Crinkle Velvet Duvet Cover + Shams - Dusty Blush","links":{"www":"https://www.westelm.com/products/crinkle-velvet-duvet-cover-shams-dusty-blush-b2260/"},"priceRange":{"selling":{"high":209,"low":39}},"thumbnail":{"size":"m","meta":"","alt":"","rel":"thumbnail","width":363,"href":"https://www.westelm.com/weimgs/rk/images/wcm/products/201934/0001/crinkle-velvet-duvet-cover-shams-dusty-blush-1-m.jpg","height":363},"hero":{"size":"m","meta":"","alt":"","rel":"hero","width":363,"href":"https://www.westelm.com/weimgs/rk/images/wcm/products/201934/0001/crinkle-velvet-duvet-cover-shams-dusty-blush-1-m.jpg","height":363},"images":[{"size":"m","meta":"","alt":"","rel":"althero","width":363,"href":"https://www.westelm.com/weimgs/rk/images/wcm/products/201922/0073/crinkle-velvet-duvet-cover-m.jpg","height":363},{"size":"m","meta":"","alt":"","rel":"althero","width":363,"href":"https://www.westelm.com/weimgs/rk/images/wcm/products/201934/0001/crinkle-velvet-duvet-cover-shams-dusty-blush-m.jpg","height":363}],"swatches":[],"messages":[],"flags":[{"bopisSuppress":false,"rank":3,"id":"newcore"}],"reviews":{"recommendationCount":0,"likelihood":0,"reviewCount":0,"averageRating":0,"id":"crinkle-velvet-duvet-cover-shams-dusty-blush-b2260","type":"GROUP_REVIEWS"}},{"id":"crinkle-velvet-duvet-cover-shams-regal-blue-b2262","name":"Crinkle Velvet Duvet Cover + Shams - Regal Blue","links":{"www":"https://www.westelm.com/products/crinkle-velvet-duvet-cover-shams-regal-blue-b2262/"},"priceRange":{"selling":{"high":209,"low":39}},"thumbnail":{"size":"m","meta":"","alt":"","rel":"thumbnail","width":363,"href":"https://www.westelm.com/weimgs/rk/images/wcm/products/201922/0126/crinkle-velvet-duvet-cover-shams-regal-blue-m.jpg","height":363},"hero":{"size":"m","meta":"","alt":"","rel":"hero","width":363,"href":"https://www.westelm.com/weimgs/rk/images/wcm/products/201922/0126/crinkle-velvet-duvet-cover-shams-regal-blue-m.jpg","height":363},"images":[{"size":"m","meta":"","alt":"","rel":"althero","width":363,"href":"https://www.westelm.com/weimgs/rk/images/wcm/products/201922/0190/crinkle-velvet-duvet-cover-m.jpg","height":363}],"swatches":[],"messages":[],"flags":[{"bopisSuppress":false,"rank":3,"id":"newcore"}],"reviews":{"recommendationCount":0,"likelihood":0,"reviewCount":0,"averageRating":0,"id":"crinkle-velvet-duvet-cover-shams-regal-blue-b2262","type":"GROUP_REVIEWS"}},{"id":"crinkle-velvet-duvet-cover-shams-platinum-b2261","name":"Crinkle Velvet Duvet Cover + Shams - Platinum","links":{"www":"https://www.westelm.com/products/crinkle-velvet-duvet-cover-shams-platinum-b2261/"},"priceRange":{"selling":{"high":49,"low":39}},"thumbnail":{"size":"m","meta":"","alt":"","rel":"thumbnail","width":363,"href":"https://www.westelm.com/weimgs/rk/images/wcm/products/201922/0189/crinkle-velvet-duvet-cover-platinum-m.jpg","height":363},"hero":{"size":"m","meta":"","alt":"","rel":"hero","width":363,"href":"https://www.westelm.com/weimgs/rk/images/wcm/products/201922/0189/crinkle-velvet-duvet-cover-platinum-m.jpg","height":363},"images":[{"size":"m","meta":"","alt":"","rel":"althero","width":363,"href":"https://www.westelm.com/weimgs/rk/images/wcm/products/201922/0127/crinkle-velvet-duvet-cover-platinum-m.jpg","height":363},{"size":"m","meta":"","alt":"","rel":"althero","width":363,"href":"https://www.westelm.com/weimgs/rk/images/wcm/products/201922/0212/lush-velvet-shams-dusty-blush-m.jpg","height":363},{"size":"m","meta":"","alt":"","rel":"althero","width":363,"href":"https://www.westelm.com/weimgs/rk/images/wcm/products/201934/0001/crinkle-velvet-duvet-cover-shams-platinum-m.jpg","height":363}],"swatches":[],"messages":[],"flags":[{"bopisSuppress":false,"rank":3,"id":"newcore"}],"reviews":{"recommendationCount":0,"likelihood":0,"reviewCount":0,"averageRating":0,"id":"crinkle-velvet-duvet-cover-shams-platinum-b2261","type":"GROUP_REVIEWS"}},{"id":"crinkle-velvet-duvet-cover-shams-stone-d7023","name":"Crinkle Velvet Duvet Cover + Shams - Stone","links":{"www":"https://www.westelm.com/products/crinkle-velvet-duvet-cover-shams-stone-d7023/"},"priceRange":{"selling":{"high":209,"low":39}},"thumbnail":{"size":"m","meta":"","alt":"","rel":"thumbnail","width":363,"href":"https://www.westelm.com/weimgs/rk/images/wcm/products/201934/0059/crinkle-velvet-duvet-cover-shams-stone-m.jpg","height":363},"hero":{"size":"m","meta":"","alt":"","rel":"hero","width":363,"href":"https://www.westelm.com/weimgs/rk/images/wcm/products/201934/0059/crinkle-velvet-duvet-cover-shams-stone-m.jpg","height":363},"images":[{"size":"m","meta":"","alt":"","rel":"althero","width":363,"href":"https://www.westelm.com/weimgs/rk/images/wcm/products/201934/0059/crinkle-velvet-duvet-cover-shams-3-m.jpg","height":363}],"swatches":[],"messages":[],"flags":[{"bopisSuppress":false,"rank":3,"id":"newcore"}],"reviews":{"recommendationCount":0,"likelihood":0,"reviewCount":0,"averageRating":0,"id":"crinkle-velvet-duvet-cover-shams-stone-d7023","type":"GROUP_REVIEWS"}},{"id":"crinkle-velvet-duvet-cover-shams-astor-blue-d7022","name":"Crinkle Velvet Duvet Cover + Shams - Astor Blue","links":{"www":"https://www.westelm.com/products/crinkle-velvet-duvet-cover-shams-astor-blue-d7022/"},"priceRange":{"selling":{"high":209,"low":39}},"thumbnail":{"size":"m","meta":"","alt":"","rel":"thumbnail","width":363,"href":"https://www.westelm.com/weimgs/rk/images/wcm/products/201934/0059/crinkle-velvet-duvet-cover-shams-astor-blue-m.jpg","height":363},"hero":{"size":"m","meta":"","alt":"","rel":"hero","width":363,"href":"https://www.westelm.com/weimgs/rk/images/wcm/products/201934/0059/crinkle-velvet-duvet-cover-shams-astor-blue-m.jpg","height":363},"images":[{"size":"m","meta":"","alt":"","rel":"althero","width":363,"href":"https://www.westelm.com/weimgs/rk/images/wcm/products/201934/0059/crinkle-velvet-duvet-cover-shams-m.jpg","height":363}],"swatches":[],"messages":[],"flags":[{"bopisSuppress":false,"rank":3,"id":"newcore"}],"reviews":{"recommendationCount":0,"likelihood":0,"reviewCount":0,"averageRating":0,"id":"crinkle-velvet-duvet-cover-shams-astor-blue-d7022","type":"GROUP_REVIEWS"}},{"id":"washed-cotton-luster-velvet-duvet-cover-shams-platinum-b2011","name":"Washed Cotton Luster Velvet Duvet Cover + Shams - Platinum","links":{"www":"https://www.westelm.com/products/washed-cotton-luster-velvet-duvet-cover-shams-platinum-b2011/"},"priceRange":{"selling":{"high":209,"low":39}},"thumbnail":{"size":"m","meta":"","alt":"","rel":"thumbnail","width":363,"href":"https://www.westelm.com/weimgs/rk/images/wcm/products/201934/0060/washed-cotton-luster-velvet-duvet-cover-shams-platinum-m.jpg","height":363},"hero":{"size":"m","meta":"","alt":"","rel":"hero","width":363,"href":"https://www.westelm.com/weimgs/rk/images/wcm/products/201934/0060/washed-cotton-luster-velvet-duvet-cover-shams-platinum-m.jpg","height":363},"images":[{"size":"m","meta":"","alt":"","rel":"althero","width":363,"href":"https://www.westelm.com/weimgs/rk/images/wcm/products/201934/0060/washed-cotton-luster-velvet-duvet-cover-shams-platinum-1-m.jpg","height":363},{"size":"m","meta":"","alt":"","rel":"althero","width":363,"href":"https://www.westelm.com/weimgs/rk/images/wcm/products/201934/0056/washed-cotton-luster-velvet-duvet-cover-shams-platinum-2-m.jpg","height":363},{"size":"m","meta":"","alt":"","rel":"althero","width":363,"href":"https://www.westelm.com/weimgs/rk/images/wcm/products/201934/0056/washed-cotton-luster-velvet-duvet-cover-shams-platinum-m.jpg","height":363}],"swatches":[],"messages":[],"flags":[{"bopisSuppress":false,"rank":3,"id":"newcore"},{"bopisSuppress":false,"rank":5,"id":"mono"},{"bopisSuppress":false,"rank":8,"id":"handmade"}],"reviews":{"recommendationCount":0,"likelihood":0,"reviewCount":0,"averageRating":0,"id":"washed-cotton-luster-velvet-duvet-cover-shams-platinum-b2011","type":"GROUP_REVIEWS"}},{"id":"luster-velvet-duvet-cover-shams-dusty-blush-b1899","name":"Washed Cotton Luster Velvet Duvet Cover + Shams - Dusty Blush","links":{"www":"https://www.westelm.com/products/luster-velvet-duvet-cover-shams-dusty-blush-b1899/"},"priceRange":{"selling":{"high":209,"low":39}},"thumbnail":{"size":"m","meta":"","alt":"","rel":"thumbnail","width":363,"href":"https://www.westelm.com/weimgs/rk/images/wcm/products/201934/0060/washed-cotton-luster-velvet-duvet-cover-shams-dusty-blush-m.jpg","height":363},"hero":{"size":"m","meta":"","alt":"","rel":"hero","width":363,"href":"https://www.westelm.com/weimgs/rk/images/wcm/products/201934/0060/washed-cotton-luster-velvet-duvet-cover-shams-dusty-blush-m.jpg","height":363},"images":[{"size":"m","meta":"","alt":"","rel":"althero","width":363,"href":"https://www.westelm.com/weimgs/rk/images/wcm/products/201934/0060/washed-cotton-luster-velvet-duvet-cover-shams-m.jpg","height":363},{"size":"m","meta":"","alt":"","rel":"althero","width":363,"href":"https://www.westelm.com/weimgs/rk/images/wcm/products/201934/0056/washed-cotton-luster-velvet-duvet-cover-shams-dusty-blush-1-m.jpg","height":363}],"swatches":[],"messages":[],"flags":[{"bopisSuppress":false,"rank":3,"id":"newcore"},{"bopisSuppress":false,"rank":5,"id":"mono"},{"bopisSuppress":false,"rank":8,"id":"handmade"}],"reviews":{"recommendationCount":0,"likelihood":0,"reviewCount":0,"averageRating":0,"id":"luster-velvet-duvet-cover-shams-dusty-blush-b1899","type":"GROUP_REVIEWS"}},{"id":"lush-velvet-tack-stitch-quilt-shams-golden-oaks-b2519","name":"Lush Velvet Tack Stitch Quilt + Shams - Golden Oaks","links":{"www":"https://www.westelm.com/products/lush-velvet-tack-stitch-quilt-shams-golden-oaks-b2519/"},"priceRange":{"selling":{"high":229,"low":49}},"thumbnail":{"size":"m","meta":"","alt":"","rel":"thumbnail","width":363,"href":"https://www.westelm.com/weimgs/rk/images/wcm/products/201934/0001/lush-velvet-tack-stitch-quilt-shams-golden-oaks-1-m.jpg","height":363},"hero":{"size":"m","meta":"","alt":"","rel":"hero","width":363,"href":"https://www.westelm.com/weimgs/rk/images/wcm/products/201934/0001/lush-velvet-tack-stitch-quilt-shams-golden-oaks-1-m.jpg","height":363},"images":[{"size":"m","meta":"","alt":"","rel":"althero","width":363,"href":"https://www.westelm.com/weimgs/rk/images/wcm/products/201934/0001/lush-velvet-tack-stitch-quilt-shams-golden-oaks-m.jpg","height":363}],"swatches":[],"messages":[],"flags":[{"bopisSuppress":false,"rank":3,"id":"newcore"},{"bopisSuppress":false,"rank":8,"id":"handmade"}],"reviews":{"recommendationCount":0,"likelihood":0,"reviewCount":0,"averageRating":0,"id":"lush-velvet-tack-stitch-quilt-shams-golden-oaks-b2519","type":"GROUP_REVIEWS"}}],"totalPages":78,"categories":[]}';


  on(n) {
    this.carouselFlag = true;
    this.carousel_images = this.temp_file_json.groups[n].images;
    this.show_carousel_image_number = 0;
  
   // document.getElementById("overlay").style.display = "block";
  }

  off() {
    this.carouselFlag = false;
  //  document.getElementById("overlay").style.display = "none";
    this.show_carousel_image_number = 0;
  }

  // Next/previous controls
  plusSlides(n) {
    if (n === -1 && this.show_carousel_image_number === 0) {
      this.show_carousel_image_number = this.carousel_images.length - 1;
    } else {
      let temp = this.show_carousel_image_number + n;
      this.show_carousel_image_number = temp % this.carousel_images.length;
    }
  }

  currentImage(n) {
    this.show_carousel_image_number = n % this.carousel_images.length;
  }

  onResize(event) {
    this.breakpoint = (event.target.innerWidth <= 800) ? 1 : 3;
  }
}
