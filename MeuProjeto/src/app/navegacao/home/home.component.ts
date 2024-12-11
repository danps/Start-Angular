import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styles: ``
})
export class HomeComponent {

  images = [
    { 
      url: '/assets/iso-republic-milky-way-sky-448x300.jpg', 
      alt: 'Milky Way Sky',
      description: 'A beautiful view of the Milky Way galaxy in the night sky.'
    },
    { 
      url: '/assets/iso-republic-large-fall-leaf-451x300.jpg', 
      alt: 'Large Fall Leaf',
      description: 'A close-up shot of a large fall leaf with vibrant colors.'
    }, 
    { 
      url: '/assets/iso-republic-autumn-foliage-fallen-leaves-450x300.jpeg', 
      alt: 'Autumn Foliage Fallen Leaves',
      description: 'Fallen leaves creating a colorful autumn foliage.'
    },
    { 
      url: '/assets/iso-republic-autumn-leaf-still-life-450x300.jpg', 
      alt: 'Autumn Leaf Still Life',
      description: 'A still life composition of an autumn leaf.'
    }, 
    { 
      url: '/assets/iso-republic-bacon-meat-cook-food-450x300.jpg', 
      alt: 'Bacon Meat Cook Food',
      description: 'Deliciously cooked bacon on a kitchen table.'
    }, 
    { 
      url: '/assets/iso-republic-morning-dove-bird-450x300.jpg', 
      alt: 'Morning Dove Bird',
      description: 'A peaceful morning dove perched on a branch.'
    }, 
  ];
}